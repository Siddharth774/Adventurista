import ReactCountryFlags from "react-country-flag";
// eslint-disable-next-line react/prop-types
export default function ReactCountryFlag({ emoji }) {
  return (
    <div>
      <ReactCountryFlags countryCode={emoji} style={{ fontSize: "2em" }} />
    </div>
  );
}
