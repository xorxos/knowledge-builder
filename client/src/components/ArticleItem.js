import moment from "moment";
import { useAppContext } from "../context/appContext";
import { FaFlag } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../wrappers/ArticleItem";
import ArticleInfo from "./ArticleInfo";
import { Tags } from "./";

const ArticleItem = ({ _id, updatedAt, title, status, tags, flagged }) => {
  const { deleteArticle, toggleFlag, togglePublish } = useAppContext();

  let date = moment(updatedAt);
  date = date.format("MMM Do, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="info">
          <h5>{title}</h5>
          <ArticleInfo text={"Last modified: " + date} />
        </div>
        {flagged && (
          <div className="status flagged">
            <FaFlag />
          </div>
        )}
      </header>
      {tags.length > 0 && <Tags tags={tags} />}
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
              onClick={() => deleteArticle(_id)}
            >
              Delete
            </button>
            {flagged && (
              <button
                type="button"
                className="btn edit-btn"
                onClick={() => toggleFlag(_id, flagged)}
              >
                unflag
              </button>
            )}
            {!flagged && (
              <button
                type="button"
                className="btn delete-btn"
                onClick={() => toggleFlag(_id, flagged)}
              >
                flag
              </button>
            )}
            {status !== "published" && (
              <button
                type="button"
                className="btn publish-btn"
                onClick={() => togglePublish(_id, status)}
              >
                publish
              </button>
            )}
            {status === "published" && (
              <button
                type="button"
                className="btn unpublish-btn"
                onClick={() => togglePublish(_id, status)}
              >
                unpublish
              </button>
            )}
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default ArticleItem;
