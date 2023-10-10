import React, { useState } from 'react';
import TreeNode from './treenode';

const TreeView = () => {
  const [rootNode, setRootNode] = useState(null);

  const addChild = (parent, childText) => {
    const newNode = { data: childText, children: [] };
    parent.children.push(newNode);
    setRootNode({ ...rootNode }); 
  };

  const renderTree = (node) => (
    <TreeNode key={node.data} data={node.data} addChild={(childText) => addChild(node, childText)}>
      {node.children.map(renderTree)}
    </TreeNode>
  );

  const handleAddRoot = () => {
    const text = prompt('Enter root node text:');
    if (text) {
      setRootNode({ data: text, children: [] });
    }
  };

  return (
    <div>
      <button onClick={handleAddRoot}>Add Root Node</button>
      {rootNode && <div className="tree">{renderTree(rootNode)}</div>}
    </div>
  );
};

export default TreeView;
