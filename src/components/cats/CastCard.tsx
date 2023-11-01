import { Button, Card } from "react-bootstrap";
import { BsStar, BsStarFill } from "react-icons/bs";
import { setAsFavorite } from "../../services/cats";
import type { ICat } from "../../types";

export const CastCard = ({ url, id }: ICat) => {
  const isFavorite = () => {
    return false;
  };
  const handleFavorites = () => setAsFavorite(id);

  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={url} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
      <Card.Body>
        <Button variant="link" onClick={handleFavorites}>
          {!isFavorite() ? <BsStarFill /> : <BsStar />}
        </Button>
      </Card.Body>
    </Card>
  );
};
