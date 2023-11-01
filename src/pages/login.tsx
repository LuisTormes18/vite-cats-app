import { Alert, Button, Form } from "react-bootstrap";
import { useForm } from "../hooks";
import { login } from "../services/auth";

export const LoginPage = () => {
  const { formData, handleInputChange, messageError, setMessageError } = useForm({ username: "", password: "" });

  // handlers
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = formData;

    if (username === "") {
      setMessageError("username is required");
      return;
    }
    if (password === "") {
      setMessageError("password is required");
      return;
    }

    const { ok, data, message } = login(formData);

    if (!ok) {
      setMessageError(message);
      return;
    }

    window.location.href = "/profile";
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
      <Form style={{ width: "100%", maxWidth: "350px" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUser">
          <Form.Label className="text-white">Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="usuario"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-white">Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="contraseña"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        {messageError ? <Alert variant="warning">{messageError}</Alert> : null}
        <Button variant="primary" type="submit" className="w-100 mb-3">
          Iniciar sesión
        </Button>
        <Button href="/register" variant="outline-light" type="button" className="w-100">
          Registrase
        </Button>
      </Form>
    </div>
  );
};
