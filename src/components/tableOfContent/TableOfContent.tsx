
import { PostHeading } from '@/types/Article';
import React from 'react'


const TableOfContent: React.FC<{ headings: PostHeading[] }> = ({ headings }) => {
  const getMarginLeft = (level: number) => {
    switch (level) {
      case 1:
        return 'ml-0';
      case 2:
        return 'ml-1';
      case 3:
        return 'ml-2';
      case 4:
        return 'ml-3';
      case 5:
        return 'ml-4';
      case 6:
        return 'ml-5';
      default:
        return 'ml-6';
    }
  };

  return (
    <div className="w-fit border rounded-lg h-fit bg-gray-50 p-2 text-gray-800 break-words max-w-md">
      <span className="mx-auto text-sm md:text-base font-semibold text-dark-300">
        <strong>Table of Contents</strong>
      </span>

      <ul className="mt-2 list-disc text-gray-700 text-sm font-semibold">
        {headings.map((heading, index) => (
          <li key={index} className={`list-none ${getMarginLeft(heading.level)}`}>
            <a
               className='flex hover:bg-gray-200 text-gray-600 px-2 hover:text-highlight-200 py-1 rounded'
              href={`#${heading.id}`}
            >
               {(heading.level > 2) && <svg width="3" height="24" viewBox="0 -9 3 24"
                    className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    </path>
                </svg>}
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContent