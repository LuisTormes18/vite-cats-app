import { Col, Row } from "react-bootstrap";

import { useGetFavorites } from "../../../hooks";
import type { IFavoriteCat } from "../../../types";
import { Loading, NotResults } from "../../shared";
import { CastCard } from "../card/CastCard";

export const FavoritesGrid = () => {
  const { favoritesCats, loading } = useGetFavorites();

  if (loading) return <Loading />;
  if (favoritesCats.length === 0) return <NotResults message="No hay favoritos" />;

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
