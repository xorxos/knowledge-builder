import Wrapper from "../wrappers/ArticleInfo";

const ArticleInfo = ({ icon, text }) => {
  return <Wrapper>
    {icon && <span className="icon">{icon}</span>}
    <span className="text">{text}</span>
  </Wrapper>;
};
export default ArticleInfo;