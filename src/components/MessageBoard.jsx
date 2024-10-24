import { useState } from "react";

function MessageBoard() {
  //state
  const [inputMsg, setInputMsg] = useState("");
  const [messageAdd, setMessageAdd] = useState([
    "Hello all ! This is first message.",
  ]);

  //handling event
  const handlingInputMsg = (event) => {
    setInputMsg(event.target.value);
  };

  const handlingMessageAdd = () => {
    const newMessage = [...messageAdd, inputMsg];
    setMessageAdd(newMessage);
    setInputMsg("");
    console.log(messageAdd);
  };

  const handlingMessageDel = (index) => {
    const newMessage = [...messageAdd].filter(
      (filtervalue, filterindex) => index !== filterindex
    );
    setMessageAdd(newMessage);
    console.log(messageAdd);
  };

 

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board {inputMsg}</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMsg}
            onChange={handlingInputMsg}
          />
        </label>
        <button className="submit-message-button" onClick={handlingMessageAdd}>
          Submit
        </button>
      </div>
      <div class="board">
        {messageAdd.map((key, index) => {
          return (
            <div className="message" key={index}>
              <h1 key={index}>{key}</h1>
              <button
                className="delete-button"
                key={index}
                onClick={() => {
                  handlingMessageDel(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
          