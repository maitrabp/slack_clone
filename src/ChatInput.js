import React, {useState} from 'react'
import "./ChatInput.css"
import db from './firebase';
import firebase from "firebase"

import { useStateValue } from './Stateprovider'

function ChatInput({channelName, channelId}) {

    const [{user}] = useStateValue();
    const [input, setInput] = useState('');
    
    const sendMessage = (e) => {
        e.preventDefault();
        if (channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                username: user.displayName,
                userImage: user.photoURL,
            })
        }
        setInput("")
    };

    return (
        <div className = "chatInput">
            <form>
                <input 
                value = {input}
                onChange = {(e)=> setInput(e.target.value)}
                placeholder = {`Message in #${channelName?.toLowerCase()}`}/>
                <button type="submit" onClick={sendMessage}>SEND</button>
            </form>
        </div>
    )
}

export default ChatInput
