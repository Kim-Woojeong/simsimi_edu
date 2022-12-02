const MessageItem = ({
    id,
    contents,
    answer
}) => {
    return (
        <div className="MessageItem">
            <span className="answer">심심이 : {answer}</span>
            <span className="teachMessage">가르친 메세지 : {contents} </span>
        </div>
    )
};

export default MessageItem;