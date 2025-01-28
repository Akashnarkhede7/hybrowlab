import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const countCharacters = (str) => {
    const charCount = {};
    const result = [];
    const cleanStr = str.replace(/\s+/g, "").toUpperCase(); // Remove spaces and convert to uppercase

    for (let char of cleanStr) {
      if (charCount[char] === undefined) {
        charCount[char] = 0;
      }
      charCount[char]++;
    }

    // Build the result array while maintaining the order of first appearance
    for (let char of cleanStr) {
      if (!result.some((item) => item.char === char)) {
        result.push({ char, count: charCount[char] });
      }
    }

    return result.map((item) => `${item.char}-${item.count}`).join("\n");
  };

  const handleCountClick = () => {
    const result = countCharacters(inputText);
    setOutput(result);
  };

  return (
    <div className="App">
      <h1>Character Count</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        rows="4"
        cols="50"
        placeholder="Enter text here"
      />
      <button onClick={handleCountClick}>Count Characters</button>
      <pre>{output}</pre>
    </div>
  );
}
