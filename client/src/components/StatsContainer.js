import StatItem from "./StatItem";
import Wrapper from "../wrappers/StatsContainer";
import { useAppContext } from "../context/appContext";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";

const StatsContainer = () => {
  const { stats } = useAppContext();
  const defaultStats = [
    {
      title: "unpublished",
      count: stats.unpublished || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e8b949",
      bcg: "#fcefc6",
    },
    {
      title: "published",
      count: stats.published || 0,
      icon: <FaCalendarCheck />,
      color: "#646acb",
      bcg: "#e-1e8f9",
    },
    {
      title: "flagged",
      count: stats.flagged || 0,
      icon: <FaBug />,
      color: "#d65a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => (
        <StatItem key={index} {...item} />
      ))}
    </Wrapper>
  );
};
export default StatsContainer;
