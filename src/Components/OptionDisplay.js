import React from "react";
import { useSelector } from "react-redux";
import { setPotentials } from "../redux/slices/potentialCountriesSlice";
import { useDispatch } from "react-redux";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";

const OptionDisplay = () => {
  let currentPotentials = useSelector(setPotentials);

  const dispatch = useDispatch();

  console.log(currentPotentials);

  return (
    <div className="stack">
      {currentPotentials.map((e, i) => {
        return (
          <h2
            key={e.name.official}
            className="country-option"
            onClick={dispatch(setDisplayCountry(currentPotentials))}
          >
            {e.name.common}
          </h2>
        );
      })}
    </div>
  );
};

export default OptionDisplay;
