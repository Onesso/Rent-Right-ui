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

export const profilePageLoader = async () => {
  const res = await apiRequest("/user/profilePosts");
  return res.data;
};
