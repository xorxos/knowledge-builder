import { useAppContext } from "../context/appContext";
import Wrapper from "../wrappers/StatItem";

const StatItem = ({ count, title, icon, color, bcg }) => {
  const { changeStatus, searchStatus} = useAppContext();
  const selected = searchStatus === title;

  return (
    <Wrapper selected={selected} color={color} bcg={title === bcg} onClick={() => changeStatus(title)}>
      <header>
        <span className="count">{count}</span>
        {icon && <div className="icon">{icon}</div>}
      </header>
      <h5 className="title">{title} articles</h5>
    </Wrapper>
  );
};
export default StatItem;
