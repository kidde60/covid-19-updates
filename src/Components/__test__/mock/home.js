import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const fetchCountries = () => {
  const countries = [
    {
      Country: 'Afghanistan',
      TotalConfirmed: 201750,
      TotalDeaths: 7814,
      NewDeaths: 2,

    },
  ];
  return (
    <BrowserRouter>

      {countries.map((country) => (

        <div className="item" key={country.ID}>

          <div className="list-item">
            <div className="list-items">
              <h2 className="break">{country.Country}</h2>
              <h3>
                Total Confirmed:
                {country.TotalConfirmed}
              </h3>
              <h3>
                Total Deaths:
                {country.TotalDeaths}
              </h3>
              <h3>
                New Confirmed:
                {country.NewConfirmed}
              </h3>

            </div>
            <span className="BTN">&#8594;</span>
          </div>

        </div>

      ))}

    </BrowserRouter>

  );
};
export default fetchCountries;
