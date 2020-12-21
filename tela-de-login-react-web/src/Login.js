import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import GoogleLogin from "react-google-login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");
  const [inst, setInstitution] = useState("")
  const stylesCenter = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

  function ehValido() {
    return email.length > 0 && senha.length > 0 && inst.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login" style={stylesCenter}>
      <Form onSubmit={handleSubmit}>
        <p>
          <Form.Group size="lg" controlId="email">
            <b>
              <Form.Label>Email </Form.Label>
            </b>
            <Form.Control
              type="email"
              value={email}
              onChange={(usuario) => setEmail(usuario.target.value)}
            />
          </Form.Group>
        </p>
        <p>
          <Form.Group size="lg" controlId="senha">
            <b>
              <Form.Label>Password </Form.Label>
            </b>
            <Form.Control
              type="password"
              value={senha}
              onChange={(usuario) => setPassword(usuario.target.value)}
            />
          </Form.Group>
        </p>
        <p>
        <Form.Group size="lg" controlId="institution">
            <b>
              <Form.Label>Institution </Form.Label>
            </b>
            <Form.Control
              type="inst"
              value={inst}
              onChange={(institution) => setInstitution(institution.target.value)}
            />
          </Form.Group>
        </p>
        <Button size="lg" type="submit" disabled={!ehValido()}>
          Create account
        </Button>
        <GoogleLogin
          clientId="399537602553-bi9sm4pmetmb59r5v1n3d87aa27hibut.apps.googleusercontent.com"
          buttonText="Google Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </Form>
    </div>
  );
}
