const MessageItem = ({
    id,
    contents,
    answer
}) => {
    return (
        <div className="MessageItem">
            <span className="techMessage">가르친 메세지 : {contents}</span>
            <span className="answer">심심이 : {answer}</span>
        </div>
    )
};

export default MessageItem;