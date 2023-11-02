import { Button, Card } from "react-bootstrap";
import { BsStar, BsStarFill } from "react-icons/bs";

import { deleteFavorite, setAsFavorite } from "../../../services/cats";
import { useCatsStore } from "../../../store";
import type { ICatImage, IFavoriteCat } from "../../../types";

export const CastCard = (item: ICatImage | IFavoriteCat) => {
  const { url, id } = "image" in item ? item.image : item;
  const favoritesCats = useCatsStore((state) => state.favoritesCats);
  const isFavorite = favoritesCats.some((cat) => cat.image.id === id);

  const handleClick = async () => {
    if (!isFavorite) {
      await setAsFavorite(id);
      return;
    }
    await deleteFavorite(id);
  };

  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={url} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
      <Card.Body>
        <Button variant="link" onClick={handleClick}>
          {isFavorite ? <BsStarFill /> : <BsStar />}
        </Button>
      </Card.Body>
    </Card>
  );
};
