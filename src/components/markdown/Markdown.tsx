"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { CodeProps, PostHeading } from "@/types/Article";

type MarkdownProps = {
    content:string;
    headings:PostHeading[];
}
const Markdown = ({content, headings}: MarkdownProps) => {
    const [copyStatus, setCopyStatus] = useState<string | null>(null);


  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopyStatus('Copied');
        setTimeout(() => setCopyStatus(null), 2000); // Reset after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <ReactMarkdown 
    remarkPlugins={[remarkGfm]}
          components={{
            //  <!-- Paragraph --> 
            p:({children})=>   <p className="block font-pregular text-xl font-normal leading-relaxed  antialiased text-gray-700">{children}</p>,
            
            //  <!-- Pre for the code --> 
            code({ className, children, ...props }: CodeProps) {
              const match = /language-(\w+)/.exec(className || '');
              const codeString = String(children).replace(/\n$/, '');
    
              return match ? (
                <span className="relative">
                
                <button onClick={() => handleCopy(codeString)} className="absolute top-2 right-2 bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700">
                {copyStatus || 'Copy'}
                  </button>
                  </span>
              ) : (
                <code className={className ? className : 'bg-dark-200 text-main p-0.5'} {...props}>
                  {children}
                </code>
              );
            },

            //  <!-- Table --> 
            table: ({ children }) => (
              <table className="min-w-full bg-white border border-gray-200">
                {children}
              </table>
            ),
            thead: ({ children }) => (
              <thead className="bg-gray-200">
                {children}
              </thead>
            ),
            tr: ({ children }) => (
              <tr className="border-b">{children}</tr>
            ),
            th: ({ children }) => (
              <th className="border-r border-gray-300 px-4 py-2 text-left text-gray-600 font-semibold last:border-0">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="border-r border-gray-300 px-4 py-2 text-gray-800 last:border-0">
                {children}
              </td>
            ),
            //  <!-- Br --> 
            br: ({ children }) => (
              <br className="custom-line-break">{children}</br>
            ),
            //  <!-- Bold Elements --> 
            strong: ({ children }) => (
              <strong className="font-bold">{children}</strong>
            ),

            //  <!-- Ordered list --> 
            ol: ({ children }) => (
              <ol className="font-pregular  text-lg font-bold leading-relaxed pl-6 py-2 list-decimal space-y-2 text-gray-700">{children}</ol>
            ),

            ul: ({ children }) => (
              <ul className="font-pregular text-lg font-normal leading-relaxed pl-6 py-2 list-disc space-y-2 text-gray-800">{children}</ul>
            ),

            //  <!-- Links --> 
            a: ({ href, children }) => {
              if (!href) {
                return <span>{children}</span>;
              }
            
              return (
                <Link href={href} className="text-blue-600 hover:underline">
                  {children}
                </Link>
              );
            },

            //  <!-- Image component --> 
            img: ({ src, alt }) => {
                if (typeof src !== 'string') {
                  return null; // or fallback to a standard <img> if needed
                }
              
                return (
                  <>
                    <span className="relative mb-2 block w-full md:w-4/5 lg:w-2/3 h-[250px] md:h-[400px] lg:h-[500px] mx-auto">
                      <Image
                        src={src}
                        alt={alt || 'Image'}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                        className="rounded-lg object-cover shadow-md"
                        style={{ maxHeight: '500px', width: '100%' }}
                      />
                    </span>
                    {alt && (
                      <span className="italic text-center mb-2 text-base text-highlight-200 block">
                        {alt}
                      </span>
                    )}
                  </>
                );
              },
            //  <!-- Quotes --> 
      blockquote:({children})=> <blockquote className="relative p-4 border-l-4 border-highlight-300 bg-gray-100 mb-4 text-xl">
        <span className="absolute opacity-80 w-8 h-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-red-600"
            viewBox="0 0 270.000000 270.000000"
          >
            <g
              transform="translate(0.000000,270.000000) scale(0.100000,-0.100000)"
              fill="currentColor"
              stroke="none"
            >
              <path d="M920 2182 c-290 -124 -482 -341 -540 -610 -30 -140 -40 -296 -40 -644 l0 -328 370 0 370 0 0 370 0 370 -181 0 -181 0 7 63 c26 243 129 387 342 477 35 15 66 29 69 32 7 7 -132 298 -143 298 -4 0 -37 -13 -73 -28z"></path>
              <path d="M2179 2186 c-249 -103 -442 -295 -520 -516 -50 -142 -61 -247 -66 -677 l-5 -393 371 0 371 0 0 370 0 370 -181 0 -181 0 7 53 c21 170 67 281 150 363 51 49 143 107 215 134 19 7 39 17 44 21 10 9 -124 298 -139 298 -5 0 -35 -10 -66 -23z"></path>
            </g>
          </svg>
        </span>
        <span className="ml-16 block leading-8 text-xl italic font-semibold text-indigo-600">
          {children}
        </span>
        <footer className="flex  justify-end w-full font-bold text-base text-red-500">
        — {" "}<cite title="Source Title text-gray-900">Quote Author</cite>
        </footer>
      </blockquote>,

      //  <!-- Headings --> 
            h1: ({ children }) => {
              const text = Array.isArray(children) ? children[0] : children;
              const id = headings.find(heading => heading.text === text)?.id;
              return <h1 className="text-gray-800 py-4 text-3xl font-bold scroll-mt-24 lg:scroll-mt-28" id={id}>{children}</h1>;
            },
            h2: ({ children }) => {
              const text = Array.isArray(children) ? children[0] : children;
              const id = headings.find(heading => heading.text === text)?.id;
              return <h2 className="text-gray-800 py-4 text-2xl font-bold scroll-mt-24 lg:scroll-mt-28" id={id}>{children}</h2>;
            },
            h3: ({ children }) => {
              const text = Array.isArray(children) ? children[0] : children;
              const id = headings.find(heading => heading.text === text)?.id;
              return <h3 className="text-gray-800 py-4 text-xl font-bold scroll-mt-24 lg:scroll-mt-28" id={id}>{children}</h3>;
            },
            h4: ({ children }) => {
              const text = Array.isArray(children) ? children[0] : children;
              const id = headings.find(heading => heading.text === text)?.id;
              return <h4 className="text-gray-800 py-4 text-lg font-bold scroll-mt-24 lg:scroll-mt-28" id={id}>{children}</h4>;
            },
            h5: ({ children }) => {
              const text = Array.isArray(children) ? children[0] : children;
              const id = headings.find(heading => heading.text === text)?.id;
              return <h4 className="text-gray-800 py-4 text-md font-bold scroll-mt-24 lg:scroll-mt-28" id={id}>{children}</h4>;
            },
            h6: ({ children }) => {
              const text = Array.isArray(children) ? children[0] : children;
              const id = headings.find(heading => heading.text === text)?.id;
              return <h4 className="text-gray-800 py-4 text-mds font-bold scroll-mt-24 lg:scroll-mt-28" id={id}>{children}</h4>;
            },
          }}
        >
        {content}
      </ReactMarkdown>
  )
}

export default Markdown