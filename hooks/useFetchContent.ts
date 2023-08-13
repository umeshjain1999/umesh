import { useState, useEffect } from "react";
import showdown from "showdown";

export const useFetchContent = (fileName:string) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchContent = async (fileName:string) => {
      try {
        const response = await fetch(`/content/${fileName}.md`);
        if (response.ok) {
          const markdown = await response.text();
          const converter = new showdown.Converter({ metadata: true });
          const html = converter.makeHtml(markdown);
          setContent(html);
        } else {
          console.error("Error fetching the file:", response.status);
          setContent("");
        }
      } catch (error) {
        console.error("Error fetching the file:", error);
        setContent("");
      }
    };

    fetchContent(fileName);
  }, [fileName]);

  return content;
};
