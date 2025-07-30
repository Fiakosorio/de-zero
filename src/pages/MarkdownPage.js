// src/pages/MarkdownPage.js
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useParams } from "react-router-dom";

const MarkdownPage = () => {
  const { file } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../content/${file}.md`)
      .then((res) => fetch(res.default))
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => setContent("No se pudo cargar el artículo."));
  }, [file]);

  return (
    <div className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="prose dark:prose-invert max-w-4xl mx-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPage;
