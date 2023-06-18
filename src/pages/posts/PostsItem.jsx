import React from "react";
import { Link } from "react-router-dom";

const PostsItem = ({ amount, id, business_plan_file, short_info, title }) => {
  return (
    <div className="post">
      <div>
        <div>
          <p>Title</p>

          {title}
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

      <Link to={String(id)}>
        <img src={business_plan_file} alt="photo" />
      </Link>
    </div>
  );
};

export default PostsItem;
