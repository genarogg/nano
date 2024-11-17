import React from "react";

interface headersProps { }

const headers: React.FC<headersProps> = () => {
  const cards = [
    {
      src: "/layout/landing-center",
      title: "Example Iframe Center",
    },
    {
      src: "/layout/landing-left",
      title: "Example Iframe Left",
    },
  ];

  return (
    <div className="demos">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="layouts">
            <div className="resizable-container">
              <iframe
                className="styled-iframe"
                src={card.src}
                sandbox="allow-scripts allow-same-origin"
                title={card.title}
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default headers;
