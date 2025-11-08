import React from "react";

export const webDevelopmentContent: Record<string, React.ReactNode> = {
  "html-basics": (
    <div className="prose prose-lg max-w-none">
      <h2>HTML Basics & Structure</h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Learning Objectives</h3>
        <ul className="text-blue-700 space-y-1">
          <li>Understand HTML document structure</li>
          <li>Learn about HTML tags and elements</li>
          <li>Create your first HTML page</li>
          <li>Understand DOCTYPE and meta tags</li>
        </ul>
      </div>

      <h3>What is HTML?</h3>
      <p>
        HTML (HyperText Markup Language) is the standard markup language for creating web pages. 
        It describes the structure of a web page using elements and tags.
      </p>

      <h3>Basic HTML Structure</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>`}</code>
      </pre>

      <h3>Exercise: Create Your First HTML Page</h3>
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">Practice Task</h4>
        <p className="text-yellow-700">
          Create an HTML file with the basic structure above. Add your name in the title tag and 
          write a paragraph about yourself in the body.
        </p>
      </div>

      <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="text-green-800 font-semibold mb-2">✓ Topic Summary</h3>
        <p className="text-green-700">
          You&apos;ve learned the basic structure of HTML documents. You&apos;re now ready to move on to learning about specific HTML elements and tags.
        </p>
      </div>
    </div>
  ),
  
  "html-elements": (
    <div className="prose prose-lg max-w-none">
      <h2>HTML Elements & Tags</h2>
      <p>Learn about the most commonly used HTML elements and how to structure content effectively.</p>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Common HTML Elements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-3 rounded">
            <code>&lt;h1&gt; - &lt;h6&gt;</code>
            <p className="text-sm text-gray-600 mt-1">Heading elements</p>
          </div>
          <div className="bg-white p-3 rounded">
            <code>&lt;p&gt;</code>
            <p className="text-sm text-gray-600 mt-1">Paragraph element</p>
          </div>
          <div className="bg-white p-3 rounded">
            <code>&lt;a&gt;</code>
            <p className="text-sm text-gray-600 mt-1">Anchor/link element</p>
          </div>
          <div className="bg-white p-3 rounded">
            <code>&lt;img&gt;</code>
            <p className="text-sm text-gray-600 mt-1">Image element</p>
          </div>
        </div>
      </div>
    </div>
  ),

  "css-basics": (
    <div className="prose prose-lg max-w-none">
      <h2>CSS Basics & Selectors</h2>
      <p>Introduction to Cascading Style Sheets and how to style HTML elements.</p>
      
      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
        <h3 className="text-lg font-semibold text-indigo-800 mb-2">CSS Fundamentals</h3>
        <p className="text-indigo-700">CSS allows you to control the appearance of HTML elements.</p>
      </div>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`/* CSS Syntax */
selector {
    property: value;
}

/* Example */
h1 {
    color: blue;
    font-size: 24px;
}`}</code>
      </pre>
    </div>
  )
};