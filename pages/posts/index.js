import AllPosts from "@/Components/posts/all-posts";

const DUMMAY_DATA = [
  {
    slug: "ReactJs-is-a-framework-of-javascript",
    title: "ReactJs is a framework of javascript",
    image: "getting-started-nextjs.png",
    excerpt: "ReactJs is easy to learn & World most populer lenguage.",
    date: "10-09-2023",
  },
  {
    slug: "Getting-Started-with-NextJS",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NeatJS is a the React framework for production-it makes building fullstack React apps and sites a breaze and ships with bullt-in SSR.",
    date: "11-18-2023",
  },
  {
    slug: "Getting-Started-with-NextJS2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NeatJS is a the React framework for production-it makes building fullstack React apps and sites a breaze and ships with bullt-in SSR.",
    date: "11-18-2023",
  },
  {
    slug: "Getting-Started-with-NextJS3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NeatJS is a the React framework for production-it makes building fullstack React apps and sites a breaze and ships with bullt-in SSR.",
    date: "11-18-2023",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMAY_DATA} />;
}

export default AllPostsPage;
