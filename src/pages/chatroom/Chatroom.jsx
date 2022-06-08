import './chatroom.css';


const Chatroom = () => {
    return (
        <div className='chatroom'>
            <span className='chatroomTitle'>聊天室</span>
            <div className="board">
                <div className='messages'>
                    <textarea className='showMessage' disabled>訊息</textarea>
                </div>
                <div className="submit">
                    <input className='messageInput' type="text" />
                    <button className='messageButton' type='submit'>送出</button>
                </div>
            </div>
        </div>
    );
}

export default Chatroom;
