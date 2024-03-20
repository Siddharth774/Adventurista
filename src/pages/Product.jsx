import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About Adventurista.</h2>
          <p>
            Experience the epitome of professional travel tracking with
            Adventurista, where cutting-edge technology meets seamless
            functionality. With React.js, the Context API, and a sophisticated
            JSON server integration, Adventurista elevates your global
            adventures to new heights. Effortlessly navigate through cities on
            an interactive map, curate your travel memories with precision using
            the personalized adventure journal, and ensure data integrity and
            security with the robust JSON server functionality. Join
            Adventurista today and immerse yourself in a world of
            professional-grade travel tracking that simplifies, enhances, and
            enriches your wanderlust experiences.
          </p>
        </div>
      </section>
    </main>
  );
}
