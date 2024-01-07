import React from "react";

/**
 * @typedef {Object} Card
 * @property {number} stars - The number of stars
 * @property {number} votes - The number of votes
 * @property {string} location - The location
 * @property {string} description - The product description
 * @property {number} price - The price of the product
 * @property {string} category - The category of the product
 * @property {string} image - The image of the product
 * @property {string} status - The status of the product
 */

/**
 * @typedef {Object} CardsProps
 * @property {Card[]} cards - An array of cards
 */

/**
 * @param {CardsProps} props - An array of cards
 */
export default function Cards({ cards }) {
  return (
    <section id="cardSession">
      <section id="cardSession--container">
        {cards.map((c, i) => (
          <div className="cardSession--card" key={`card_image_${i}`}>
            <img src={c.image} className="cardSession--card--image" />
            <div className="cardSession--card--stars">
              <img src="/src/assets/star.png" />
              <span>{c.stars.toPrecision(2)}{" "}</span>
              <span className="gray">({c.votes}) • {c.location}</span>
            </div>
            <p className="cardSession--descr">{c.description}</p>
            <p className="cardSession--descr">
              <span className="bold">From ${c.price} / </span>{c.category}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
}
