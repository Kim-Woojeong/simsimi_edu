import CoverSimSimi from "../img/coverSimSimi.png"
const Cover = () => {
    return (
        <div className="Cover">
            <h3>나만의 AI 챗봇 심심이 만들기</h3>
            <div className="CoverInput">
                <img src={CoverSimSimi} alt="표지심심이"/>
                <div className="inputName">
                    <input placeholder="당신의 이름을 알려주세요"/>
                </div>
            </div>
        </div>
    );
};

export default Cover;
