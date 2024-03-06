"use client";
import {useState, useEffect} from 'react';
import DefaultHeader from "@/components/common/DefaultHeader";
//import Footer from "@/components/common/default-footer";
import Footer from "@/components/home/home-v9/footer";
import MobileMenu from "@/components/common/mobile-menu";
import EnergyClass from "@/components/property/property-single-style/common/EnergyClass";
import FloorPlans from "@/components/property/property-single-style/common/FloorPlans";
import HomeValueChart from "@/components/property/property-single-style/common/HomeValueChart";
import InfoWithForm from "@/components/property/property-single-style/common/more-info";
import NearbySimilarProperty from "@/components/property/property-single-style/common/NearbySimilarProperty";
import OverView from "@/components/property/property-single-style/common/OverView";
import PropertyAddress from "@/components/property/property-single-style/common/PropertyAddress";
import PropertyDetails from "@/components/property/property-single-style/common/PropertyDetails";
import PropertyFeaturesAminites from "@/components/property/property-single-style/common/PropertyFeaturesAminites";
import PropertyHeader from "@/components/property/property-single-style/single-v4/PropertyHeader";
import PropertyNearby from "@/components/property/property-single-style/common/PropertyNearby";
import PropertyVideo from "@/components/property/property-single-style/common/PropertyVideo";
import PropertyViews from "@/components/property/property-single-style/common/property-view";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import ReviewBoxForm from "@/components/property/property-single-style/common/ReviewBoxForm";
import VirtualTour360 from "@/components/property/property-single-style/common/VirtualTour360";
import AllReviews from "@/components/property/property-single-style/common/reviews";
import ContactWithAgent from "@/components/property/property-single-style/single-v2/ContactWithAgent";
import ScheduleTour from "@/components/property/property-single-style/sidebar/ScheduleTour";
import PropertyGallery from "@/components/property/property-single-style/single-v4/property-gallery";
import MortgageCalculator from "@/components/property/property-single-style/common/MortgageCalculator";
import WalkScore from "@/components/property/property-single-style/common/WalkScore";
import ScheduleForm from "@/components/property/property-single-style/single-v2/ScheduleForm";
import dynamic from 'next/dynamic';
/* export const metadata = {
  title: "Property Single V4 || Homez - Real Estate NextJS Template",
}; */

const SingleV4 = ({params}) => {

    const [features, setFeatures] = useState([]);
    const [property, setProperty] = useState([]);
    const [properties, setProperties] = useState([]);
    const featuresAmenitiesData = [];

    useEffect(() => {
        queries();
		
    }, [])
	  
    const queries = () => {
        fetch(process.env.appUrl+'api/properties/'+params.id)
        .then((res) => res.json())
        .then((data) => {
            setProperty(data.data.property);
            setProperties(data.data.properties); 
            setFeatures(data.data.property.features);
        })
    } 

    let nbre;
    let nbreF = 0;
    let i = 1;
    let j = 1;
    let k = 1;
    let col1 = [];
    let col2 = [];
    let col3 = [];

    features.forEach(element => {
        let label = element.name;
        switch(i){
            case 1 : col1.push(label);
            break;
            case 2 : col2.push(label);
            break;
            case 3 : col3.push(label);
            break;
        }
        
        if(i == 3){
            i = 0;
        }
        
        i++;
    
    });
   /*  if((features.length % 3 ) == 0){
        nbre = features.length / 3;
    }else{
        nbre = (features.length - (features.length % 3)) / 3;
        nbreF = nbre + features.length % 3;
    }
    
    features.forEach(element => {
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
    
    }); */
    
    featuresAmenitiesData.push(col1);
    featuresAmenitiesData.push(col2);
    featuresAmenitiesData.push(col3); 



  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Property Slider Gallery */}
      <section className="pt20 pb60 bgc-white">
        <PropertyGallery floor={property.floor_plan} gallery={property.gallery} />
      </section>
      {/* End Property Slider Gallery */}

      {/* Property All Single V4 */}
      <section className="pt0 pb90 bgc-white">
        <div className="container">
          <div className="row">
            <PropertyHeader property={property} />
          </div>
          {/* End .row */}

          <div className="row wrap">
            <div className="col-lg-8">
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Overview</h4>
                <div className="row">
                  <OverView property={property} />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Description</h4>
                <ProperytyDescriptions description={property.description}/>
                {/* End property description */}

               {/*  <h4 className="title fz17 mb30 mt50">Property Details</h4>
                <div className="row">
                  <PropertyDetails />
                </div> */}
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                {/* <h4 className="title fz17 mb30 mt30">Address</h4> */}
                <div className="row">
                  <PropertyAddress />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Commodités</h4>
                <div className="row">
                    {/* <PropertyFeaturesAminites propertyFeatures={property.features} /> */}
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
                    </div>
              </div>
              {/* End .ps-widget */}

             {/*  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Energy Class</h4>
                <div className="row">
                  <EnergyClass />
                </div>
              </div> */}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Floor Plans</h4>
                <div className="row">
                  <div className="col-md-12">
                    <div className="accordion-style1 style2">
                      <FloorPlans />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 ">
                    <h4 className="title fz17 mb30">Video</h4>
                    <div className="row">
                    <PropertyVideo />
                    </div>
                </div>
                {/* End .ps-widget */}

                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30">360° Tour virtuelle</h4>
                    <div className="row">
                    <VirtualTour360 />
                    </div>
                </div>
                {/* End .ps-widget */}

                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <h4 className="title fz17 mb30">Qu’est-ce qui est à proximité?</h4>
                    <div className="row">
                    <PropertyNearby />
                    </div>
                </div>
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Walkscore</h4>
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="fw400 mb20">
                      10425 Tabor St Los Angeles CA 90034 USA
                    </h4>
                    <WalkScore />
                  </div>
                </div>
              </div> */}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Mortgage Calculator</h4>
                <div className="row">
                  <MortgageCalculator />
                </div>
              </div> */}
              {/* End .ps-widget */}

             {/*  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <div className="row">
                  <PropertyViews />
                </div>
              </div> */}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Home Value</h4>
                <div className="row">
                  <HomeValueChart />
                </div>
              </div> */}
              {/* End .ps-widget */}

             {/*  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Get More Information</h4>
                <InfoWithForm />
              </div> */}
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <div className="row">
                    {/* <AllComments /> */} 
                    <AllReviews />
                    </div>
                </div>
                {/* End .ps-widget */}

                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Laisser un commentaire</h4>
                <div className="row">
                    <ReviewBoxForm />
                    </div>
                </div>
                {/* End .ps-widget */}
            </div>
            {/* End .col-8 */}

            <div className="col-lg-4">
              <div className="column">
                <div className="default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
                  <h6 className="title fz17 mb30">Obtenir des informations</h6>
                  <ContactWithAgent agent={property.user}/>
                  <ScheduleForm />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row mt30 align-items-center justify-content-between">
            <div className="col-auto">
              <div className="main-title">
                <h2 className="title">Découvrez les propriétés populaires</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
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
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div className="property-city-slider">
                <NearbySimilarProperty properties={ properties }/>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Property All Single V4  */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

//export default SingleV4;
export default dynamic(() => Promise.resolve(SingleV4), { ssr: false });
