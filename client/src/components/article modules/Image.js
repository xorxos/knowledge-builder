
const Image = ({ img, caption, noEdit }) => {
  const handleClick = () => {
    // if (noEdit) return;
    // setIsEditingBullets((prev) => !prev);
  };

  return (
    <>
      <figure>
        <img src={img} loading="lazy" alt={caption} />
        <figcaption>{caption}</figcaption>
      </figure>
    </>
  );
};
export default Image;
