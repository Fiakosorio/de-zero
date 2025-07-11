import React from 'react';

const BlogPost = ({ title, summary }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow p-4 rounded mb-4">
      <h4 className="text-xl font-bold text-cyan-500 mb-2">{title}</h4>
      <p>{summary}</p>
    </div>
  );
};

export default BlogPost;
