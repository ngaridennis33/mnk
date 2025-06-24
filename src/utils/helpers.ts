/**
 * Truncates a string to a specified number of words and adds an ellipsis if the string exceeds that limit.
 *
 * @param text - The input string to be truncated.
 * @param maxWords - The maximum number of words to retain in the truncated string.
 * @returns The truncated string with an ellipsis if the word count exceeds the specified limit; otherwise, returns the original string.
 */


export const truncateText = (text: string, maxWords: number): string => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
};

type Heading = {
  level: number;
  text: string;
  id: string;
};

export const extractHeadings = (markdown: string): Heading[] => {
  // Updated regex to match headings at the start of lines
  const headingRegex = /^(#{1,6})\s+(.*)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length; // The number of `#` characters determines the heading level
    const text = match[2].trim();   // The heading text
    const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''); // Generate a slug/id

    headings.push({ level, text, id });
  }

  return headings;
};
