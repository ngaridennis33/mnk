// Article Component

import Image from "next/image";
import { extractHeadings } from "@/utils/helpers";
import Link from "next/link";
import { DateIcon } from "../icons/Icons";
import Markdown from "../markdown/Markdown";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, WhatsappIcon, YoutubeIcon } from "../icons/SocialIcons";
import TableOfContent from "../tableOfContent/TableOfContent";
import ListPost from "../listPost/ListPost";
import { Post } from "@/types/post";

type ArticleProps = {
  article: Post;
}

const Article = ({article}:ArticleProps) => {
  const CleanedMarkdown = article.description .replace(/'\s*\+\s*'/g, '')  // Remove '+ '
  .replace(/\\n/g, '\n')  
  .replace(/^>\s+/gm, '>');


  const headings = extractHeadings(CleanedMarkdown);
  return(
     <main>
       <div className="flex mx-auto gap-6 flex-col md:flex-row-reverse">
        <div className="lg:block hidden flex-[20%]">
        <TableOfContent headings={headings} />
        </div>
        <article className="flex-[80%] mx-auto w-full rounded-lg border border-gray-300 px-4 bg-white">
        <div className="w-full py-3 mb-3">
             <h2 className="text-gray-800 text-3xl font-bold">
               <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>{" "}
               {article.title}
             </h2>
           </div>
           {/*  Top */}
           <div className="mb-4 lg:mb-6 md:flex justify-between items-center">
             <div className="flex items-center mb-6 not-italic">
               <div className="inline-flex gap-2 items-center mr-3 text-sm text-gray-900">
                 <Link href="/user" className="w-16 border-4 border-stroke h-16 drop-shadow-2 rounded-full relative">
                   <Image
                     alt=""
                     className="rounded-full object-cover"
                     fill
                     src={article.author.avatar}
                     sizes="50px"
                   />
                 </Link>
                 <div>
                   <Link
                     href="/user"
                     rel="author"
                     className="text-xl font-bold text-gray-900"
                   >
                     {article.author.firstName} {article.author.lastName}
                   </Link>
                   <p className="text-base text-gray-500 dark:text-gray-400">
                     {article.author.role}
                   </p>
                   <p className="text-base inline-flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
                    <DateIcon/>
                     <time dateTime="2022-02-08" title="February 8th, 2022">
                       {article.createdAt}
                     </time>
                   </p>
                 </div>
               </div>
             </div>

             {/* Share */}
             <div className=" items-center">
              <div className="inline-flex gap-1">
                <a className="text-white cursor-pointer bg-black hover:bg-gray-800 p-2 rounded-full inline-flex items-center justify-center"> <TwitterIcon/> </a>
                <a className="text-white cursor-pointer bg-[#1877F2] hover:bg-[#145db7] p-2 rounded-full inline-flex items-center justify-center"> <FacebookIcon/> </a>
                <a className="text-white cursor-pointer bg-[#0077B5] hover:bg-[#005582] p-2 rounded-full inline-flex items-center justify-center"> <LinkedInIcon/> </a>
                <a className="text-white cursor-pointer bg-[#FF0000] hover:bg-[#cc0000] p-2 rounded-full inline-flex items-center justify-center"> <YoutubeIcon/> </a>
                <a className="text-white cursor-pointer bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] p-2 rounded-full inline-flex items-center justify-center"> <InstagramIcon/> </a>
                <a className="text-white cursor-pointer bg-[#35af43] hover:bg-[#2dc73f] p-2 rounded-full inline-flex items-center justify-center"> <WhatsappIcon/> </a>
              </div>
             </div>
           </div>
           <div className="mb-1 w-full h-[300px] relative">
             <Image
               alt=""
               className="rounded-2xl object-cover"
               fill
               src={article.postImage}
               sizes="(max-width: 768px) 100vw, 300px"
             />
           </div>

          <div className="leading-relaxed pb-4">
          <div className=" mt-2 lg:hidden">
          <TableOfContent headings={headings} />
          </div>
          <Markdown content={CleanedMarkdown} headings={headings}/>

          </div>
        </article>
    </div>
          <ListPost/>
    </main>
  )
}

export default Article;