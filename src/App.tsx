import { Container } from "react-bootstrap";
import { AppRouter } from "./components";

export default function App() {
  return (
    <Container className="h-100 bg-dark">
      <AppRouter />
    </Container>
  );
}
