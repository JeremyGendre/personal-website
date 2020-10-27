import React from "react";
import {FaTools} from "react-icons/all";
import SectionTitle from "../SectionTitle";

export default function Skills() {
    return (
        <>
            <SectionTitle icon={<FaTools/>} text="COMPETENCES"/>
            <div id="skills-languages" className="skills-articles">
                <div className="skills-category">Langages de programmation</div>
                <div className="element-skills" data-percentage="0.8">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">HTML/CSS</div>
                    <span className="skills-percentage">80%</span>
                </div>
                <div className="element-skills" data-percentage="0.75">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">PHP</div>
                    <span className="skills-percentage">75%</span>
                </div>
                <div className="element-skills" data-percentage="0.7">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">JS</div>
                    <span className="skills-percentage">70%</span>
                </div>
                <div className="element-skills" data-percentage="0.65">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">SQL</div>
                    <span className="skills-percentage">65%</span>
                </div>
                <div className="element-skills" data-percentage="0.5">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">Java</div>
                    <span className="skills-percentage">50%</span>
                </div>
                <div className="element-skills" data-percentage="0.5">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">C#</div>
                    <span className="skills-percentage">50%</span>
                </div>
            </div>
            <div id="skills-libraries" className="skills-articles">
                <div className="skills-category">Framework & Librairies</div>
                <div className="element-skills" data-percentage="0.8">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">Symfony</div>
                    <span className="skills-percentage">80%</span>
                </div>
                <div className="element-skills" data-percentage="0.7">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">Laravel</div>
                    <span className="skills-percentage">70%</span>
                </div>
                <div className="element-skills" data-percentage="0.7">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">JQuery</div>
                    <span className="skills-percentage">70%</span>
                </div>
                <div className="element-skills" data-percentage="0.4">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">Vue.js</div>
                    <span className="skills-percentage">40%</span>
                </div>
            </div>
            <div id="skills-software" className="skills-articles">
                <div className="skills-category">Logiciels</div>
                <div className="element-skills" data-percentage="0.8">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">PHPStorm</div>
                    <span className="skills-percentage">80%</span>
                </div>
                <div className="element-skills" data-percentage="0.8">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">Office</div>
                    <span className="skills-percentage">80%</span>
                </div>
                <div className="element-skills" data-percentage="0.8">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">Subl. Text</div>
                    <span className="skills-percentage">80%</span>
                </div>
                <div className="element-skills" data-percentage="0.7">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">Git</div>
                    <span className="skills-percentage">70%</span>
                </div>
                <div className="element-skills" data-percentage="0.5">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">VS 2019</div>
                    <span className="skills-percentage">50%</span>
                </div>
            </div>
            <div id="skills-tongue" className="skills-articles">
                <div className="skills-category">Langues</div>
                <div className="element-skills" data-percentage="1">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">Français</div>
                    <span className="skills-percentage">Natif <span className="to-hide">.</span></span>
                </div>
                <div className="element-skills" data-percentage="0.8">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">English</div>
                    <span className="skills-percentage">C1 <span className="to-hide">.</span></span>
                </div>
                <div className="element-skills" data-percentage="0.5">
                    <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                         viewBox="-1 -1 34 34">
                        <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                        <circle cx="16" cy="16" r="15.9155"
                                className="progress-bar__progress js-progress-bar"/>
                    </svg>
                    <div className="inner-element-skills">Italiano</div>
                    <span className="skills-percentage">A2 <span className="to-hide">.</span></span>
                </div>
            </div>
        </>
    );
}