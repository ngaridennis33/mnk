/* eslint-disable @typescript-eslint/no-explicit-any */
// Props for rendering code blocks in Markdown content
export interface CodeProps {
    node?: any,
    inline?: boolean,
    className?: string,
    children?: string | React.ReactNode,
    style?: any,
}


// Data structure representing headings within an article's content
export type PostHeading = {
    level: number;
    text: string;
    id: string;
};