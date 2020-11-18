import React, { useState } from 'react'
import './Chat.css'

function Chat() {

    const [input, setInput]=useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        setInput("");
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <h4>To : <span className="chat__name">Channel Name</span></h4>
                <strong>Details</strong>
            </div>
            <div className="chat__messages">

            </div>
            <div className="chat__input">
                <form>
                    <input value={input} onChange = {(e) => setInput(e.target.value)} placeholder="iMessage" type="text"/>
                    <button onClick={sendMessage}>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Chat
