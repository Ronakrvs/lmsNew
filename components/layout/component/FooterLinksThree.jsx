import React from "react";
import { footerLinks } from "../../../data/footerLinks";
import Link from "next/link";
export default function FooterLinksThree({ allClasses, parentClass ,isRequire=false}) {
  const size = isRequire ? 3 : 4;
  return (
    <>
      {footerLinks.slice(0, 3).map((elm, i) => (
        <div key={i} className={parentClass || `col-xl-${size} col-lg-${size} col-md-${size+2} text-white`}>
          <div className={`${allClasses ? allClasses : ""}`}>{elm.title}</div>
          <div className="d-flex y-gap-10 flex-column ">
            {elm.links.map((itm, index) => (
              <Link key={index} href={itm.href}>
                {itm.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
{isRequire &&  <div className={parentClass || "col-xl-3 col-lg-3 col-md-6 text-white"}>
          <div className={`${allClasses ? allClasses : ""}`}>Worldwide Students</div>
          <div className="d-flex y-gap-10 flex-column ">
          <img
                width={140}
                height={50}
                src="/assets/img/world.png"
                alt="logo"
              />
          </div>
        </div>}
    </>
  );
}
