import agents from "@/data/agents";
import Image from "next/image";
import Link from "next/link";
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
acc.replace(new RegExp(accentsMap.get(key), "g"), key);

export const removeAccents = (text) => [...accentsMap].reduce(reducer, text);

const AllAgents = ({data}) => {
  
  
  return (
    <>
      {data.map((agent) => (
        <div className="col" key={agent.id}>
          <div className="feature-style2 mb30">
            <div className="feature-img"> 
              <Link  href={`/agents/${agent.id}/${removeAccents(agent.nom.toLocaleLowerCase())}-${removeAccents(agent.prenoms.toLocaleLowerCase())}`}>
                <Image
                  width={210}
                  height={240}
                  className="bdrs12 w-100 h-100 cover"
                  src={ process.env.appUrl+ 'storage/' + agent?.photo}
                  alt="agents"
                />
              </Link>
            </div>
            <div className="feature-content pt20">
              <h6 className="title mb-1">
                <Link href={`/agents/${removeAccents(agent.nom.toLocaleLowerCase())}-${removeAccents(agent.prenoms.toLocaleLowerCase())}`}>{agent.nom} {agent.prenoms}</Link>
              </h6>
              {/* <p className="text fz15">Broker</p> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllAgents;
