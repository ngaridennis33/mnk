import Article from '@/components/article/Article'
import { Metadata } from 'next';
import React from 'react'
import { article } from '@/components/data/data'; 
import DefaultLayout from '@/components/layout/DefaultLayout';


export const metadata: Metadata = {
  title: article.title,
  description: article.seoDescription,
  openGraph: {
    title: article.title, 
    description: article.seoDescription,
    url: `https://ziditrends.vercel.app/articles/cat/${article.slug}`,
    images: [
      {
        url: article.postImage,
        width: 800,
        height: 600,
        alt: article.title,
      },
    ],
    siteName: "zidiTrends.com",
  },
  twitter: {
    card: "summary_large_image",
    title: article.title,
    description:article.description,
    images:[article.postImage]
  }
};

const page = () => {
  return (
    <DefaultLayout>
        <Article article = {article}/>
    </DefaultLayout>
  )
}

export default page