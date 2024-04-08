import React from "react";
import { Link } from "react-router-dom";

const PostThumb = ({ posts, result }) => {
  console.log({
    posts, result
  });
  if (result === 0) {
    return <h2 className="text-center color-c1">No Post</h2>;
  }

  return (
    <div className="post_thumb">
      {posts &&
        posts.map((post) => (
          <Link to={`/post/${post._id}`} key={post._id}>
            <p>{post.content}</p>
            <div className="post_thumb_display">
              <div className="post_thumb_menu">
                <i className="far fa-thumbs-up">{post.likes.length}</i>
                <i className="far fa-comments">{post.comments.length}</i>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default PostThumb;
