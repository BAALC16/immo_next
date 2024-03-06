"use client";
import React from "react";
import {parseISO, format} from 'date-fns';
import {useState, useEffect} from 'react';

const ProfessionalInfo = ({agent}) => {

    //const date = parseISO(agent.created_at);
   //console.log("2024-03-03T01:39:41.000000Z");

    const professionalInfoData = [
      //{ label: "Broker address", content: "House on the Northridge" },
      { label: "Bureau", content: agent.telephone },
      { label: "Mobile", content: agent.mobile },
      { label: "Fax", content: "(484) 524-1023" },
      { label: "Site web", content: agent.site_web },
      //{ label: "Membre depuis", content: format(parseISO(agent.created_at), 'yyy') },
    ];

    return (
        <div className="widget-wrapper mb-0">
        <h6 className="title fz17 mb35">Informations Professionnelles</h6>
        {professionalInfoData.map((info, index) => (
            <div
            key={index}
            className="list-news-style d-flex align-items-center justify-content-between mb10"
            >
            <div className="flex-shrink-0">
                <h6 className="fz14 mb-0">{info.label}</h6>
            </div>
            <div className="news-content flex-shrink-1 ms-3 text-end">
                <p className="text mb-0 fz14">{info.content}</p>
            </div>
            </div>
        ))}
        </div>
    );
};

export default ProfessionalInfo;
