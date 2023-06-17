import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../app/store/slices/posts-slice/post-slice";

const PostDetails = () => {
  const { post } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const { postId } = useParams();

  useEffect(() => {
    dispatch(getPostById(postId));
  }, []);

  return <div>{post.title}</div>;
};

export default PostDetails;
