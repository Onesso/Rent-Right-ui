import { useState } from "react";
import "./chat.scss";

export default function Chat() {
  const [chat, setChat] = useState(true);
  console.log(`state of chatBox: ${chat}`);
  return (
    <div className="Chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://i.pinimg.com/474x/5d/15/37/5d1537150276823bc0f6ead3b84b4f8c.jpg"
            alt=""
          />
          <span>Frank Were</span>
          <p>Lorem ipsum dolor... ab.</p>
        </div>
        <div className="message">
          <img
            src="https://i.pinimg.com/474x/5d/15/37/5d1537150276823bc0f6ead3b84b4f8c.jpg"
            alt=""
          />
          <span>Frank Were</span>
          <p>Lorem ipsum dolor... ab.</p>
        </div>
        <div className="message">
          <img
            src="https://i.pinimg.com/474x/5d/15/37/5d1537150276823bc0f6ead3b84b4f8c.jpg"
            alt=""
          />
          <span>Frank Were</span>
          <p>Lorem ipsum dolor... ab.</p>
        </div>
        <div className="message">
          <img
            src="https://i.pinimg.com/474x/5d/15/37/5d1537150276823bc0f6ead3b84b4f8c.jpg"
            alt=""
          />
          <span>Frank Were</span>
          <p>Lorem ipsum dolor... ab.</p>
        </div>
        <div className="message">
          <img
            src="https://i.pinimg.com/474x/5d/15/37/5d1537150276823bc0f6ead3b84b4f8c.jpg"
            alt=""
          />
          <span>Frank Were</span>
          <p>Lorem ipsum dolor... ab.</p>
        </div>
        <div className="message">
          <img
            src="https://i.pinimg.com/474x/5d/15/37/5d1537150276823bc0f6ead3b84b4f8c.jpg"
            alt=""
          />
          <span>Frank Were</span>
          <p>Lorem ipsum dolor... ab.</p>
        </div>
        <div className="message">
          <img
            src="https://i.pinimg.com/474x/5d/15/37/5d1537150276823bc0f6ead3b84b4f8c.jpg"
            alt=""
          />
          <span>Frank Were</span>
          <p>Lorem ipsum dolor... ab.</p>
        </div>
        <div className="message">
          <img
            src="https://i.pinimg.com/474x/5d/15/37/5d1537150276823bc0f6ead3b84b4f8c.jpg"
            alt=""
          />
          <span>Frank Were</span>
          <p>Lorem ipsum dolor... ab.</p>
        </div>
        <div className="message">
          <img
            src="https://i.pinimg.com/474x/5d/15/37/5d1537150276823bc0f6ead3b84b4f8c.jpg"
            alt="image"
          />
          <span>Frank Were</span>
          <p>Lorem ipsum dolor... ab.</p>
        </div>
      </div>

      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://i.pinimg.com/474x/5d/15/37/5d1537150276823bc0f6ead3b84b4f8c.jpg"
                alt=""
              />
              Frank Onesso
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>

          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet.</p>
            <span>1 hour</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
