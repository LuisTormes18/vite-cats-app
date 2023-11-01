import { Col, Row } from "react-bootstrap";
import { useFavorites } from "../../hooks";
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
      {favoritesCats.map((cat) => (
        <Col sm={6} md={4} lg={3} key={cat.id} className="d-flex">
          <CastCard {...cat} />
        </Col>
      ))}
    </Row>
  );
};
