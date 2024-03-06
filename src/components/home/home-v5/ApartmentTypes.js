"use client";
import {useState, useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ApartmentTypes = (props) => {

   const [apartmentTypes, setApartmentTypes] = useState([]);

    useEffect(() => {
        //console.log(props);
        let myArray = props.propertyTypes;
        myArray.forEach((element, index) => {
            if(index == 0 || index == 3 || index == 4 || index == 5){
                element.className = "col-lg-6";
            }
            if(index == 1 || index == 2){
                element.className = "col-6 col-lg-3";
            }
    
            switch(element.name){
                case "Appartement": 
                    element.imageSrc = "/images/listings/property-type-apartment.png";
                break;
                case "Villa": 
                    element.imageSrc = "/images/listings/property-type-villa.png";
                break;
                case "Terrain": 
                    element.imageSrc = "/images/listings/property-type-field.png";
                break;
                case "Bureau": 
                    element.imageSrc = "/images/listings/property-type-office.png";
                break;
                case "Magasin": 
                    element.imageSrc = "/images/listings/property-type-store.png";
                break;
            }
            
    
        });

        setApartmentTypes(myArray);
    }, [props.propertyTypes])

    return (
        <>
        {apartmentTypes.map((apartment, index) => (
            <div key={index} className={apartment.className}>
            <div className="feature-style1 mb30">
                <div className="feature-img">
                <Image
                    width={591}
                    height={270}
                    className="w-100 h-100 cover"
                    src={ apartment.imageSrc }
                    alt="city listing"
                />
                </div>
                <div className="feature-content">
                <div className="top-area">
                    <h6 className="title mb-1">{apartment.name}</h6>
                    <p className="text">{apartment.properties_count} Properties</p>
                </div>
                <div className="bottom-area">
                    <Link className="ud-btn2" href={`/proprietes/type/${apartment.slug}`} >
                    Voir les propriétés
                    <i className="fal fa-arrow-right-long" />
                    </Link>
                </div>
                </div>
            </div>
            </div>
        ))}
        </>
    );
};

export default ApartmentTypes;
