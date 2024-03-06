'use client';
import React, { useState,useEffect } from 'react'
import ListingStatus from "../../sidebar/ListingStatus";
import PropertyType from "../../sidebar/PropertyType";
import PriceRange from "../../sidebar/PriceRange";
import Bedroom from "../../sidebar/Bedroom";
import Bathroom from "../../sidebar/Bathroom";

const TopFilterBar = ({filterFunctions,setCurrentSortingOption,colstyle,setColstyle, properties, propertyTypes0, propertyFeatures}) => {
  
    const [propertyTypes00, setPropertyTypes00] = useState([]);

    //console.log(propertyTypes0);

    useEffect(() => {
        setPropertyTypes00(propertyTypes0);	
    }, [propertyTypes0])

    return (
        <>
        <div className="col-xl-9 d-none d-lg-block">
            <div className="dropdown-lists">
            <ul className="p-0 text-center text-xl-start">
                {/* <li className="list-inline-item position-relative">
                <button
                    type="button"
                    className="open-btn mb15 dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                >
                    For Sale <i className="fa fa-angle-down ms-2" />
                </button>
                <div className="dropdown-menu">
                    <div className="widget-wrapper bdrb1 pb25 mb0 pl20">
                    <h6 className="list-title">Listing Status</h6>
                    <div className="radio-element">
                        <ListingStatus filterFunctions={filterFunctions} />
                    </div>
                    </div>
                    <div className="text-end mt10 pr10">
                    <button
                        type="button"
                        className="done-btn ud-btn btn-thm drop_btn"
                    >
                        Done
                    </button>
                    </div>
                </div>
                </li> */}
                {/* End li Listing Status */}

                <li className="list-inline-item position-relative">
                <button
                    type="button"
                    className="open-btn mb15 dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                >
                    Type de propriétés <i className="fa fa-angle-down ms-2" />
                </button>
                <div className="dropdown-menu">
                    <div className="widget-wrapper bdrb1 pb25 mb0 pl20">
                    <h6 className="list-title">Type de propriétés</h6>
                    <div className="checkbox-style1">

                        <label className="custom_checkbox"  >
                            All
                            <input type="checkbox"
                            checked={!filterFunctions?.propertyTypes.length}
                            onChange={(e=>{filterFunctions?.setPropertyTypes([])})}
                        />
                            <span className="checkmark" />
                            </label>
                        {propertyTypes00?.map((option, index) => (
                            <label className="custom_checkbox" key={index} >
                            {option.name}
                            <input type="checkbox"
                            checked={filterFunctions?.propertyTypes.includes(option.name)}
                            onChange={(e=>{filterFunctions.handlepropertyTypes(option.name)})}
                        />
                            <span className="checkmark" />
                            </label>
                        ))}


                        {/* <PropertyType filterFunctions={filterFunctions} propertyTypes00={propertyTypes00} /> */}
                    </div>
                    </div>
                    {/* <div className="text-end mt10 pr10">
                    <button
                        type="button"
                        className="done-btn ud-btn btn-thm dropdown-toggle"
                    >
                        Done
                    </button>
                    </div> */}
                </div>
                </li>
                {/* End li Property Type */}

                <li className="list-inline-item position-relative">
                <button
                    type="button"
                    className="open-btn mb15 dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                >
                    Prix <i className="fa fa-angle-down ms-2" />
                </button>

                <div className="dropdown-menu dd3">
                    <div className="widget-wrapper bdrb1 pb25 mb0 pl20 pr20">
                    <h6 className="list-title">Fourchette de prix</h6>
                    {/* Range Slider Desktop Version */}
                    <div className="range-slider-style1">
                        <PriceRange filterFunctions={filterFunctions}/>
                    </div>
                    </div>
                    {/* <div className="text-end mt10 pr10">
                    <button
                        type="button"
                        className="done-btn ud-btn btn-thm drop_btn3"
                    >
                        Done
                    </button>
                    </div> */}
                </div>
                </li>
                {/* End li Price */}

                <li className="list-inline-item position-relative">
                <button
                    type="button"
                    className="open-btn mb15 dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                >
                    Chambres / Salles de bain <i className="fa fa-angle-down ms-2" />
                </button>
                <div className="dropdown-menu dd4 pb20">
                    <div className="widget-wrapper pl20 pr20">
                    <h6 className="list-title">Chambres</h6>
                    <div className="d-flex">
                        <Bedroom filterFunctions={filterFunctions}/>
                    </div>
                    </div>

                    <div className="widget-wrapper bdrb1 pb25 mb0 pl20 pr20">
                    <h6 className="list-title">Salles de bain</h6>
                    <div className="d-flex">
                        <Bathroom filterFunctions={filterFunctions}/>
                    </div>
                    </div>
                {/*  <div className="text-end mt10 pr10">
                    <button
                        type="button"
                        className="done-btn ud-btn btn-thm drop_btn4"
                    >
                        Done
                    </button>
                    </div> */}
                </div>
                </li>
                {/* End bed and bathroom check */}

                <li className="list-inline-item">
                {/* Advance Features modal trigger */}
                <button
                    type="button"
                    className="open-btn mb15"
                    data-bs-toggle="modal"
                    data-bs-target="#advanceSeachModal"
                >
                    <i className="flaticon-settings me-2" /> Filtre avancé
                </button>
                </li>
            </ul>
            </div>
        </div>
        {/* End .col-9 */}

        <div className="col-xl-3">
            <div className="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
            <div className="pcs_dropdown pr10 d-flex align-items-center">
                <span style={{ minWidth: "60px" }}>Trier par</span>
                <select className="form-select" onChange={(e)=>setCurrentSortingOption && setCurrentSortingOption(e.target.value)} >
                {/* <option>Newest</option>
                <option>Best Seller</option> */}
                {/* <option>Best Match</option> */}
                <option>Prix Bas</option>
                <option>Prix Haut</option>
                </select>
            </div>
            <div className={`pl15 pr15 bdrl1 bdrr1 d-none d-md-block  cursor ${!colstyle? 'menuActive':'#' } `}    onClick={()=>setColstyle(false)}>
                Grille
            </div>
            <div className={`pl15 d-none d-md-block  cursor ${colstyle? 'menuActive':'#' }`}   onClick={()=>setColstyle(true)}>
                Liste
            </div>
            </div>
        </div>
        {/* End .col-3 */}
        </>
    );
};

export default TopFilterBar;
