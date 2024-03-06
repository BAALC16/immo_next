import React from "react";

const ContactInfo = () => {
  const contactInfo = [
    {
      id: 1,
      //title: "Total Free Customer Care",
      phone: "+(0) 123 050 945 02",
      phoneHref: "tel:+012305094502",
    },
    {
      id: 2,
      //title: "Besoin d'assistance?",
      email: "support@mck-immo.com",
      emailHref: "mailto:support@mck-immo.com",
    },
  ];

  return (
    <>
      <p className="info-title dark-color" style={{ textAlign: "center" }}>Besoin d&rsquo;assistance ?</p>
      {contactInfo.map((info) => (
        <div className="col-auto" key={info.id}>
          <div className="contact-info">
            <p className="info-title dark-color">{info.title}</p>
            {info.phone && (
              <h6 className="info-phone dark-color">
                <a href={info.phoneHref}>{info.phone}</a>
              </h6>
            )}
            {info.email && (
              <h6 className="info-mail dark-color">
                <a href={info.emailHref}>{info.email}</a>
              </h6>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
