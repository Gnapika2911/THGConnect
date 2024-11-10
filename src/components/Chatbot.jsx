import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleChatbot} style={styles.chatButton}>
        <span style={styles.chatIcon}>💬</span>
      </div>
      
      {isOpen && (
        <div style={styles.chatbot}>
          <div style={styles.chatbotHeader}>
            <h2 style={styles.headerText}>Chatbot</h2>
            <button onClick={toggleChatbot} style={styles.closeButton}>×</button>
          </div>
          <div style={styles.chatbotMessages}>
            
            <p style={styles.botMessage}>Hi there! How can I assist you?</p>
          </div>
          <div style={styles.chatbotInput}>
            <input
              type="text"
              placeholder="Type a message..."
              style={styles.input}
            />
            <button style={styles.sendButton}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  chatButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    backgroundColor: '#8e44ad',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 9999, 
  },
  chatIcon: {
    fontSize: '24px',
    color: '#fff',
  },
  chatbot: {
    width: '300px',
    height: '400px',
    border: '2px solid #8e44ad',
    borderRadius: '10px',
    position: 'fixed',
    bottom: '90px',
    right: '20px',
    backgroundColor: '#f3e5f5',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Arial, sans-serif',
    zIndex: 9999, 
  },
  chatbotHeader: {
    padding: '10px',
    backgroundColor: '#8e44ad',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '10px 10px 0 0',
  },
  headerText: {
    margin: 0,
  },
  closeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '20px',
    cursor: 'pointer',
  },
  chatbotMessages: {
    padding: '10px',
    flex: 1,
    overflowY: 'auto',
  },
  botMessage: {
    backgroundColor: '#d1c4e9',
    color: '#333',
    padding: '8px',
    borderRadius: '10px',
    margin: '5px 0',
    maxWidth: '80%',
  },
  chatbotInput: {
    display: 'flex',
    padding: '10px',
    borderTop: '1px solid #ddd',
  },
  input: {
    flex: 1,
    padding: '8px',
    border: '1px solid #b39ddb',
    borderRadius: '5px',
    outline: 'none',
  },
  sendButton: {
    padding: '8px 10px',
    marginLeft: '5px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#8e44ad',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Chatbot;
