import "./NextPageArrows.css";
const rightArrow = require("../assets/right-arrow.png");

type PropTypes = {
  onClick: () => void;
};

export const NextPageArrows = ({ onClick }: PropTypes) => {
  return (
    <span onClick={onClick} className="right-arrows">
      <img className={`to-right arrow1`} alt="To left" src={rightArrow} />
      <img className={`to-right arrow2`} alt="To left" src={rightArrow} />
      <img className={`to-right arrow3`} alt="To left" src={rightArrow} />
    </span>
  );
};
