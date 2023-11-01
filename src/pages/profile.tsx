import Card from "react-bootstrap/Card";

export const ProfilePage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-dark" style={{ height: "100vh" }}>
      <Card className="bg-dark" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://luistormes.netlify.app/avatar.png" />
        <Card.Body>
          <Card.Title className="text-white text-center">Luis Tormes</Card.Title>
          <Card.Text className="text-white">Frontend Developer React | Nextjs</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
