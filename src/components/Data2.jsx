import React from "react";
import "./Data2.css";

function Data2() {
  const cards = [
    {
      id: 1,
      image:
        "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
      rating: "5/5",
      time: "41 Mins",
      author: "#Michael Le",
      title: "Bro’s Nike Zoom Freak 4",
      description:
        "Arriving right time for the Fall, this upcoming take on the Zoom Freak 4 seemingly draws inspiration f...",
    },
    {
      id: 2,
      image:
        "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1",
      rating: "4/5",
      time: "5 Days",
      author: "#Michael Le",
      title: "Air Force 1 Low Expands",
      description:
        "The nighttime aesthetic seen here is applied to the tumbled black leather panels of the upper and perf...",
    },
    {
      id: 3,
      image:
        "https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1",
      rating: "3/5",
      time: "25 Days",
      author: "#Jared Ebanks",
      title: "Puma Announces Breanna",
      description:
        "For the first time in over a decade, a signature basketball silhouette is being made for one of the WN...",
    },
    {
      id: 4,
      image:
        "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1",
      rating: "3/5",
      time: "1 Months",
      author: "#Jared Ebanks",
      title: "Nike Air Zoom GT Cut 2",
      description:
        "The Bred colorway of Zoom GT Cut 2 will be first to release this Friday, For Nike Members Nation Worl...",
    },
  ];

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-info">
            <div className="card-meta">
              <b className="baxo">❤️ {card.rating}</b>
              <b className="baxo">🕐 {card.time}</b>
              <b className="authoor">{card.author}</b>
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button className="read">READ MORE</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Data2;
