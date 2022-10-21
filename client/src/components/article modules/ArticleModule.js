import {
  LargeHeader,
  Paragraph,
  SmallHeader,
  Image,
  Numbers,
  Bullets,
  Title,
} from ".";

const ArticleModule = ({ module, index, noEdit }) => {
  switch (module.moduleType) {
    case "title":
      return <Title text={module.title} />;

    case "largeHeader":
      return <LargeHeader noEdit={noEdit} text={module.mainText} module={module} index={index} />;

    case "smallHeader":
      return <SmallHeader noEdit={noEdit} text={module.mainText} module={module} index={index} />;

    case "paragraph":
      return <Paragraph noEdit={noEdit} text={module.mainText} module={module} index={index} />;

    case "numberedList":
      return <Numbers noEdit={noEdit} list={module.listText} module={module} index={index} />;

    case "bulletList":
      return <Bullets noEdit={noEdit} list={module.listText} module={module} index={index} />;

    case "codeBlock":
      return;

    case "image":
      return <Image noEdit={noEdit} img={module.imagePath} caption={module.imageCaption} index={index} />;

    default:
      return;
  }
};
export default ArticleModule;
