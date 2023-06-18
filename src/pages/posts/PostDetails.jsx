import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../../app/store/slices/posts-slice/post-slice";
import "./PostDetails.css";

const PostDetails = () => {
  const { post } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const { postId } = useParams();

  useEffect(() => {
    dispatch(getPostById(postId));
  }, []);

  return (
    <div className="detail">
      <Link to="/">Go home</Link>

      <div>
        <div className="title">{post.title}</div>
        <div className="full_info">{post.full_info}</div>
        <div className="amount">{post.amount}</div>
        <div className="amount_of_person">
          Amount of person {post.amount_of_person}
        </div>
        <div className="amount_per_season">
          Amount per season {post.amount_per_season}
        </div>
        <div className="amount_rest">Amount rest {post.amount_rest}</div>
      </div>

      <img src={post.business_plan_file} alt="photo" />
    </div>
  );
};

export default PostDetails;
