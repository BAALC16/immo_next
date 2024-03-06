"use client";
import {useState, useEffect} from 'react';
import DefaultHeader from "@/components/common/DefaultHeader";
//import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import FilteringAgent from "@/components/property/FilteringAgent";
import Footer from "@/components/home/home-v9/footer";
import React from "react";

/* export const metadata = {
  title: "Agents || Homez - Real Estate NextJS Template",
}; */

const Agents = () => {

    const [agents, setAgents] = useState([]);
    const [propertyTypes, setPropertyTypes] = useState([]);
    const [propertyCities, setPropertyCities] = useState([]);

    useEffect(() => {
        queries();
		
    }, [])
	  
    const queries = () => {
        fetch(process.env.appUrl+'api/agents')
        .then((res) => res.json())
        .then((data) => {
            setAgents(data.data.agents);
            setPropertyTypes(data.data.propertyTypes);
            setPropertyCities(data.data.propertyCities);
        })
    } 
    
    return (
        <>
        {/* Main Header Nav */}
        <DefaultHeader />
        {/* End Main Header Nav */}

        {/* Mobile Nav  */}
        <MobileMenu />
        {/* End Mobile Nav  */}

        {/* Breadcumb Sections */}
        <section className="breadcumb-section">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="breadcumb-style1">
                    <h2 className="title">Agents</h2>
                    <div className="breadcumb-list">
                    <a href="#">Accueil</a>
                    <a href="#">Trouver un agent</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* End Breadcumb Sections */}

        {/* Agent Section Area */}
        <FilteringAgent agents={agents} propertyTypes0={propertyTypes} propertyCities={propertyCities} />
        
        {/* End Agent Section Area */}

        {/* Start Our Footer */}
        <section className="footer-style1 at-home4 pt60 pb-0">
                <Footer />
            </section>
        {/* End Our Footer */}
        </>
    );
};

export default Agents;
