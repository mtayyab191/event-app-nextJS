import classes from "./all-posts.module.css";
import PostsGrid from "./post-grid";

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>ALL Post</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
