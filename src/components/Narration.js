// 이전, 내용, 다음 + 배경 컴포넌트를 하나로 조합해서 여러 컴포넌트 속에서 사용하기

const Narration = () => {
    return (
        <div className="Narration">
            <div className="before">{"<"} 이전</div>
            <div className="contents">심심이는 당신의 이름을 알아야해요!</div>
            <div className="next">다음 {">"}</div>
        </div>
    )
};

export default Narration;