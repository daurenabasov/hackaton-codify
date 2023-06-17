import React from "react";
import { Link } from "react-router-dom";

const PostsItem = ({ amount, id, short_info, title }) => {
  return (
    <div className="post">
      <div>
        <p>Title</p>

        <Link style={{ textDecoration: "underline" }} to={String(id)}>
          {title}
        </Link>
      </div>
      <div>
        <p>Amount</p>
        {amount}$
      </div>
      <div>
        <p>Short info</p>
        {short_info}
      </div>
    </div>
  );
};

export default PostsItem;
