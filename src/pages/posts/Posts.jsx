import { useEffect } from "react";
import "./Posts.css";
import PostsItem from "./PostsItem";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../app/store/slices/posts-slice/post-slice";
import { Link } from "react-router-dom";

const Posts = () => {
  const { data } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="box">
      <Link to="/">Go home</Link>

      <h1>Posts</h1>

      <div className="posts">
        {data?.map((post) => (
          <PostsItem key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
