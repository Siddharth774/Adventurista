// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Unlock the full potential of your global adventures with
            Adventurista&apos;s versatile pricing plans. The Basic Plan caters
            to casual explorers with essential features at an affordable monthly
            subscription. Upgrade to the Pro Plan for enhanced social sharing
            and competitive pricing. The Premium Plan offers exclusive insights
            and VIP support for passionate globetrotters. Choose Adventurista
            and make every moment of your journey count. Sign up now and
            experience the world like never before.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
