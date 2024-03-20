/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";
// import TinyFlag from "tiny-flag";
// import ReactCountryFlag from "react-country-flag";
// import "./node_modules/flag-icons/css/flag-icons.min.css";
// import "../../node_modules/flag-icons/css/flag-icon.min.css";
// import ReactCountriesFlags from "react-countries-flags";
// import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
// import ReactCountryFlag from "./ReactCountryFlag";
// import ReactCountriesFlags from "react-countries-flags";
// import Flag from "react-world-flags";
// import "../../nodeflag-icon-css/css/flag-icon.min.css";
// import "../../node_modules/flag-icon-css/css/flag-icons.min.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    // weekday: "long",
  }).format(new Date(date));

const flagemojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

// const CountryFlag = ({ emoji }) => {
//   // Assuming countryName is a variable representing the country name
//   return (
//     <div>
//       {/* <h2>{countryName}</h2> */}
//       <TinyFlag countryCode={emoji} size={32} />
//       {/* Adjust size as needed */}
//     </div>
//   );
// };
// const getFlagEmoji = (countryCode) =>
//   countryCode
//     .toUpperCase()
//     .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt()));

// function convertToEmoji(countryCode) {
//   const codePoints = countryCode
//     .toUpperCase()
//     .split("")
//     .map((char) => 127397 + char.charCodeAt());
//   return String.fromCodePoint(...codePoints);
// }

// function convertToEmoji(countryCode) {
//   // Remove any spaces or non-alphanumeric characters from the country code
//   const sanitizedCode = countryCode.toUpperCase().replace(/[^A-Z]/g, "");

//   // Check if the input is a valid 2-letter country code
//   if (sanitizedCode.length !== 2) {
//     console.error(
//       "Invalid country code. Please provide a 2-letter country code."
//     );
//     return "";
//   }

//   // Calculate the code point for each character in the country code
//   const codePoints = sanitizedCode
//     .split("")
//     .map((char) => 127397 + char.charCodeAt(0));

//   // Convert the code points to a flag emoji
//   const flagEmoji = String.fromCodePoint(...codePoints);
//   return flagEmoji;
// }

/* <TinyFlag
  country={country}
  countryName={countryName}
  fallbackImageURL={require("FlagKit/Assets/SVG/" + country + ".svg").default}
></TinyFlag>; */

// function convertToEmoji(countryCode) {
//   const codePoints = countryCode
//     .toUpperCase()
//     .split("")
//     .map((char) => 127397 + char.charCodeAt() - 65); // Adjusting for A-Z range
//   return String.fromCodePoint(...codePoints);
// }

// function isoToEmoji(code) {
//   return code
//     .split("")
//     .map((letter) => (letter.charCodeAt(0) % 32) + 0x1f1e5)
//     .map((emojiCode) => String.fromCodePoint(emojiCode))
//     .join("");
// }

export default function CityItem({ city }) {
  // console.log(city);
  // console.log("\uD83C\uDDF5\uD83C\uDDF9"); // Portugal flag emoji using Unicode escape sequences
  const { cityName, emoji, date, id, position } = city;
  const { currentCity, deleteCity } = useCities();
  // const flagUrl = `https://flagcdn.com/w20/${emoji.toLowerCase()}.png`;

  function handleClick(e) {
    e.preventDefault();
    // console.log("test");
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
        {/* {emoji.toLowerCase()} */}
        {/* {emoji} */}

        {/* <Flag code="nor" /> */}
        {/* <span
            className={`flag-icon flag-icon-${emoji}`}
            aria-hidden="true"
          ></span> */}

        {/* {<span className={`fi" fis fi-${emoji.toLowerCase()}`} />} */}

        {/* {convertToEmoji(emoji)} */}
        {/* {<ReactCountryFlag countryCode={emoji.toUpperCase() || "US"} png />} */}
        {/* {isoToEmoji(emoji.toUpperCase())} */}
        {/* {<ReactCountriesFlags isoCode={emoji} />} */}
        {/* {polyfillCountryFlagEmojis(emoji)} */}
        {/* {getFlagEmoji(emoji.toUpperCase())} */}
        {/* {<ReactCountryFlag countryCode={emoji} />} */}

        {/* {CountryFlag(emoji.toUpperCase())} */}
        {/* {convertToEmoji(emoji)}; */}
        {/* {<img src={flagUrl} width="20" alt={emoji.toLowerCase()}></img>} */}
        {/* {
          <img
            src={`https://flagcdn.com/w20/${emoji.toLowerCase()}.png`}
            width="20"
            alt={emoji.toLowerCase()}
          ></img>
        } */}
        {/* {displayCountryFlag(emoji)} */}
        {/* {<ReactCountriesFlags isoCode={emoji} />} */}

        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}
