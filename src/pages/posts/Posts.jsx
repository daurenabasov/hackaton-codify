import { Suspense, useEffect } from "react";
import "./Posts.css";
import PostsItem from "./PostsItem";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../app/store/slices/posts-slice/post-slice";
import Loading from "../../components/Loader";

const Posts = () => {
  const { data } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className="box">
        <h1>Posts</h1>

        <div className="posts">
          {data?.map((post) => (
            <PostsItem key={post.id} {...post} />
          ))}
        </div>
      </div>
    </Suspense>

  );
};

export default Posts;
