import { useAppContext } from "../context/appContext";
import Wrapper from "../wrappers/StatItem";

const StatItem = ({ count, title, icon, color, bcg }) => {
  const { changeStatus, searchStatus, changeSearchFlag, searchFlag } =
    useAppContext();
  let selected = searchStatus === title;

  if(title === 'flagged' && searchFlag) {
    selected = true
  }
  console.log(title + ": " + selected)

  const handleClick = (title) => {
    if (title === "flagged") {
      changeSearchFlag();
      return;
    }
    changeStatus(title);
  };

  return (
    <Wrapper
      selected={selected}
      color={color}
      bcg={title === bcg}
      onClick={() => handleClick(title)}
    >
      <header>
        <span className="count">{count}</span>
        {icon && <div className="icon">{icon}</div>}
      </header>
      <h5 className="title">{title} articles</h5>
    </Wrapper>
  );
};
export default StatItem;
