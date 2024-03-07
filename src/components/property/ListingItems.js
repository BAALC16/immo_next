
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListingItems = ({data}) => {

    console.log("data",data);
    return (
        <>
        {data?.map((listing) => (
            <div className="col-md-6" key={listing.id}> 
            <div className="listing-style1">
                <div className="list-thumb">
                <Image
                    width={382}
                    height={248}
                    className="w-100 h-100 cover"
                    src={process.env.appUrl+'storage/property/floor/' + listing.floor_plan}
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
                    <Link href={`/single-v1/${listing.id}`}>{listing.title}</Link>
                </h6>
                <p className="list-text">{listing.location}</p>
                <div className="list-meta d-flex align-items-center">
                    <a href="#">
                    <span className="flaticon-bed" /> {listing.bedroom} chambres
                    </a>
                    <a href="#">
                    <span className="flaticon-shower" /> {listing.bathroom} salles de bain
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
        ))}
        </>
    );
};

export default ListingItems;
