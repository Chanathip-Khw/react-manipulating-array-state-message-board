import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const addMessage = () => {
    const newMessage = [...message, inputMessage];
    setMessage(newMessage);
    setInputMessage("");
  };

  const deleteMessage = (index) => {
    const newMessage = [...message].filter((item,i) => 
      i !== index)
    setMessage(newMessage)
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div class="board">
        {message.map((item, index) => {
          return (
            <div className="message">
              <h1>{item}</h1>
              <button className="delete-button" onClick={() => deleteMessage(index)} >x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
