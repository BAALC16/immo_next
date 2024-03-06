"use client";
import React from "react";
import {useState, useEffect} from 'react';
import dynamic from 'next/dynamic';

const PropertyFeaturesAminites = ({propertyFeatures}) => {

    const featuresAmenitiesData = [];

    let nbre;
    let nbreF = 0;
    let i = 1;
    let j = 1;
    let k = 1;
    let col1 = [];
    let col2 = [];
    let col3 = [];

    if((propertyFeatures.length % 3 ) == 0){
        nbre = propertyFeatures.length / 3;
    }else{
        nbre = (propertyFeatures.length - (propertyFeatures.length % 3)) / 3;
        nbreF = nbre + propertyFeatures.length % 3;
    }
    
    propertyFeatures.forEach(element => {
        let label = element.name;
        let nbreTest;
        if( i <= nbre){
            col1.push(label);
        }

        if(i > nbre && j <= nbre ){
            col2.push(label);
            j++;
        }
        
        nbreTest = j - 1;

        if(nbreTest == nbre){
            j++;
        }

        if(nbreTest != nbre && i > nbre && j > nbre && k <= nbreF){
            col3.push(label);
            j++;
            k++;
        }
        
        i++;
    
    });
    
    featuresAmenitiesData.push(col1);
    featuresAmenitiesData.push(col2);
    featuresAmenitiesData.push(col3);

    console.log("bien", propertyFeatures);

    /* const featuresAmenitiesData = [
        ["Air Conditioning", "Barbeque", "Dryer", "Gym"],
        ["Lawn", "Microwave", "Outdoor Shower", "Refrigerator"],
        ["Swimming Pool", "TV Cable", "Washer", "WiFi6"],
    ]; */

    return (
        
        <>

            {featuresAmenitiesData.map((row, rowIndex) => (
                <div key={rowIndex} className="col-sm-6 col-md-4">
                <div className="pd-list">
                    {row.map((item, index) => (
                    <p key={index} className="text mb10">
                        <i className="fas fa-circle fz6 align-middle pe-2" />
                        {item}
                    </p>
                    ))}
                </div>
                </div>
            ))}
        </>
    );
};

export default dynamic(() => Promise.resolve(PropertyFeaturesAminites), { ssr: false });
//export default PropertyFeaturesAminites;
