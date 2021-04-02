import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Post from "./Post";

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.fetchedPosts);
  const loading = useSelector((state) => state.appReducer.loading);

  if (loading) {
    return (
      <div className="spinner-border text-primary" role="status">
      </div>
    );
  }

  if (!posts.length) {
    return (
      <button className="btn btn-primary" onClick={() => dispatch(fetchPosts())}>
        Загрузить
      </button>
    );
  }
  return posts.map((post, idx) => <Post post={post} key={idx} />);
};
