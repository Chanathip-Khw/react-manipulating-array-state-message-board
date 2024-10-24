import { useState } from "react";
function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = {
      id: message.length + 1,
      message: inputMessage,
    };
    setMessage([...message, newMessage]);
    setInputMessage("");
  };

  const deleteMessage = (ID) => {
    const updateMessage = message.filter((message) => message.id !== ID);
    setMessage(updateMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form onSubmit={addMessage}  class="message-input-container">
        {/* Enter message here */}
        <input
          id="message-text"
          name="message-text"
          type="text"
          placeholder="Enter message here"
          value={inputMessage}
          onChange={(event) => setInputMessage(event.target.value)}
        />
        <button type="submit" className="submit-message-button">
          Submit
        </button>
      </form>
      {/* display Message */}
      <div class="board">
        <div className="message">
          {message.map((message) => (
            <div key={message.id} className="message">
              <div>{message.message}</div>
              <button
                onClick={() => deleteMessage(message.id)}
                className="delete-button"
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MessageBoard;
