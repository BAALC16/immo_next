"use client";

import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({ data, colstyle }) => {
  return (
    <>
      {data.map((listing) => (
        <div
          className={` ${
            colstyle ? "col-sm-12 col-lg-6" : "col-sm-6 col-lg-4" 
          }  `}
          key={listing.id}
        >
          <div
            className={
              colstyle
                ? "listing-style1 listCustom listing-type"
                : "listing-style1"
            }
            >
            <div className="list-thumb">
              <Image
                width={382}
                height={248}
                className="w-100  cover"
                style={{ height: "230px" }} 
                src={listing.image || 'http://127.0.0.1:8000/storage/property/floor/' + listing.floor_plan} 
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
                {new Intl.NumberFormat('en-DE').format(listing.price)} FCFA {listing.purpose == "location" && <span>/ mois</span>}
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link href={`/propriete/${listing.cityname?.slug}/${listing.property_type?.slug}/${listing.purpose}/${listing.id}/${listing.slug}`}>{listing.title}</Link>
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
              <hr className="mt-2 mb-2" />
              <div className="list-meta2 d-flex justify-content-between align-items-center">
                <span className="for-what">{/* Pour achat */}</span>
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
