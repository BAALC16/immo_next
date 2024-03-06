import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Services",
      links: [
        { label: "Conception de plans de maison", href: "#" },
        { label: "Travaux de Rénovation", href: "#" },
        { label: "Suivi de Chantier", href: "#" },
        { label: "Déménagement", href: "#" },
      ],
    },
    {
      title: "Liens utiles",
      links: [
        { label: "Agents", href: "#" },
        /* { label: "Privacy Policy", href: "#" },
        { label: "Pricing Plans", href: "#" },
        { label: "Our Services", href: "#" }, */
        { label: "Contact", href: "#" },
        /* { label: "Careers", href: "#" }, */
        { label: "FAQs", href: "#" },
      ],
    },
    {
      title: "Découvrir",
      links: [
        { label: "Cocody", href: "#" },
        { label: "Yopougon", href: "#" },
        { label: "Marcory", href: "#" },
        { label: "Adjamé", href: "#" },
      ],
    },
  ];

  return (
    <>
      {menuSections.map((section, index) => (
        <div className="col-auto" key={index}>
          <div className="link-style1 light-style at-home9 mb-3">
            <h6 className="mb25">{section.title}</h6>
            <div className="link-list">
              {section.links.map((link, linkIndex) => (
                <a href={link.href} key={linkIndex}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuWidget;
