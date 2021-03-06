import React from "react";

import { HeaderLink } from "../HeaderLink";

import { Container, ContentContainer, Navigation, Hamburguer } from "./styles";

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function handleClose() {
    setMenuOpen(false);
  }

  return (
    <Container className={menuOpen ? "active" : ""}>
      <ContentContainer>
        <a href="/" className="logo" onClick={() => handleClose()}>
          <img src="/images/logo.png" alt="vila tremani logo" />
        </a>
        <Hamburguer
          className={menuOpen ? "active" : ""}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="line1" />
          <span className="line2" />
          <span className="line3" />
        </Hamburguer>
        <Navigation className={menuOpen ? "active" : ""}>
          <ul>
            <li onClick={() => handleClose()}>
              <HeaderLink href="/tremani" label="TREMANI" />
            </li>
            <li onClick={() => handleClose()}>
              <HeaderLink href="/estrutura" label="ESTRUTURA" />
            </li>
            <li onClick={() => handleClose()}>
              <HeaderLink href="/social" label="SOCIAL" />
            </li>
            <li onClick={() => handleClose()}>
              <HeaderLink href="/corporativo" label="CORPORATIVO" />
            </li>
            <li onClick={() => handleClose()}>
              <HeaderLink href="/contato" label="CONTATO" />
            </li>
            <li onClick={() => handleClose()}>
              <HeaderLink href="/localizacao" label="LOCALIZAÇÃO" />
            </li>
            <li onClick={() => handleClose()}>
              <HeaderLink href="/galeria" label="GALERIA" />
            </li>
          </ul>
        </Navigation>
      </ContentContainer>
    </Container>
  );
}
