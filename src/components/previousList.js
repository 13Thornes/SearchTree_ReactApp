import React from "react";

function PreviousList({previous}) {
    const formattedJson = previous.map(tree => {
        const parsedJson = JSON.parse(tree.treeJson);
        const prettyJson = JSON.stringify(parsedJson, null, 2); 
        console.log(tree);
        return { ...tree, treeJson: prettyJson};
      });

      
    
    return (
        <div>
      <h1>Previous Trees:</h1>
      {formattedJson.map((item) => (
        <div key={item.id}>
          <h3>Tree for for ID: {item.id}</h3>
          <h4> Inputs: </h4>
          <pre>{item.userInputs}</pre>
          <h4> Tree: </h4>
          <pre>{item.treeJson}</pre>
        </div>
      ))}
    </div>
  );
};

export default PreviousList;