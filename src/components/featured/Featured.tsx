import React from "react";
import Link from "next/link";
import Image from "next/image";
import { truncateText } from "@/utils/helpers";

const Featured = () => {
  const editorsPick = [
    {
      id: 1,
      title: "Why the world would end without political polls",
      href: "blog/cat",
      postImageUrl: "/dummy/img2.jpg",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 10,
      title: "2020 Audi R8 Spyder spy shots release",
      href: "blog/cat",
      postImageUrl: "/dummy/img3.jpg",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 3,
      title: "Lamborghini makes Huracán GT3 racer faster for 2019",
      href: "blog/cat",
      postImageUrl: "/dummy/img4.jpg",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 2,
      title: "ZF plans $14 billion autonomous vehicle push, concept van",
      href: "blog/cat",
      postImageUrl: "/dummy/img5.jpg",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 6,
      title: "Boost your conversion rate hssgy susuh suhyuhs whuhusw ihwihis ihihiw ihih  ihihw ihihw ihihwi ihii hw",
      href: "blog/cat",
      postImageUrl: "/dummy/img6.jpg",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];
  return (
    <div className="relative bg-main border border-gray-300 rounded-2xl p-4">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
        <div className="sm:col-span-6 lg:col-span-5">
          <div className="relative w-full h-96">
            <div className="relative w-full h-full">
              <Image
                className="object-cover rounded-lg"
                src="/dummy/img14.jpg"
                alt="Image description"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-to-t from-black">
              <Link href="#">
                <h2 className="text-3xl font-bold capitalize text-white mb-3">
                  Amazon Shoppers Are Ditching Designer Belts for This
                  Best-Selling
                </h2>
              </Link>
              <p className="text-gray-100 hidden sm:inline-block">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This is very helpful for
                generating default content.
              </p>
              <div className="pt-2">
                <div className="text-gray-100">
                  <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                  Europe
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div>
              <Link
                href="#"
                className="text-s tracking-widest w-fit rounded-full px-2 bg-highlight-200 text-main uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Fashion
              </Link>
              <Link
                href="#"
                className="block py-4 border-t mt-4 border-b border-gray-300 text-gray-900 font-bold text-2xl mb-1 hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                The perfect summer sweater that you can wear!
              </Link>
              <hr className="h-1 bg-gray-500 border-none mb-2" />
              <span className="block mt-2 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                March 21, 2020
              </span>
              <p className="mt-2 line-clamp-3 text-base leading-6 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>

        {/* Editors Pick */}
        <div className="sm:col-span-6 lg:col-span-4 md:px-8 md:border rounded-xl border-gray-300 py-2">
          <h2 className=" text-2xl font-bold">
            Editor&apos;s Pick
          </h2>
          <hr className="h-1 bg-gray-500 border-none mb-1" />
          {editorsPick.slice(0, 4).map((post) => (
            <div
              className="flex items-start pt-2 mb-2  border-t border-gray-400"
              key={post.id}
            >
              <Link href={post.href} className=" mr-3">
                <div
                  className="w-28 h-32 rounded-l bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.postImageUrl})` }}
                ></div>
              </Link>
              <div>
              <p className="text-gray-600">{post.date}</p>
                <Link href={post.href}>
                  <h3 className="mt-2 text-lg hover:underline hover:text-highlight-200 font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  {truncateText(post.title, 8)}
                  </h3>
                </Link>
                <p className="text-highlight-300">{post.category.title}</p>
                    <Link
                      href={post.author.href}
                      className="text-gray-600 italic text-[12px] mb-1 hover:text-highlight-200 hover:underline"
                    >
                      By: {post.author.name}
                    </Link>

              </div>
            </div>
          ))}
        </div>

        {/* Sidebar - Trending Topics */}
        <div className="sm:col-span-12 lg:col-span-3 w-full">
          <div className="w-full bg-white">
            <div>
              <div className="p-4 bg-dark-100 text-main">
                <h2 className="text-lg font-bold">Trending Topics</h2>
              </div>
              <ul className="post-number">
                {editorsPick.map((post,index) => (
                  <li
                    className="border-b border-gray-300 hover:bg-gray-50"
                    key={post.id}
                  >
                    <Link
                      className="text-lg font-bold py-3 flex flex-row items-center"
                      href={post.href}
                    >
                      <span className="mr-2 text-gray-500 text-3xl">
                        {index + 1 }{"."}
                      </span>
                      {truncateText(post.title, 8)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Featured;