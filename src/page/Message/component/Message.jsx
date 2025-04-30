import React from 'react';
import { useSearchParams } from 'react-router';

const messages = [
  { id: 1, type: 'audio', from: 'other', duration: '0:06' },
  { id: 2, type: 'audio', from: 'other', duration: '0:05' },
  { id: 3, type: 'timestamp', time: '12/26/23, 4:02 PM' },
  { id: 4, type: 'text', from: 'me', content: 'Assay' },
  { id: 5, type: 'text', from: 'me', content: 'Assalamualaikum' },
  { id: 6, type: 'text', from: 'me', content: 'Kmn acis' },
  { id: 7, type: 'text', from: 'other', content: 'Alhamdulillah' },
  { id: 8, type: 'text', from: 'other', content: 'Tui kmn acos' },
  { id: 9, type: 'text', from: 'other', content: 'Nah room e suye aci' },
  { id: 10, type: 'text', from: 'other', content: 'Hmm' },
  { id: 11, type: 'text', from: 'me', content: 'Alhamdulillah vlo' },
  { id: 12, type: 'text', from: 'me', content: 'Duty te naki' },
  { id: 13, type: 'text', from: 'me', content: 'Break time' },
  { id: 14, type: 'text', from: 'me', content: 'To bari to complete er pothe' }
];

const ChatWindow = () => {
  const [searchParams]=useSearchParams()
  const email=searchParams.get('email')
  console.log(email)
  return (
    <div className="flex flex-col h-screen  bg-white border">
      {/* Header */}
      <div className="border rounded shadow-sm w-[100%] mt-4 px-4 py-2 flex items-center justify-between bg-white">
  <div className="flex items-center gap-2">
    <img src="..." className="w-10 h-10 rounded-full" alt="Profile" />
    <div>
      <h2 className="font-semibold">Nasir Hossain Roman</h2>
      <p className="text-xs text-green-500">Active now</p>
    </div>
  </div>

  {/* Right icons */}
  <div className="flex gap-4 text-purple-600 text-xl">
    <i className="fas fa-phone"></i>
    <i className="fas fa-video"></i>
    <i className="fas fa-info-circle"></i>
  </div>
</div>


      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => {
          if (msg.type === 'timestamp') {
            return (
              <div key={msg.id} className="text-center text-xs text-gray-400 my-2">
                {msg.time}
              </div>
            );
          }

          if (msg.type === 'audio') {
            return (
              <div
                key={msg.id}
                className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-xl px-4 py-2 ${
                    msg.from === 'me' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-black'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>🔊</span>
                    <div className="w-24 h-4 bg-white/40 rounded-full"></div>
                    <span className="text-sm">{msg.duration}</span>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={msg.id}
              className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-xl text-sm ${
                  msg.from === 'me'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-100 text-black rounded-bl-none'
                }`}
              >
                {msg.content}
              </div>
            </div>
          );
        })}
      </div>

      {/* Message input */}
      <div className="flex items-center gap-2 p-3 border-t">
        <button className="text-xl text-gray-500">➕</button>
        <button className="text-xl text-gray-500">📷</button>
        <button className="text-xl text-gray-500">🎤</button>
        <input
          type="text"
          placeholder="Aa"
          className="flex-1 border rounded-full px-4 py-2 text-sm"
        />
        <button className="text-xl text-blue-500">😊</button>
      </div>
    </div>
  );
};

export default ChatWindow;
