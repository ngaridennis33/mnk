import { Author } from "./Author";
import { Category } from "./category";

// Structure for blog post data
export interface Post {
    id: string;
    title: string;
    slug: string;
    postImage: string;
    summary: string;
    description: string;
    content: string;
    viewCount: number;
    isFeatured: boolean;
    tags: string[];
    seoTitle: string;
    seoDescription: string;
    isSponsored: boolean;
    isEditorsPick: boolean;
    isTrending: boolean;
    status: string;
    authorId: string;
    categoryId: string;
    createdAt: string;
    updatedAt: string;
    author: Author;
    category: Category;
}

// Homepage Props
export interface HomePageProps {
    topPosts: Post[]; 
}