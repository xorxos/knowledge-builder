import {
  LargeHeader,
  Paragraph,
  SmallHeader,
  Image,
  Numbers,
  Bullets,
  Title,
} from ".";

const ArticleModule = ({ module, index }) => {
  switch (module.moduleType) {
    case "title":
      return <Title text={module.title} />;

    case "largeHeader":
      return <LargeHeader text={module.mainText} module={module} index={index} />;

    case "smallHeader":
      return <SmallHeader text={module.mainText} module={module} index={index} />;

    case "paragraph":
      return <Paragraph text={module.mainText} module={module} index={index} />;

    case "numberedList":
      return <Numbers list={module.listText} module={module} index={index} />;

    case "bulletList":
      return <Bullets list={module.listText} module={module} index={index} />;

    case "codeBlock":
      return;

    case "image":
      return <Image img={module.imagePath} caption={module.imageCaption} index={index} />;

    default:
      return;
  }
};
export default ArticleModule;
