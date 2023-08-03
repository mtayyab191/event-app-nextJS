import ReactMarkdown from "react-markdown";

import PostsHeader from "./post-header";

import classes from "./post-contact.module.css";

function PostsContact(props) {
  const { post } = props;

  // const imagePath = `./images/posts/${post.slug}/${post.image}`;
  const imagePath = `/images/posts/${post.image}`;

  return (
    <article className={classes.content}>
      <PostsHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.contact}</ReactMarkdown>
    </article>
  );
}

export default PostsContact;
