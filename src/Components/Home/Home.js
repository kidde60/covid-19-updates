import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchCountries } from '../../Redux/Home/Home'

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCountries())
    }, [])
    return (
        <div>
            home page
        </div>
    );
};

export default Home;
