/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../../Redux/Home/Home';
import Image from '../../images/images.jpg';

const Home = () => {
    const countries = useSelector((state) => state.Home.countriesData);
    const global = useSelector((state) => state.Home.global);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
            <div className="search">
                <div className="input">

                    <input
                        type="text"
                        placeholder="Search Country ...."
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />

                </div>
                <h1>GLOBAL COVID-19 STATISTICS</h1>
            </div>
            <div className="statistics">
                <div className="image">
                    <img src={Image} alt="Covid-19-image" height={300} />
                </div>
                <div className="global">
                    <h2>
                        Date:
                        <span className="span">{global.Date}</span>
                    </h2>
                    <h2>
                        New Confirmed:
                        {global.NewConfirmed}
                    </h2>
                    <h2>
                        New Deaths:
                        {global.NewDeaths}
                    </h2>
                    <h2>
                        Total Confirmed:
                        {global.TotalConfirmed}
                    </h2>
                    <h2>
                        Total Deaths:
                        {global.TotalDeaths}
                    </h2>
                </div>
            </div>
            <div className="country">
                <h1>Current Covid 19 statistics per country</h1>
                {countries.loading && <div>loading ...</div>}
                {!countries.loading && countries.error ? (
                    <div>
                        error
                        {countries.error}
                    </div>
                ) : null}
                {!countries.loading && countries.length ? (
                    <div className="list">
                        {countries.filter((country) => {
                            if (searchTerm == '') {
                                return country;
                            } if (country.Country.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                return country;
                            }
                        }).map((country) => (

                            <div className="item" key={country.ID}>
                                <Link to={`/Details/${country.Country}`}>
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
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default Home;
