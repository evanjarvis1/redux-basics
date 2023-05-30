import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  let currentDisplay = useSelector(selectDisplay);

  console.log(currentDisplay.timezones);

  return (
    <div className="stack">
      <h1>{currentDisplay.name.official}</h1>
      <table className="overview-table">
        <tr>
          <td>Capital:</td>
          {currentDisplay.capital.map((e) => (
            <td>{e}</td>
          ))}
        </tr>
        <tr>
          <td>Population:</td>
          <td>{currentDisplay.population}</td>
        </tr>
        <tr>
          <td className="timezone">timezone(s):</td>
          {currentDisplay.timezones.map((e) => (
            <tr>{e}</tr>
          ))}
        </tr>
        <tr>
          <td>Map</td>
          <td>
            <a href={currentDisplay.maps.googleMaps} target="_blank">
              View on Map
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Overview;
