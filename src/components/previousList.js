import React from "react";

function PreviousList({previous}) {
    const formattedJson = previous.map(tree => {
        const parsedJson = JSON.parse(tree.treeJson);
        const prettyJson = JSON.stringify(parsedJson, null, 2); 
        return { ...tree, treeJson: prettyJson };
      });
    
    return (
        <div>
      <h1>Previous Trees:</h1>
      {formattedJson.map((item) => (
        <div key={item.id}>
          <h3>Tree JSON for ID: {item.id}</h3>
          <pre>{item.treeJson}</pre>
        </div>
      ))}
    </div>
  );
};

export default PreviousList;