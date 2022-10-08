import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  {
    id: 1,
    text: "all articles",
    path: "/",
    icon: <MdQueryStats />,
  },
  {
    id: 2,
    text: "add article",
    path: "add-article",
    icon: <FaWpforms />,
  },
  {
    id: 3,
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
];

export default links;
