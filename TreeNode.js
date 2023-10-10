import React, { useState } from 'react';

const TreeNode = ({ data, addChild }) => {
  const [childText, setChildText] = useState('');

  const handleAddChild = () => {
    if (childText.trim() !== '') {
      addChild(childText);
      setChildText('');
    }
  };

  return (
    <div className="tree-node">
      <span>{data}</span>
      <button onClick={handleAddChild}>Add Child</button>
      <input
        type="text"
        value={childText}
        onChange={(e) => setChildText(e.target.value)}
      />
    </div>
  );
};

export default TreeNode;
