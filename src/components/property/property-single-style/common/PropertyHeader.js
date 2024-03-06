"use client";
import {useState, useEffect} from 'react';
import listings from "@/data/listings";
import React from "react";

const PropertyHeader = ({ property }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(property);
        
    }, [property])

    console.log("data", data);

  return (
    <>
      <div className="col-lg-8">
        <div className="single-property-content mb30-md">
          <h2 className="sp-lg-title">{data.title}</h2>
          <div className="pd-meta mb15 d-md-flex align-items-center">
            <p className="text fz15 mb-0 bdrr1 pr10 bdrrn-sm">
            {data.cityname?.name}, {data.address}
            </p>
            <a
              className="ff-heading text-thm fz15 bdrr1 pr10 ml0-sm ml10 bdrrn-sm"
              href="#"
            >
              <i className="fas fa-circle fz10 pe-2" />
              Pour {data.purpose == "location" ? "location" : "vente"}
            </a>
            <a
              className="ff-heading ml10 ml0-sm fz15"
              href="#"
            >
              <i className="far fa-clock pe-2" />
              {/* {Number(new Date().getFullYear()) -
                Number(data.yearBuilding)}{" "} */}
              années
            </a>
            {/* <a className="ff-heading ml10 ml0-sm fz15" href="#">
              <i className="flaticon-fullscreen pe-2 align-text-top" />
              8721
            </a> */}
          </div>
          <div className="property-meta d-flex align-items-center">
            <a className="text fz15" href="#">
              <i className="flaticon-bed pe-2 align-text-top" />
              {data.bedroom} chambres
            </a>
            <a className="text ml20 fz15" href="#">
              <i className="flaticon-shower pe-2 align-text-top" />
              {data.bathroom} salles de bain
            </a>
            <a className="text ml20 fz15" href="#">
              <i className="flaticon-expand pe-2 align-text-top" />
              {data.area} m2
            </a>
          </div>
        </div>
      </div>
      {/* End .col-lg--8 */}

      <div className="col-lg-4">
        <div className="single-property-content">
          <div className="property-action text-lg-end">
            <div className="d-flex mb20 mb10-md align-items-center justify-content-lg-end">
              <a className="icon mr10" href="#">
                <span className="flaticon-like" />
              </a>
              <a className="icon mr10" href="#">
                <span className="flaticon-new-tab" />
              </a>
              <a className="icon mr10" href="#">
                <span className="flaticon-share-1" />
              </a>
              <a className="icon" href="#">
                <span className="flaticon-printer" />
              </a>
            </div>
            <h3 className="price mb-0">{new Intl.NumberFormat('en-DE').format(data.price)} FCFA</h3>
            {/* <p className="text space fz15">
              $
              {(
                Number(data.price.split("$")[1].split(",").join("")) / data.area
              ).toFixed(2)}
              /m2
            </p> */}
          </div>
        </div>
      </div>
      {/* End .col-lg--4 */}
    </>
  );
};

export default PropertyHeader;
