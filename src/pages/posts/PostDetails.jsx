import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../app/store/slices/posts-slice/post-slice";
import "./PostDetails.css";
import ParticlesComponent from "../../app/particles-layot/ParticlesBackround";

const PostDetails = () => {
  const { post } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const { postId } = useParams();

  useEffect(() => {
    dispatch(getPostById(postId));
  }, []);

  return (

    <>
      <ParticlesComponent />
      <div className="detail">
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
    </>

  );
};

export default PostDetails;
