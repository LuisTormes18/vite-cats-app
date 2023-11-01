import { Col, Container, Image, Row } from "react-bootstrap";

export const HomePage = () => {
  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
      <Row className="flex-nowrap">
        <Col xs={12} md={6}>
          <Image src="/dev-cat.jpg" alt="Descripción de la imagen" fluid />
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
          <h1 className="text-center">Bienvenido a nuestra página de Lt Cats</h1>
          <p className="text-center">Esta es una página hecha con corazón 💙</p>
        </Col>
      </Row>
    </Container>
  );
};
