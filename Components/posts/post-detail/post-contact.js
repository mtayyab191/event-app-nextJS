import ReactMarkdown from 'react-markdown'

import PostsHeader from "./post-header";

import classes from "./post-contact.module.css";

const DUMMAY_POST = {
  slug: "Getting-Started-with-NextJS",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  date: "11-18-2023",
  contact:"# NeatJS is a the React framework for production-it makes building fullstack React apps and sites a breaze and ships with bullt-in SSR.",
};

function PostsContact() {
  // const imagePath = `./images/posts/${DUMMAY_POST.slug}/${DUMMAY_POST.image}`;
  const imagePath = `/images/posts/${DUMMAY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostsHeader title={DUMMAY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMAY_POST.contact}</ReactMarkdown>
    </article>
  );
}


// export function getStaticProps() {
//   const featuredPosts = getFeaturedPosts();

//   return {
//     props: {
//       posts: featuredPosts,
//     },
//     revalidate: 60,
//   };
// }


export default PostsContact;
