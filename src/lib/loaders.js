import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/post/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const res = await apiRequest("/post?" + query);
  return res.data;
};

// export const profilePageLoader = async () => {
//   const res = await apiRequest("/user/profilePosts");
//   const chat_res = await apiRequest("/chats");
//   return {
//     post: res.data,
//     chat: chat_res.data
//   }
//   // return res.data;
//   // return chat_res.data;
// };
export const profilePageLoader = async () => {
  try {
    const [profileData, chatData] = await Promise.all([
      apiRequest("/user/profilePosts"),
      apiRequest("/chats")
    ]);

    return {
      userPosts: profileData.data?.userPosts || [],
      savedPosts: profileData.data?.savedPosts || [],
      chats: chatData.data || []
    };
  } catch (error) {
    console.error("Loader error:", error);
    return {
      userPosts: [],
      savedPosts: [],
      chats: []
    };
  }
};
