"use client";
//import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {useState, useEffect} from 'react';
import "swiper/swiper-bundle.min.css";


const FeaturedListings = (props) => { 

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
        {listings.slice(0, 4).map((listing) => (
          <SwiperSlide key={listing.id}>
            <div className="item">
              <div className="listing-style7 mb60">
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
                        <div className="list-tag2 rounded-0 fz12">
                          VENTE
                        </div>
                      )
                    }
                  </div>

                  <div className="list-meta">
                    <a href="#" className="mr5">
                      <span className="flaticon-fullscreen" />
                    </a>
                    <a href="#" className="mr5">
                      <span className="flaticon-new-tab" />
                    </a>
                    <a href="#">
                      <span className="flaticon-like" />
                    </a>
                  </div>
                </div>
                <div className="list-content">
                  <h6 className="list-title">
                    <Link href={`/proprietes/${listing.cityname.slug}/${listing.property_type.slug}/${listing.purpose}/${listing.id}/${listing.slug}`}>{listing.title}</Link>
                  </h6>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="list-price">
                    {new Intl.NumberFormat('en-DE').format(listing.price)} FCFA {listing.purpose == "location" && <span>/ mois</span> }
                    </div>
                    <div className="list-meta2 d-flex align-items-center">
                      <a href="#" className="mr10">
                        <span className="flaticon-bed mr5" /> {listing.bedroom}
                      </a>
                      <a href="#" className="mr10">
                        <span className="flaticon-shower mr5" /> {listing.bathroom}
                      </a>
                      <a href="#">
                        <span className="flaticon-expand" /> {listing.area}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="row align-items-center justify-content-center"> 
        <div className="col-auto">
          <button className="featured-prev__active swiper_button">
            <i className="far fa-arrow-left-long" />
          </button>
        </div>
        {/* End prev */}

        <div className="col-auto">
          <div className="pagination swiper--pagination featured-pagination__active" />
        </div>
        {/* End pagination */}

        <div className="col-auto">
          <button className="featured-next__active swiper_button">
            <i className="far fa-arrow-right-long" />
          </button>
        </div>
        {/* End Next */}
      </div>
      {/* End .col for navigation and pagination */}
    </>
  );
};

export default FeaturedListings;
