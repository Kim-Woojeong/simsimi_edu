const MessageItem = ({
    id,
    teachQuestion,
    teachAnswer,
}) => {
    return (
        <div className="MessageItem">
            <div className="teach">
                <span className="teachMessage">{teachQuestion}</span>
                <div className="explain">이라고말하면</div>
            </div>
            <div className="simsimi">
                <span className="answer">{teachAnswer}</span>
                <div className="explain">라고 답해</div>
            </div>
        </div>
    )
};

export default MessageItem;