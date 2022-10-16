import Wrapper from "../../wrappers/CreateArticle";
import img from "../../assets/images/neon-rain-japan-street.jpg";
import {Alert} from '../../components/'
import {
  ArticleModule,
  Bullets,
  Image,
  LargeHeader,
  Numbers,
  Paragraph,
  SmallHeader,
  Title,
} from "../../components/article modules";
import { useAppContext } from "../../context/appContext";

const CreateArticle = () => {
  const { isEditing, article, showAlert } = useAppContext();

  return (
    <Wrapper>
      <div className="article-content">
        {showAlert && <Alert />}
        <ArticleModule
          module={{
            moduleType: "title",
            title: "",
          }}
        />
      </div>
    </Wrapper>
  );
};
export default CreateArticle;
