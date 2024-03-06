import listings from "@/data/listings";
import React from "react";


const OverView = ({id, property}) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];

  console.log("fdgdgd", property);
  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Chambres",
      value: property.bedroom,
    },
    {
      icon: "flaticon-shower",
      label: "Salles de bain",
      value: property.bathroom,
    },
    {
      icon: "flaticon-event",
      label: "Année de construction",
      value: 2024,
    },
    {
      icon: "flaticon-garage",
      label: "Garage",
      value: "2",
      xs: true,
    },
    {
      icon: "flaticon-expand",
      label: "Superficie",
      value: property.area,
      xs: true,
    },
    {
      icon: "flaticon-home-1",
      label: "Type de propriété",
      value: property.property_type?.name,
    },
  ];
  
 
  return (
    <>
      {overviewData.map((item, index) => (
        <div
          key={index}
          className={`col-sm-6 col-lg-4 ${item.xs ? "mb25-xs" : "mb25"}`}
        >
          <div className="overview-element d-flex align-items-center">
            <span className={`icon ${item.icon}`} />
            <div className="ml15">
              <h6 className="mb-0">{item.label}</h6>
              <p className="text mb-0 fz15">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OverView;
