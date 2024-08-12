import React, { useState } from 'react';

const treeData = [
  {
    id: 1,
    name: 'Root Node',
    children: [
      {
        id: 2,
        name: 'Child Node 1',
        children: [
          { id: 5, name: 'Grandchild Node 1' },
          { id: 6, name: 'Grandchild Node 2' }
        ]
      },
      {
        id: 3,
        name: 'Child Node 2'
      },
      {
        id: 4,
        name: 'Child Node 3'
      }
    ]
  }
];

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="ml-4">
      <div
        className="cursor-pointer py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        {node.children && (
          <span className="mr-2 text-gray-500">
            {expanded ? '[-]' : '[+]'}
          </span>
        )}
        <span className="text-gray-900 dark:text-gray-100">{node.name}</span>
      </div>
      {expanded && node.children && (
        <div className="ml-4">
          {node.children.map(childNode => (
            <TreeNode key={childNode.id} node={childNode} />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView = () => (
  <div className="h-screen w-screen p-4 bg-gray-50 dark:bg-gray-900 overflow-auto">
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Tree View Menu</h1>
      {treeData.map(node => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  </div>
);

export default TreeView;
