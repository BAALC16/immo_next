import Image from "next/image";
import React from "react";

const accentsMap = new Map([
  ["A", "Á|À|Ã|Â|Ä"],
  ["a", "á|à|ã|â|ä"],
  ["E", "É|È|Ê|Ë"],
  ["e", "é|è|ê|ë"],
  ["I", "Í|Ì|Î|Ï"],
  ["i", "í|ì|î|ï"],
  ["O", "Ó|Ò|Ô|Õ|Ö"],
  ["o", "ó|ò|ô|õ|ö"],
  ["U", "Ú|Ù|Û|Ü"],
  ["u", "ú|ù|û|ü"],
  ["C", "Ç"],
  ["c", "ç"],
  ["N", "Ñ"],
  ["n", "ñ"]
]);
const reducer = (acc, [key]) =>
acc?.replace(new RegExp(accentsMap.get(key), "g"), key);

export const removeAccents = (text) => [...accentsMap].reduce(reducer, text);

const ContactWithAgent = ({agent}) => {

  return (
    <>
      <div className="agent-single d-sm-flex align-items-center pb25">
        <div className="single-img mb30-sm">
          <Image
            width={90}
            height={90}
            className="w90"
            src={ process.env.appUrl+ 'storage/' + agent?.photo}
            alt="avatar"
          />
        </div>
        <div className="single-contant ml20 ml0-xs">
          <h6 className="title mb-1">{agent?.nom} {agent?.prenoms}</h6>
          <div className="agent-meta mb10 d-md-flex align-items-center">
            <a className="text fz15" href={`/agents/${removeAccents(agent?.nom.toLocaleLowerCase())}-${removeAccents(agent?.prenoms.toLocaleLowerCase())}/proprietes`}>
              <i className="flaticon-call pe-1" />
              {agent?.mobile}
            </a>
          </div>
          <a href="#" className="text-decoration-underline fw600">
            Voir ses propriétés
          </a>
        </div>
      </div>
      {/* End agent-single */}
    </>
  );
};

export default ContactWithAgent;
