import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

const AboutPage = () => {
  return (
    <>
      <Header className="Header">
        <Nav className="Nav"></Nav>
      </Header>
      <section className="about">
        <article>
          <h1>Indulge in Sweet Delights at Our Dessert Restaurant</h1>
          <p>
            Welcome to Little Lemon, where sweet dreams come true! Our menu
            features a delicious selection of handcrafted desserts made with the
            finest ingredients and the utmost care. From classic favorites to
            unique creations, we have something to satisfy every sweet tooth.
            Whether you're looking for a rich chocolate cake, a fruity tart, or
            a creamy cheesecake, our desserts are sure to delight. We pride
            ourselves on using only the best ingredients, including premium
            chocolate, fresh fruit, and high-quality dairy products, to create
            desserts that are not only delicious but also visually stunning. In
            addition to our desserts, we also offer a variety of hot and cold
            beverages, including coffee, tea, and specialty drinks. Our cozy
            atmosphere and friendly staff make us the perfect destination for a
            relaxing afternoon break or a sweet treat after dinner. At our
            dessert restaurant, we believe that dessert is more than just a
            meal; it's an experience. That's why we strive to create an
            unforgettable experience for each and every one of our customers. We
            look forward to welcoming you and satisfying your sweet cravings
            with our delectable desserts.
          </p>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
