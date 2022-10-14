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

            <div className="background" >
                {Detail.filter((country) => {
                    if (CountryId === country.Country) {
                        return country
                    }
                }).map((data) => (
                    <div key={data.ID}>
                        <span className="HomeBtn" onClick={() => { navigate("/"); }} >&#8592;</span>
                        <div className="Details">
                            <div className="flex">
                                <h2>Country</h2>
                                <h2>{data.Country}</h2>
                            </div>
                            <div className="flex">
                                <h2>Last Updated</h2>
                                <h2 className="dt">{data.Date}</h2>
                            </div>
                            <div className="flex">
                                <h2>New Confirmed Cases</h2>
                                <h2>{data.NewConfirmed}</h2>
                            </div>
                            <div className="flex">
                                <h2>New Deaths</h2>
                                <h2>{data.NewDeaths}</h2>
                            </div>
                            <div className="flex">
                                <h2>New Recovery</h2>
                                <h2>{data.NewRecovered}</h2>
                            </div>
                            <div className="flex">
                                <h2>Total Confirmed Cases</h2>
                                <h2>{data.TotalConfirmed}</h2>
                            </div>
                            <div className="flex">
                                <h2>Total Deaths</h2>
                                <h2>{data.TotalDeaths}</h2>
                            </div>






                        </div>
                    </div>
                ))

                }
            </div>

        </div>
    );
};

export default Details;
