// Structure for Category Navigation Links
export interface CategoryTreeNode {
    label: string;
    link: string;
    description: string;
    seoDescription: string;
    categoryImage: string;
    baseColor: string;
    seoTitle: string;
    hasBranch: boolean;
    branches?: CategoryTreeNode[] | [] ;
};

// Structure for Category Data
export interface Category {
    id: string;
    title: string;
    slug: string;
    categoryImage: string;
    baseColor: string;
    parentId: string | null;
    description: string;
    seoTitle: string;
    seoDescription: string;
    createdAt: string;
    updatedAt: string;
}