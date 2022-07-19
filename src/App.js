import React from "react";

function App() {
  return (
    <div className="home">
      <div className="header">
        <h1 className="thick">Tess Buckley</h1>
        <div className="line"></div>
      </div>
      <main>
        <nav className="info">
          <h2>Thinker, singer, creator.</h2>
          <a href="/ethics-of-ai" className="md">
            Ethics of AI
          </a>
          <a href="/ethics-of-ai" className="md">
            Publications
          </a>
          <a href="/ethics-of-ai" className="md">
            Music
          </a>
          <a href="/ethics-of-ai" className="md">
            Radio
          </a>
          <a href="/ethics-of-ai" className="md">
            Crochet
          </a>
          <p></p>
          <a href="/ethics-of-ai" className="md">
            About
          </a>
          <a href="/ethics-of-ai" className="md">
            Contact
          </a>
          <p className="--muted thin">© 2022 by Tess Buckley</p>
        </nav>
      </main>
      <div className="footer">
        <div className="line"></div>
        <h4 className="--muted">Home</h4>
      </div>
    </div>
  );
}

export default App;
