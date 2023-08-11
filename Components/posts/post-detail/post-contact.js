import ReactMarkdown from "react-markdown";

import PostsHeader from "./post-header";
import Image from "next/image";

import classes from "./post-contact.module.css";

function PostsContact(props) {
  const { post } = props;

  // const imagePath = `./images/posts/${post.slug}/${post.image}`;
  const imagePath = `/images/posts/${post.image}`;

  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === "image") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={classes.content}>
      <PostsHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>{post.contact}</ReactMarkdown>
    </article>
  );
}

export default PostsContact;
