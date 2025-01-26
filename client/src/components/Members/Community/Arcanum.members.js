import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as LinkedIn } from "../img/linkedin-brands.svg";
import { ReactComponent as Github } from "../img/github-brands.svg";
import { ReactComponent as Email } from "../img/mail.svg";
import { ArcanumMembers as arcLists } from './ArcanumMembersList.js';
import planet from "../img/planet_2.svg";

function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
            width,
            height
      };
}

function ArcanumMembers() {

      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

      useEffect(() => {
            function handleResize() {
                  setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
      }, []);

      const renderedItems = arcLists.map((arcLists, index) => {

            return (<div className="elc-members" key={arcLists.id}>
                  <div className="cp-img-div">
                  {/* style={{height:"35vw"}} */}
                        <img className="cp-img" src={arcLists.img} alt="cpm" />
                        <h3 className="member-name">{arcLists.name}</h3>
                        <h5 className="member-position">{arcLists.position}</h5>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={arcLists.linkedin}>
                              <LinkedIn className="icons-members"></LinkedIn>

                        </a>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={arcLists.github}>
                              <Github className="icons-members"></Github>

                        </a>
                        <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + arcLists.mail}>
                              <Email className="icons-members"></Email>

                        </a>

                  </div>
            </div>)

      });
      return (windowDimensions.width > 990 ? (<div className="electronics-members">
            <hr className="header-line-top" />

            <h1 className="community-header">
                  Arcanum Members
            </h1>
            <hr className="header-line" />
            <img src={planet} className="planet-img-member-cp" alt="planet" />
            <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                        <div className="elc-members" key={arcLists[0].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={arcLists[0].img} alt="cpm" />
                                    <h3 className="member-name">{arcLists[0].name}</h3>
                                    <h5 className="member-position">{arcLists[0].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={arcLists[0].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={arcLists[0].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + arcLists[0].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                        <div className="elc-members" key={arcLists[1].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={arcLists[1].img} alt="cpm" />
                                    <h3 className="member-name">{arcLists[1].name}</h3>
                                    <h5 className="member-position">{arcLists[1].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={arcLists[1].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={arcLists[1].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + arcLists[1].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                        <div className="elc-members" key={arcLists[2].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={arcLists[2].img} alt="cpm" />
                                    <h3 className="member-name">{arcLists[2].name}</h3>
                                    <h5 className="member-position">{arcLists[2].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={arcLists[2].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={arcLists[2].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + arcLists[2].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                        <div className="elc-members" key={arcLists[3].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={arcLists[3].img} alt="cpm" />
                                    <h3 className="member-name">{arcLists[3].name}</h3>
                                    <h5 className="member-position">{arcLists[3].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={arcLists[3].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={arcLists[3].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + arcLists[3].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                        <div className="elc-members" key={arcLists[4].id}>
                              <div className="cp-img-div">
                                    <img className="cp-img" src={arcLists[4].img} alt="cpm" />
                                    <h3 className="member-name">{arcLists[4].name}</h3>
                                    <h5 className="member-position">{arcLists[4].position}</h5>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={arcLists[4].linkedin}>
                                          <LinkedIn className="icons-members"></LinkedIn>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={arcLists[4].github}>
                                          <Github className="icons-members"></Github>

                                    </a>
                                    <a className="text-white" target="_blank" rel="noopener noreferrer" href={"mailto:" + arcLists[4].mail}>
                                          <Email className="icons-members"></Email>

                                    </a>

                              </div>
                        </div>
                  </div>
            </div>
      </div>) : (
            <div className="electronics-members">
                  <hr className="header-line-top" />

                  <h1 className="community-header">
                        Core Electronics Community Members
                  </h1>
                  <hr className="header-line" />
                  <img src={planet} className="planet-img-member-cp" alt="planet" />
                  {renderedItems}
            </div>
      ));
}

export default ArcanumMembers;
