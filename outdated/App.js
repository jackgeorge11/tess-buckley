import React from "react";

function App() {
  return (
    <main className="home">
      <div className="left">
        <h1 className="thick">Tess Buckley</h1>
        <h3>Thinker, singer, creator.</h3>
        <p className="--muted">© 2022 by Tess Buckley</p>
      </div>
      <nav className="right">
        <div className="wrapper">
          <span className="flow ai-ethics" />
          <button id="ai-ethics">
            <h1 className="thick">Ethics of AI</h1>
          </button>
        </div>
        <div className="wrapper">
          <span className="flow" />
          <button>
            <h1 className="thick">About</h1>
          </button>
        </div>

        <div className="wrapper">
          <span className="flow publications" />
          <button id="publications">
            <h1 className="thick">Publications</h1>
          </button>
        </div>
        <div className="wrapper">
          <span className="flow" />
          <button>
            <h1 className="thick">Contact</h1>
          </button>
        </div>
        <div className="wrapper">
          <span className="flow music" />
          <button id="music">
            <h1 className="thick">Music</h1>
          </button>
        </div>
      </nav>
    </main>
  );
}

export default App;
