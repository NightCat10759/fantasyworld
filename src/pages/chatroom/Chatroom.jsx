import './chatroom.css';

const Chatroom = () => {
    return (
        <div className='chatroom'>
            <span className='chatroomTitle'>聊天室</span>
            <div className="board">
                <div className='messages'>
                    <p className='message'>訊息</p>
                </div>
                <div className="submit">
                    <input className='submitInput' type="text" />
                    <button className='submitButton' type='submit'>送出</button>
                </div>
            </div>
        </div>
    );
}

export default Chatroom;
