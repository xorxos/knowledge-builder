import {
  LargeHeader,
  Paragraph,
  SmallHeader,
  Image,
  Numbers,
  Bullets,
  Title,
} from ".";

const ArticleModule = ({ module }) => {
  switch (module.moduleType) {
    case "title":
      return <Title />;

    case "largeHeader":
      return <LargeHeader text={module.mainText} />;

    case "smallHeader":
      return <SmallHeader text={module.mainText} />;

    case "paragraph":
      return <Paragraph text={module.mainText} />;

    case "numberedList":
      return <Numbers list={module.listText} />;

    case "bulletList":
      return <Bullets list={module.listText} />;

    case "codeBlock":
      return;

    case "image":
      return <Image img={module.imagePath} caption={module.imageCaption} />;

    default:
      return;
  }
};
export default ArticleModule;
