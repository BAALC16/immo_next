"use client";
import {useState, useEffect} from 'react';
import Explore from "@/components/common/Explore";
//import Footer from "@/components/home/home-v5/footer";
import Footer from "@/components/home/home-v9/footer";
import MobileMenu from "@/components/common/mobile-menu";
import FeaturedListings from "@/components/home/home-v5/FeatuerdListings";
import Header from "@/components/home/home-v5/Header";
import Partner from "@/components/common/Partner";
import PropertiesByCities from "@/components/home/home-v5/PropertiesByCities";
//import Testimonial from "@/components/home/home-v5/Testimonial";
import FilterWithProperties from "@/components/home/home-v5/filter-with-property";
import Blog from "@/components/common/Blog";
import Hero from "@/components/home/home-v5/Hero";
import ApartmentTypes from "@/components/home/home-v5/ApartmentTypes";
//import Cta from "@/components/home/home-v5/Cta";
import Cta from "@/components/home/home-v9/Cta";
import Link from "next/link";
import PropertyListing from "@/components/home/home-v5/PropertyListing";
import ExploreCities from "@/components/home/home-v2/ExploreCities";
import WhyChoose from "@/components/home/home-v3/why-choose";
import Testimonial from "@/components/home/home-v3/Testimonial";
import Funfact from "@/components/home/home-v3/Funfact";
import Image from "next/image";
import moment from 'moment';
import frLocale from 'moment/locale/fr';
import AdvanceFilterModal from '@/components/common/advance-filter-two'
import FilterContent from "@/components/home/home-v5/filter-with-property/FilterContent";

/* export const metadata = {
  title: "MCK IMMO || L'Outil Digital de Gestion Immobili&egrave;re en C&ocirc;te-d'Ivoire",
}; */

const Home_V5 = (data) => {

	const [properties, setProperties] = useState([]);
	const [propertyTypes, setPropertyTypes] = useState([]);
	const [propertyCities, setPropertyCities] = useState([]);
	const [propertyFeatures, setPropertyFeatures] = useState([]);
	const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        queries();
		moment.locale('fr', frLocale);
    }, [])
	  
    const queries = () => {
        fetch(process.env.appUrl+'api/home')
        .then((res) => res.json())
        .then((data) => {
			setProperties(data.data.properties);
			setPropertyTypes(data.data.propertyTypes);
			setPropertyCities(data.data.propertyCities);
			setPropertyFeatures(data.data.propertyFeatures);
			setBlogs(data.data.blogs);

        })
    } 	

	//console.log("myBlog", blogs);
	return (
		<>
			{/* Main Header Nav */}
			<Header />
			{/* End Main Header Nav */}

			{/* Mobile Nav  */}
			<MobileMenu />
			{/* End Mobile Nav  */}

			{/* Hero Slide */}
			<div className="banner-wrapper position-relative">
				<section className="thumbimg-countnumber-carousel p-0">
				<Hero properties={ properties }/>
				</section>
			</div>
			{/* Edn Hero Slide */}

			{/* Filter with properties */}
			<section className="pt-0 pb110 bgc-f7 pb50-md">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">

					<div className="inner-banner-style1 text-center">
						<FilterContent propertyTypes={propertyTypes} propertyCities={propertyCities}/>
					</div>
					{/* End Hero content */}

					{/* <!-- Advance Feature Modal Start --> */}
					<div className="advance-feature-modal">
						<div
						className="modal fade"
						id="advanceSeachModal"
						tabIndex={-1}
						aria-labelledby="advanceSeachModalLabel"
						aria-hidden="true"
						>
						<AdvanceFilterModal propertyTypes={propertyTypes} propertyFeatures={propertyFeatures} propertyCities={propertyCities}/>
						</div>
					</div>
					{/* <FilterWithProperties propertyTypes={propertyTypes} propertyFeatures={propertyFeatures} propertyCities={propertyCities}/> */}
					</div>
				</div>
				{/* End .row */}
				</div>
				{/* End .container */}
			</section>
			{/* End Filter with properties */}

			{/* Discover Our Featured Listings */}
			<section className="pt-0 pb110 bgc-f7 pb50-md">
				<div className="container">
				<div className="row align-items-center" data-aos="fade-up">
					<div className="col-lg-9">
					<div className="main-title2">
						<h2 className="title">Découvrez les propriétés populaires</h2>
						<p className="paragraph">
						Aliquam lacinia diam quis lacus euismod
						</p>
					</div>
					</div>
					<div className="col-lg-3">
					<div className="text-start text-lg-end mb-3">
						<Link className="ud-btn2" href={`/proprietes`}>
						Voir toutes les propriétés
						<i className="fal fa-arrow-right-long" />
						</Link>
					</div>
					</div>
				</div>
				{/* End header */}

				<div className="row">
					<div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
					<div className="feature-listing-slider">
						<FeaturedListings properties={ properties } />
					</div>
					</div>
				</div>
				</div>
			</section>
			{/* End Discover Our Featured Listings */}

			{/* Explore Apartment Types cities */}
			<section className="pb90 pb30-md">
				<div className="container">
				<div className="row" data-aos="fade-up" data-aos-delay="0">
					<div className="col-lg-6 mx-auto">
					<div className="main-title2 text-center">
						<h2 className="title">Explorez par type de propriétés</h2>
						<p className="paragraph">
						Get some Inspirations from 1800+ skills
						</p>
					</div>
					</div>
				</div>
				{/* End .row */}

				<div className="row" data-aos="fade-up" data-aos-delay="300">
					<ApartmentTypes propertyTypes={ propertyTypes }/> 
				</div>
				{/* End .row */}
				</div>
			</section>
			{/* End Explore Apartment Types cities */}

			{/* Explore Apartment */}
			<section className="pb90 pb30-md bgc-thm-light">
				<div className="container">
				<div className="row">
					<div
					className="col-lg-6 m-auto wow fadeInUp"
					data-wow-delay="300ms"
					>
					<div className="main-title text-center">
						<h2 className="title">De bonnes affaires chez MCK IMMO</h2>
						<p className="paragraph">
						Aliquam lacinia diam quis lacus euismod
						</p>
					</div>
					</div>
				</div>
				{/* End .row */}

				<div className="row">
					<Explore />
				</div>
				</div>
			</section>
			{/* End Explore Apartment */}

			{/* Explore property-city */}
			<section className="pb40-md pb90">
				<div className="container">
				<div
					className="row align-items-center"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<div className="col-lg-8">
					<div className="main-title2">
						<h2 className="title">Propriétés par commune</h2>
						<p className="paragraph">
						Aliquam lacinia diam quis lacus euismod
						</p>
					</div>
					</div>
					{/* End col-lg-9 */}

					<div className="col-lg-4">
					<div className="text-start text-lg-end mb-3">
						<div className="row align-items-center justify-content-center">
							<div className="col-auto">
							<button className="cities_prev__active swiper_button">
								<i className="far fa-arrow-left-long" />
							</button>
							</div>
							{/* End prev */}

							<div className="col-auto">
							<div className="pagination swiper--pagination cities_pagination__active" />
							</div>
							{/* End pagination */}

							<div className="col-auto">
							<button className="cities_next__active swiper_button">
								<i className="far fa-arrow-right-long" />
							</button>
							</div>
							{/* End Next */}
						</div>
					</div>
					</div>
					{/* End col-lg-3 */}
				</div>
				{/* End .row */}

				<div className="row">
					<div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
						<div className="property-city-slider">
							<ExploreCities propertyCities={ propertyCities } /> 
						</div>
					</div>
				</div>
				{/* End .row */}
				</div>
			</section>
			{/* End Explore property-city */}
			{/* Why Chose Us */}
			<section>
				<div className="container">
				<div
					className="row align-items-md-center"
					data-aos="fade-left"
					data-aos-delay="100"
				>
					<WhyChoose />
				</div>
				</div>
			</section>
			{/* End Why Chose Us */}

			{/*People Love Living with Realton */}
			<section className="pb30-md bgc-f7">
				<div className="container">
				<div className="row align-items-md-center">
					<div
					className="col-lg-6 mb30-md wow fadeInUp"
					data-wow-delay="100ms"
					>
					<div className="main-title">
						<h2 className="title">Nos retours clients</h2>
						<p className="paragraph">
						Aliquam lacinia diam quis lacus euismod
						</p>
					</div>
					<div className="row">
						<Funfact />
					</div>
					</div>
					{/* End .col */}

					<div className="col-lg-6 col-xl-4 offset-xl-2">
					<div
						className="testimonial-slider2"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<Testimonial />
					</div>
					</div>
					{/* End .col */}
				</div>
				</div>
			</section>
			{/* End People Love Living with Realton */}


			{/* Explore Blog */}
			<section className="pb90 pb30-md">
				<div className="container">
				<div className="row">
					<div className="col-lg-6 m-auto" data-aos="fade-up">
					<div className="main-title text-start text-md-center">
						<h2 className="title">Depuis Notre Blog</h2>
						<p className="paragraph">
						Aliquam lacinia diam quis lacus euismod
						</p>
					</div>
					</div>
				</div>
				{/* End .row */}

				<div className="row" data-aos="fade-up" data-aos-delay="300">
					{/* <Blog blogs={ blogs }/> */}
					{blogs.map((blog) => (
						<div className="col-sm-6 col-lg-4" key={blog.id}>
						<div className="blog-style1">
							<div className="blog-img">
							<Image
								width={386}
								height={271}
								className="w-100 h-100 cover"
								src={process.env.appUrl+'storage/' + blog.image}
								alt="blog"
							/>
							</div>
							<div className="blog-content">
							<div className="date">
								<span className="month">{ moment(blog.created_at).format('MMMM') }</span>
								<span className="day">{ moment(blog.created_at).format('D') }</span>
							</div>
							<a className="tag" href="#">
								{blog.tag}
							</a>
							<h6 className="title mt-1">
								<Link href="#">{blog.title}</Link>
							</h6>
							</div>
						</div>
						</div>
					))}
				</div>
				{/* End .row */}
				</div>
			</section>
			{/* Explore Blog */}

			{/* Our Partners */}
			<section className="our-partners pt0">
				<div className="container">
				<div className="row">
					<div className="col-lg-12" data-aos="fade-up">
					<div className="main-title text-center">
						<h6>Trusted by the world’s best</h6>
					</div>
					</div>
					<div className="col-lg-12 text-center">
					<div
						className="dots_none nav_none"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<Partner />
					</div>
					</div>
				</div>
				</div>
			</section>
			{/* End Our Partners */}

			{/* Our CTA */}
			<Cta />
			{/* Our End CTA */}

			{/* Start Our Footer */}
			<section className="footer-style1 at-home4 pt60 pb-0">
				<Footer />
			</section>
			{/* End Our Footer */}
		</>
	);
};

export default Home_V5;
