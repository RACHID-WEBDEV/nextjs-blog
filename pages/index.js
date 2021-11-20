import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";

import { getPosts } from "../services";
import { FeaturedPosts } from "../sections";
// const posts = [
//      { title: "React Testing", excerpt: "Learn React Tesing" },
//      {
//           title: "React With Tailwind Css",
//           excerpt: "Learn React js With Tailwind Css",
//      },
// ];

export default function Home({ posts }) {
     return (
          <div className="container mx-auto px-2 mb-8 ">
               <Head>
                    <title>Next Js CMS Blog</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <FeaturedPosts />
               <div className=" grid grid-cols-1 lg:grid-cols-12 gap-6 ">
                    <div className="  lg:col-span-8 col-span-1 sm:col-span-2 ">
                         {posts.map((post) => (
                              <PostCard post={post.node} key={post.title} />
                         ))}
                    </div>

                    <div className="lg:col-span-4 col-span-1">
                         <div className="lg:sticky relative top-8">
                              <PostWidget />
                              <Categories />
                         </div>
                    </div>
               </div>
          </div>
     );
}
// Fetch data at build time
export async function getStaticProps() {
     const posts = (await getPosts()) || [];

     return {
          props: { posts },
     };
}
