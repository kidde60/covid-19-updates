import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../Redux/Home/Home';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate();
    const Detail = useSelector((state) => state.Home.countriesData)
    // console.log(Detail)
    const dispatch = useDispatch()
    if (Detail.length == 0) {

        dispatch(fetchCountries())
    }
    return (
        <div>
            {Detail.map((data) => (
                <div key={data.ID}>
                    <button type="button" onClick={() => { navigate("/"); }} >Home</button>
                    <div>
                        <h2>Country: {data.Country}</h2>
                        <h2>Last Updated: {data.Date}</h2>
                        <h2>New Confirmed Cases: {data.NewConfirmed}</h2>
                        <h2>New Deaths: {data.NewDeaths}</h2>
                        <h2>New Recovery : {data.NewRecovered}</h2>
                        <h2>Total Confirmed Cases: {data.TotalConfirmed}</h2>
                        <h2>Total Deaths: {data.TotalDeaths}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Details;
