const MessageItem = ({
    id,
    teachQuestion,
    teachAnswer,
}) => {
    return (
        <div className="MessageItem">
            <span className="answer">심심이 : {teachAnswer}</span>
            <span className="teachMessage">가르친 메세지 : {teachQuestion} </span>
        </div>
    )
};

export default MessageItem;