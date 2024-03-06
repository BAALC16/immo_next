"use client";
import {useState, useEffect} from 'react';
import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";


const NearbySimilarProperty = (props) => {

    const [listings, setListings] = useState([]);

    useEffect(() => {
        setListings(props.properties);
    }, [props.properties])

    return (
        <>
        <Swiper
            spaceBetween={30}
            modules={[Navigation, Pagination]}
            navigation={{
            nextEl: ".featured-next__active",
            prevEl: ".featured-prev__active",
            }}
            pagination={{
            el: ".featured-pagination__active",
            clickable: true,
            }}
            slidesPerView={1}
            breakpoints={{
            300: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            }}
        >
            {listings.slice(0, 5).map((listing) => (
            <SwiperSlide key={listing.id}>
                <div className="item">
                <div className="listing-style1">
                    <div className="list-thumb">
                    <Image
                        width={382}
                        height={248}
                        className="w-100 h-100 cover"
                        src={ process.env.appUrl+'storage/property/floor/' + listing.floor_plan}
                        alt="listings"
                    />
                    <div className="sale-sticker-wrap">
                        {listing.purpose == "location" ? (
                        <div className="list-tag rounded-0 fz12">
                            LOCATION
                        </div>
                        ) : (
                            <div className="list-tag rounded-0 fz12">
                            VENTE
                            </div>
                        )
                        }
                    </div>
                    <div className="list-price">
                        {listing.price} {/* / <span>mo</span> */}
                    </div>
                    </div>
                    <div className="list-content">
                        <h6 className="list-title">
                            <Link href={`/proprietes/${listing.cityname?.slug}/${listing.property_type?.slug}/${listing.purpose}/${listing.id}/${listing.slug}`}>{listing.title}</Link>
                        </h6>
                        <p className="list-text">{listing.location}</p>
                        <div className="list-meta d-flex align-items-center">
                            <a href="#">
                            <span className="flaticon-bed" /> {listing.bedroom} Chambres
                            </a>
                            <a href="#">
                            <span className="flaticon-shower" /> {listing.bathroom} Salles de bain
                            </a>
                            <a href="#">
                            <span className="flaticon-expand" /> {listing.area} m2
                            </a>
                        </div>
                        {/* <hr className="mt-2 mb-2" />
                        <div className="list-meta2 d-flex justify-content-between align-items-center">
                            <span className="for-what">For Rent</span>
                            <div className="icons d-flex align-items-center">
                            <a href="#">
                                <span className="flaticon-fullscreen" />
                            </a>
                            <a href="#">
                                <span className="flaticon-new-tab" />
                            </a>
                            <a href="#">
                                <span className="flaticon-like" />
                            </a>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </>
    );
};

export default NearbySimilarProperty;
