import MessageItem from "./MessageItem";

const MessageList = ({MessageList}) => {
    console.log(MessageList);
    return (
        <div className="MessageListContainer">
            <h2>내가 가르친 말</h2>
            <div className="MessageList">
                {MessageList.map(it => (
                    <MessageItem key={it.id} {...it}/>
                ))}
            </div>
        </div>
    );
};

MessageList.defaultProps = {
    msgList: [],
};

export default MessageList;