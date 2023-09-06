interface IFavorite {
  isFavorite: boolean;
  onToggleFavorite: (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => void;
}

const Favorite = (props: IFavorite) => {
  const { isFavorite, onToggleFavorite } = props;

  return (
    <p
      onClick={onToggleFavorite}
      style={{ color: isFavorite ? "red" : "gray" }}
    >
      &#10084;
    </p>
  );
};

export default Favorite;
