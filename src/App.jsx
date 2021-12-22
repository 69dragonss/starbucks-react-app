import React from "react";
import Header from "./components/Header";
import ReUseableSection from "./components/ReUseableSection";

const App = () => {
  return (
    <>
      <Header />
      <section className="px-20 py-8 ">
        <ReUseableSection
          color="#d50032"
          img="/shinnycup.png"
          title="MINTY, CHOCOLATY JOY"
          paragraph="Our handcrafted Peppermint Mocha is like a winter wonderland of flavors."
          button="Order Now"
        />
        <ReUseableSection
          color="#d50032"
          img="/giftcups.png"
          title="30% OFF HOLIDAY GIFTS**"
          paragraph="For a limited time, save on great drinkware and more—for yourself or a friend."
          button="Find your closest store"
        />
        <ReUseableSection
          color="#d50032"
          img="/people.jpg"
          title="You voted, we gave"
          paragraph="Thanks to you, The Starbucks Foundation just donated $1 million to help strengthen communities. See the results and learn more about the impact."
          button="Learn more"
        />
        <ReUseableSection
          color="#d50032"
          img="/atmcard.webp"
          title="Earning 4,500 Bonus Stars is Super Starifying"
          paragraph="Earn more Stars and even more Rewards with a $0 intro annual fee for your first year with the Starbucks® Rewards Visa® Card. Plus your Stars won’t expire – an exclusive Starbucks benefit for cardmembers. Now that’s Super Starifying."
          button="Learn more"
        />
      </section>
    </>
  );
};

export default App;
