import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😲": "Astonished",
  "😞": "Sad",
  "💕": "Hearts",
  "😉": "Winking"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [inputText, setInputText] = useState("");
  function onChangeHandler(event) {
    var userInput = emojiDictionary[event.target.value];
    if (userInput === undefined) {
      userInput = "emoji is not in the database";
    }
    setInputText(userInput);
  }

  function emojiClickHandler(emoji) {
    var userInput = emojiDictionary[emoji];
    setInputText(userInput);
  }

  return (
    <div className="App">
      <h1>paste an emoji to find out its meaning</h1>
      <input onChange={onChangeHandler}></input>
      <h2>Meaning: {inputText}</h2>
      <h3>List of all the emojis:</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            key={emoji}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

// VISER -- View -> Interact -> State in Event Handler -> Render
