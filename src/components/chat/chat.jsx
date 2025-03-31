// import { useEffect, useState, useRef, useContext } from "react";
// import "./chat.scss";
// import { AuthContext } from "../../context/AuthContext";
// import apiRequest from "../../lib/apiRequest";
// import { format } from "timeago.js";
// import { SocketContext } from "../../context/SocketContext";
// import { useNotificationStore } from "../../lib/notificationStore";

// export default function Chat({ chats }) {
//   const [chat, setChat] = useState(null);
//   const { currentUser } = useContext(AuthContext);
//   const { socket } = useContext(SocketContext);

//   // do not touch up
//   const messageEndRef = useRef(); // Reference to the end of messages
//   const chatContainerRef = useRef(); // Reference to the .center container

//   //notification
//   const decrease = useNotificationStore((state) => state.decrease);

//   useEffect(() => {
//     if (chatContainerRef.current && messageEndRef.current) {
//       chatContainerRef.current.scrollTo({
//         top: chatContainerRef.current.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   }, [chat?.messages]); // Trigger on message updates

//   const handleOpenChat = async (id, receiver) => {
//     try {
//       const res = await apiRequest("chats/" + id);
//       if (!res.data.seenBy.includes(currentUser.id)) {
//         decrease();
//       }
//       setChat({ ...res.data, receiver }); //take evrything in the res.data and add receiver
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const text = formData.get("text");

//     if (!text) {
//       return;
//     }

//     try {
//       const res = await apiRequest.post("messages/" + chat.id, { text });
//       setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
//       e.target.reset();
//       socket.emit("sendMessage", {
//         receiverId: chat.receiver.id,
//         data: res.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const read = async () => {
//       try {
//         await apiRequest.put("/chats/read/" + chat.id);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     if (chat && socket) {
//       socket.on("getMessage", (data) => {
//         if (chat.id === data.chatId) {
//           setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
//           read();
//         }
//       });
//     }
//     return () => {
//       socket.off("getMessage");
//     };
//   }, [socket, chat]);

//   return (
//     <div className="Chat">
//       <div className="messages">
//         <h1>Messages</h1>
//         {chats.map((c) => (
//           <div
//             className="message"
//             key={c.id}
//             style={{
//               backgroundColor:
//                 c.seenBy.includes(currentUser.id) || chat?.id === c.id
//                   ? "white"
//                   : "#fecd514e",
//             }}
//             onClick={() => handleOpenChat(c.id, c.receiver)}
//           >
//             <img src={c.receiver.avatar || "./noavatar.png"} alt="image" />
//             <span>{c.receiver.username}</span>
//             <p>{c.lastMessage}</p>
//           </div>
//         ))}
//       </div>

//       {chat && (
//         <div className="chatBox">
//           <div className="top">
//             <div className="user">
//               <img src={chat.receiver.avatar || "./noavatar.png"} alt="" />
//               {chat.receiver.username}
//             </div>
//             <span className="close" onClick={() => setChat(null)}>
//               X
//             </span>
//           </div>

//           <div className="center" ref={chatContainerRef}>
//             {chat.messages.map((message) => (
//               <div
//                 className="chatMessage"
//                 key={message.id}
//                 style={{
//                   alignSelf:
//                     message.userId === currentUser.id
//                       ? "flex-end"
//                       : "flex-start",
//                   textAlign:
//                     message.userId === currentUser.id ? "right" : "left",
//                 }}
//               >
//                 <p>{message.text}</p>
//                 <span>{format(message.createdAt)}</span>
//               </div>
//             ))}
//             <div ref={messageEndRef}></div>
//           </div>
//           <form onSubmit={handleSubmit} className="bottom">
//             <textarea name="text"></textarea>
//             <button>Send</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

import { useEffect, useState, useRef, useContext, useCallback } from "react";
import "./chat.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { format } from "timeago.js";
import { SocketContext } from "../../context/SocketContext";
import { useNotificationStore } from "../../lib/notificationStore";

export default function Chat({ chats }) {
  const [chat, setChat] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const decrease = useNotificationStore((state) => state.decrease);

  // Refs for scrolling and form
  const messageEndRef = useRef();
  const chatContainerRef = useRef();
  const formRef = useRef();

  // Scroll to bottom when messages change
  const scrollToBottom = useCallback(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  // Handle opening a chat
  const handleOpenChat = useCallback(
    async (id, receiver) => {
      try {
        const res = await apiRequest(`chats/${id}`);
        if (!res.data.seenBy.includes(currentUser.id)) {
          decrease();
        }
        setChat({ ...res.data, receiver });
      } catch (error) {
        console.error("Error opening chat:", error);
      }
    },
    [currentUser.id, decrease]
  );

  // Handle sending a message
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const text = e.target.text.value.trim();
      if (!text || !chat) return;

      try {
        const res = await apiRequest.post(`messages/${chat.id}`, { text });

        // Optimistic update
        setChat((prev) => ({
          ...prev,
          messages: [...prev.messages, res.data],
        }));

        formRef.current.reset();
        socket.emit("sendMessage", {
          receiverId: chat.receiver.id,
          data: res.data,
        });

        scrollToBottom();
      } catch (error) {
        console.error("Error sending message:", error);
      }
    },
    [chat, socket, scrollToBottom]
  );

  // Socket message handler
  useEffect(() => {
    if (!socket) return;

    const handleIncomingMessage = async (data) => {
      if (!chat || chat.id !== data.chatId) return;

      // Check for duplicates before adding
      setChat((prev) => {
        if (prev.messages.some((msg) => msg.id === data.id)) return prev;
        return {
          ...prev,
          messages: [...prev.messages, data],
        };
      });

      // Mark as read
      try {
        await apiRequest.put(`/chats/read/${data.chatId}`);
      } catch (err) {
        console.error("Error marking as read:", err);
      }

      scrollToBottom();
    };

    socket.on("getMessage", handleIncomingMessage);

    return () => {
      socket.off("getMessage", handleIncomingMessage);
    };
  }, [socket, chat, scrollToBottom]);

  // Auto-scroll when messages change
  useEffect(() => {
    scrollToBottom();
  }, [chat?.messages, scrollToBottom]);

  return (
    <div className="Chat">
      <div className="messages">
        <h1>Messages</h1>
        {chats.map((c) => (
          <div
            className="message"
            key={c.id}
            style={{
              backgroundColor:
                c.seenBy.includes(currentUser.id) || chat?.id === c.id
                  ? "white"
                  : "#fecd514e",
            }}
            onClick={() => handleOpenChat(c.id, c.receiver)}
          >
            <img src={c.receiver.avatar || "./noavatar.png"} alt="profile" />
            <span>{c.receiver.username}</span>
            <p>{c.lastMessage}</p>
          </div>
        ))}
      </div>

      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src={chat.receiver.avatar || "./noavatar.png"}
                alt="profile"
              />
              <span>{chat.receiver.username}</span>
            </div>
            <button className="close" onClick={() => setChat(null)}>
              ×
            </button>
          </div>

          <div className="center" ref={chatContainerRef}>
            {chat.messages.map((message) => (
              <div
                className={`chatMessage ${
                  message.userId === currentUser.id ? "own" : ""
                }`}
                key={message.id}
              >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="bottom">
            <textarea name="text" placeholder="Type a message..." required />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
