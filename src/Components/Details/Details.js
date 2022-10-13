import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';


const Details = () => {
    const navigate = useNavigate();
    const Detail = useSelector((state) => state.Detail.countriesDetails)
    console.log(Detail)
    const { CountryId } = useParams();

    console.log(CountryId)
    return (
        <div>

            <div >
                {Detail.filter((country) => {
                    if (CountryId === country.Country) {
                        return country
                    }
                }).map((data) => (
                    <div key={data.ID}>
                        <div>
                            <button type="button" onClick={() => { navigate("/"); }} >Home</button>
                            <h2>Country: {data.Country}</h2>
                            <h2>Last Updated: {data.Date}</h2>
                            <h2>New Confirmed Cases: {data.NewConfirmed}</h2>
                            <h2>New Deaths: {data.NewDeaths}</h2>
                            <h2>New Recovery : {data.NewRecovered}</h2>
                            <h2>Total Confirmed Cases: {data.TotalConfirmed}</h2>
                            <h2>Total Deaths: {data.TotalDeaths}</h2>
                        </div>
                    </div>
                ))

                }
            </div>

        </div>
    );
};

export default Details;
