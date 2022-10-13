import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../Redux/Home/Home'
import Details from "../Details/Details";
const Home = () => {
    const countries = useSelector((state) => state.Home.countriesData);
    const global = useSelector((state) => state.Home.global);
    // console.log(countries)
    // console.log(global)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCountries())
    }, [dispatch])

    const [searchTerm, setSearchTerm] = useState("")
    return (
        <>
            <div>

                <input type="text" placeholder="Search Country ...."
                    onChange={event => {
                        setSearchTerm(event.target.value)
                    }}
                />
            </div>
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
                    {countries.filter((country) => {
                        if (searchTerm == "") {
                            return country
                        } else if (country.Country.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                            return country
                        }
                    }).map((country) => (
                        //  {TotalRecovered,  TotalDeaths,  TotalRecovered } = country
                        <div key={country.ID}>
                            <li>
                                <h2>{country.Country}</h2>
                                <h3>Total Confirmed: {country.TotalConfirmed}</h3>
                                <h3>Total Deaths: {country.TotalDeaths}</h3>
                                <h3>New Confirmed: {country.NewConfirmed}</h3>



                            </li>
                            <button type="button">Details</button>
                        </div>
                    ))}
                </ul>
            ) : null}
        </>
    )
};

export default Home;
