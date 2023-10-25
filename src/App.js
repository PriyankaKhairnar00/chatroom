import "./App.css";
import { useEffect, useState } from "react";
import { getDatabase,push,ref,set,onChildAdded } from "firebase/database";

function App() {
  const [name, setName] = useState('');
  const [chats, setChats] = useState([]);
    // {name:'user1',messege:'messege1'},
    // {name:'PIU',messege:'messege2'},
  
  const [msg, setMsg] = useState('');


  const db = getDatabase();
  const chatListRef = ref(db, 'chats');

  useEffect(()=>{
    
    onChildAdded(chatListRef, (data) => {
      
      setChats(chats=>[...chats,data.val()]);
      });
    
  },[])

  const sendChat = () => {
    
    const chatRef = push(chatListRef);
    set(chatRef, {
       name, messege: msg 
      
    });
    setMsg('');
  };

  
  return (
    <div>
      {name ? null : (
        <div>
          <input
            type="text"
            placeholder="enter name to start"
            onBlur={(e) => setName(e.target.value)}
          ></input>
        </div>
      )}

      {name ? (
        <div>
          <h3>user :{name}</h3>
          <div className="chat-container">
            {chats.map((c,i) => (
              <div key={i} className={`container ${c.name === name ? "me" : ""}`}>
                <p className="chatbox">
                  <strong>{c.name}</strong>
                  <span>{c.messege}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="bottom">
            <input
              type="text"
              onInput={(e) => setMsg(e.target.value)}
              value={msg}
              placeholder="Enter ur messege"
            />
            <button onClick={(e) => sendChat()}>Send</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
