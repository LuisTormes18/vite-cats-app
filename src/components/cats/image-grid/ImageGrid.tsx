import { Col, Row } from "react-bootstrap";
import { useGetCats } from "../../../hooks/use-cats";
import { Loading, NotResults } from "../../shared";
import { BreedSelect } from "../breed-select/BreedSelect";
import { CastCard } from "../card/CastCard";

export const ImageGrid = () => {
  const { filterCats, loading } = useGetCats();

  if (loading) return <Loading />;
  if (filterCats.length === 0) return <NotResults />;

  return (
    <div>
      <div className="d-flex justify-content-start align-items-center pb-2">
        <BreedSelect />
      </div>
      <Row className="mt-3 flex-wrap">
        {filterCats.map((cat) => (
          <Col sm={6} md={4} lg={3} key={cat.id} className="d-flex">
            <CastCard {...cat} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
