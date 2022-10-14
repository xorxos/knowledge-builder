import EditButtons from "./EditButtons";

const Image = ({ img, caption }) => {
  return (
    <figure>
      <img src={img} loading="lazy" alt={caption} />
      <figcaption>{caption}</figcaption>
      <EditButtons />
    </figure>
  );
};
export default Image;
