"use client";
import {useState, useEffect} from 'react';

import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/home/home-v9/footer";

//import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

import ProperteyFiltering from "@/components/listing/grid-view/grid-full-3-col/ProperteyFiltering";

import React from "react";

/* export const metadata = {
  title: "Gird Full 3 Column || Homez - Real Estate NextJS Template",
}; */

const buy = (data) => {

    const [properties, setProperties] = useState([]);
	const [propertyFeatures, setPropertyFeatures] = useState([]);
	const [propertyTypes, setPropertyTypes] = useState([]);
	const [propertyCities, setPropertyCities] = useState([]);

    useEffect(() => {
        queries();
		
    }, [])
	  
    const queries = () => {
        fetch('http://127.0.0.3:8003/api/v2/rent')
        .then((res) => res.json())
        .then((data) => {
            setProperties(data.data.properties);
			setPropertyTypes(data.data.propertyTypes);
			setPropertyFeatures(data.data.propertyFeatures);
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
        <section className="breadcumb-section bgc-f7">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="breadcumb-style1">
                    <h2 className="title">Propriétés en location</h2>
                    <div className="breadcumb-list">
                    <a href="#">Accueil</a>
                    <a href="#">Louer</a>
                    </div>
                    <a
                    className="filter-btn-left mobile-filter-btn d-block d-lg-none"
                    data-bs-toggle="offcanvas"
                    href="#listingSidebarFilter"
                    role="button"
                    aria-controls="listingSidebarFilter"
                    >
                    <span className="flaticon-settings" /> Filter
                    </a>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* End Breadcumb Sections */}

        {/* Property Filtering */}

        <ProperteyFiltering properties={ properties } propertyTypes={ propertyTypes } propertyFeatures={ propertyFeatures }  propertyCities={propertyCities}/>
        {/* Property Filtering */}

        {/* Start Our Footer */}
        <section className="footer-style1 at-home4 pt60 pb-0">
            <Footer />
        </section>
        {/* End Our Footer */}
        </>
    );
};

export default buy;
