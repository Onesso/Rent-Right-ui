import Card from "../card/card";
// import listData from "../../lib/dummydata";
import "./list.scss";

export default function List({ post }) {
  console.log("From the list component: ", post);

  // Destructure the post object to get userPosts and savedPosts
  const { userPosts = [], savedPosts = [] } = post || {};

  // Combine both arrays if needed, or handle them separately
  const allPosts = [...userPosts, ...savedPosts];

  return (
    <div className="list">
      {/* {listData.map((post) => (
        <Card item={post} key={post.id} />
      ))} */}

      {allPosts.length > 0 ? (
        allPosts.map((item) => (
          <Card
            key={`${item.id}-${item.userId}`} // More unique key
            item={item}
          />
        ))
      ) : (
        <p className="no-posts">No posts found</p>
      )}
    </div>
  );
}
