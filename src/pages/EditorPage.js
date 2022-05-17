import React, { useState } from 'react'
import Client from '../components/Client';
import Editor from '../components/Editor';


const EditorPage = () => {

  const data = [
    { socketId: 1, username: "Robin M" },
    { socketId: 2, username: "John Doe" },
    { socketId: 3, username: "Gunjan" },
    { socketId: 4, username: "Daya chauhan" },
  ];
  
  const [clients, setClients] = useState(data)

  return (
    <div className="mainWarp">

      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <h2 className='myLogo'>Coder Sync</h2>
          </div>
          <h3>Connected</h3>
          <div className="clientLists">
            {clients.map((client) => {
              return (
                <Client key={client.socketId} username={client.username} />
              );
            })}
          </div>
        </div>

        <button className='btn copyBtn'>Copy ROOM ID</button>
        <button className='btn leaveBtn'>Leave</button>
      </div>

      <div className='editorWrap'>
        <Editor/>
      </div>

    </div>
  );
  
}

export default EditorPage;