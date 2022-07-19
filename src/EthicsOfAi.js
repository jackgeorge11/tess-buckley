import React from "react";
import img1 from "./forest-city.jpeg";
import img2 from "./proteins.jpeg";
import img3 from "./bees.jpg";
import img4 from "./sophie.jpeg";
import img5 from "./tess.jpeg";

export default function EthicsOfAi() {
  const posts = [
    {
      title: "How AI is Shaping a Sustainable Future",
      img: img1,
      date: "Aug 15, 2022",
    },
    {
      title: "Who is Sophie?",
      img: img4,
      date: "Aug 4, 2022",
    },
    {
      title: "Protein Folding; Bioethical Implications",
      img: img2,
      date: "July 29, 2022",
    },
    {
      title: "Could Robotic Insects 'Bee' the Future?",
      img: img3,
      date: "July 10, 2022",
    },
    {
      title: "Who am I?",
      img: img5,
      date: "June 30, 2022",
    },
  ];
  return (
    <div className="home">
      <div className="header">
        <h1 className="thick">Tess Buckley</h1>
        <div className="line"></div>
      </div>
      <main>
        <nav className="info">
          <h2>
            Various ideas and musings on the ethics of Artificial Intelligence.
          </h2>
          <a href="/ethics-of-ai" className="md disabled">
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
        <article className="page-content main">
          {posts.map((post) => (
            <div className="blog-post">
              <div className="img-wrapper">
                <img src={post.img} alt="1" />
              </div>
              <a href="eth">{post.title}</a>
              <p>{post.date}</p>
            </div>
          ))}
        </article>
      </main>
      <div className="footer">
        <div className="line"></div>
        <h4 className="--muted">Ethics of AI</h4>
        {/* <h4> • </h4>
        <a href="contact disabled">Home</a> */}
      </div>
    </div>
  );
}
