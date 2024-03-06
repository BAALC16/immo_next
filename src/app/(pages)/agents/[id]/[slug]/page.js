"use client";
import {useState, useEffect} from 'react';
import DefaultHeader from "@/components/common/DefaultHeader";
//import Footer from "@/components/common/default-footer";
import Footer from "@/components/home/home-v9/footer";
import MobileMenu from "@/components/common/mobile-menu";
import FormContact from "@/components/property/FormContact";

import ProfessionalInfo from "@/components/property/ProfessionalInfo";
import ReviewBoxForm from "@/components/property/ReviewBoxForm";
import ListingItemsContainer from "@/components/property/agency-single/ListingItems";

import SingleAgentCta from "@/components/property/agent-single/SingleAgentCta";
import AllReviews from "@/components/property/reviews";
import Image from "next/image";

import React from "react";

/* export const metadata = {
  title: "Agent Single || Homez - Real Estate NextJS Template",
}; */

const AgentSingle = ({params}) => {

    const [agent, setAgent] = useState([]);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        queries();
		
    }, [])
	  
    const queries = () => {
        fetch('http://127.0.0.3:8003/api/v2/agents/'+params.id)
        .then((res) => res.json())
        .then((data) => {
            setAgent(data.data.agent);
            setProperties(data.data.properties);
        })
    } 

  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Agent Single Section Area */}
      <section className="agent-single pt60">
        <div className="cta-agent bgc-thm-light mx-auto maxw1600 pt60 pb60 bdrs12 position-relative mx20-lg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7">
                <SingleAgentCta agent={agent}/>
                <div className="img-box-11 position-relative d-none d-xl-block">
                  <Image
                    width={120}
                    height={120}
                    className="img-1 spin-right"
                    src="/images/about/element-3.png"
                    alt="agents"
                  />
                  <Image
                    width={41}
                    height={11}
                    className="img-2 bounce-x"
                    src="/images/about/element-5.png"
                    alt="agents"
                  />
                  <Image
                    width={57}
                    height={49}
                    className="img-3 bounce-y"
                    src="/images/about/element-7.png"
                    alt="agents"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End cta-agent */}

        <div className="container">
          <div className="row wow fadeInUp" data-aos-delay="300">
            <div className="col-lg-8 pr40 pr20-lg">
              <div className="row">
                <div className="col-lg-12">
                  <div className="agent-single-details mt30 pb30 bdrb1">
                    <h6 className="fz17 mb30">A propos de l'agent</h6>
                    <p className="text">
                      {agent.introduction}
                    </p>
                    {/* <div className="agent-single-accordion">
                      <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item">
                          <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                            style={{}}
                          >
                            <div className="accordion-body p-0">
                              <p className="text">
                                Placeholder content for this accordion, which is
                                intended to demonstrate the class. This is the
                                first item&apos;s accordion body you get
                                groundbreaking performance and amazing battery
                                life. Add to that a stunning Liquid Retina XDR
                                display, the best camera and audio ever in a Mac
                                notebook, and all the ports you need.
                              </p>
                            </div>
                          </div>
                          <h2
                            className="accordion-header"
                            id="flush-headingOne"
                          >
                            <button
                              className="accordion-button p-0 collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              Show more
                            </button>
                          </h2>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* End .row */}

              <ListingItemsContainer properties={properties}/>
              <div className="row">
                <div className="col-lg-12">
                  <AllReviews />
                  {/* End  AllReviews */}

                  <div className="bsp_reveiw_wrt">
                    <h6 className="fz17">Laisser un avis</h6>
                    <ReviewBoxForm />
                  </div>
                  {/* End ReviewBoxForm */}
                </div>
              </div>
            </div>
            {/* End .col-lg-8 */}

            <div className="col-lg-4">
              <div className="agent-single-form home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
                <h4 className="form-title mb25">Formulaire de contact</h4>
                <FormContact />
              </div>
              <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs12 p30 mt30">
                <ProfessionalInfo agent={agent}/>
              </div>
            </div>
            {/* End .col-lg-4 */}
          </div>
        </div>
      </section>
      {/* End Agent Single Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home4 pt60 pb-0">
            <Footer />
        </section>
      {/* End Our Footer */}
    </>
  );
};

export default AgentSingle;
