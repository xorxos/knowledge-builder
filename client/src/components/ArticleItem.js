import moment from "moment";
import { useAppContext } from "../context/appContext";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../wrappers/ArticleItem";
import ArticleInfo from "./ArticleInfo";

const ArticleItem = ({ _id, updatedAt, title, status, tags }) => {

  let date = moment(updatedAt);
  date = date.format("MMM Do, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="info">
          <h5>{title}</h5>
          <ArticleInfo text={"Last modified: " + date} />
        </div>
        <div className={`status ${status}`}>{status}</div>
      </header>
      <div className="content">
        <footer>
          <div className="actions">
            <Link
              to="/dashboard/add-article"
              className="btn edit-btn"
              onClick={() => console.log("edit article: " + _id)}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => console.log("delete article" + _id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default ArticleItem;
