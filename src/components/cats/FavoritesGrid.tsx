import { Col, Row } from "react-bootstrap";
import { useFavorites } from "../../hooks";
import { IFavoriteCat } from "../../types";
import { CastCard } from "./CastCard";

export const FavoritesGrid = () => {
  const { favoritesCats, loading } = useFavorites();

  if (loading) {
    return (
      <div>
        <h1 className="text-white">Loading...</h1>
      </div>
    );
  }

  if (favoritesCats.length === 0) {
    return (
      <div>
        <h1 className="text-white">No hay favoritos</h1>
      </div>
    );
  }
  return (
    <Row className="mt-3 flex-wrap">
      {favoritesCats.map((cat: IFavoriteCat) => (
        <Col sm={6} md={4} lg={3} key={cat.id} className="d-flex">
          <CastCard id={cat.image.id} url={cat.image.url} />
        </Col>
      ))}
    </Row>
  );
};
