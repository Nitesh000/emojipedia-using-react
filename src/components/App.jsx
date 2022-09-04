import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

console.log(emojipedia);

function App() {
  return <div>
    <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map((item) => {
    <Entry 
    key={item.id}
    emoji = {item.emoji}
    name = {item.name}
    description = {item.meaning}
  />
}
)}
      </dl>
  </div>
}

export default App;
