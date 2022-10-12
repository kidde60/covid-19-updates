import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../Redux/Home/Home'

const Home = () => {
    const countries = useSelector((state) => state.Home.countriesData);
    const global = useSelector((state) => state.Home.global);
    console.log(countries)
    console.log(global)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCountries())
    }, [dispatch])
    return (
        <div>
            <div>
                <h2>Date: {global.Date}</h2>
                <h2>New Confirmed: {global.NewConfirmed}</h2>
                <h2>New Deaths: {global.NewDeaths}</h2>
                <h2>Total Confirmed: {global.TotalConfirmed}</h2>
                <h2>Total Deaths: {global.TotalDeaths}</h2>
            </div>
            <h1>Current Covid 19 statistics per country</h1>
            {countries.loading && <div>loading ...</div>}
            {!countries.loading && countries.error ? <div>error{countries.error}</div> : null}
            {!countries.loading && countries.length ? (
                <ul>
                    {countries.map((country) => (
                        //  {TotalRecovered,  TotalDeaths,  TotalRecovered } = country
                        <li key={country.ID}>
                            <h2>{country.Country}</h2>
                            <h3>Total Confirmed: {country.TotalConfirmed}</h3>
                            <h3>Total Deaths: {country.TotalDeaths}</h3>
                            <h3>New Confirmed: {country.NewConfirmed}</h3>



                        </li>

                    ))}
                </ul>
            ) : null}
        </div>
    )
};

export default Home;
