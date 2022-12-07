import MessageItem from "./MessageItem";

const MessageList = ({MessageList}) => {
    return (
        <div className="MessageListContainer">
            <h2>내가 가르친 말</h2>
            <div className="MessageList">
                {/* 되도록 idx 쓰지말고 유니크한 id 매번 직접 데이터 안에 생성하기! */}
                {MessageList.map((it,idx) => (
                    <MessageItem key={idx} {...it}/>
                ))}
            </div>
        </div>
    );
};

MessageList.defaultProps = {
    msgList: [],
};

export default MessageList;