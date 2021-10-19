import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Speciality from '../Speciality/Speciality';
import DoctorSay from '../DoctorSay/DoctorSay';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Speciality></Speciality>
            <DoctorSay></DoctorSay>
            <Services></Services>
        </div>
    );
};

export default Home;