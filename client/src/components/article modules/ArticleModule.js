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
      return <Title text={module.title} />;

    case "largeHeader":
      return <LargeHeader text={module.mainText} module={module} />;

    case "smallHeader":
      return <SmallHeader text={module.mainText} module={module} />;

    case "paragraph":
      return <Paragraph text={module.mainText} module={module} />;

    case "numberedList":
      return <Numbers list={module.listText} module={module} />;

    case "bulletList":
      return <Bullets list={module.listText} module={module}/>;

    case "codeBlock":
      return;

    case "image":
      return <Image img={module.imagePath} caption={module.imageCaption} />;

    default:
      return;
  }
};
export default ArticleModule;
