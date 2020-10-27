import React from "react";
import {FaTools} from "react-icons/all";
import SectionTitle from "../SectionTitle";

export default function Skills() {
    return (
        <>
            <SectionTitle icon={<FaTools/>} text="COMPETENCES"/>
            <div>
                <div>Langages de programmation</div>
                <div>
                    <div>HTML/CSS</div>
                    <span>80%</span>
                </div>
                <div>
                    <div>PHP</div>
                    <span>75%</span>
                </div>
                <div>
                    <div>JS</div>
                    <span>70%</span>
                </div>
                <div>
                    <div>SQL</div>
                    <span>65%</span>
                </div>
                <div>
                    <div>Java</div>
                    <span>50%</span>
                </div>
                <div>
                    <div>C#</div>
                    <span>50%</span>
                </div>
            </div>
            <div>
                <div>Framework & Librairies</div>
                <div>
                    <div>Symfony</div>
                    <span>80%</span>
                </div>
                <div>
                    <div>Laravel</div>
                    <span>70%</span>
                </div>
                <div>
                    <div>JQuery</div>
                    <span>70%</span>
                </div>
                <div>
                    <div>Vue.js</div>
                    <span>40%</span>
                </div>
            </div>
            <div>
                <div>Logiciels</div>
                <div>
                    <div>PHPStorm</div>
                    <span>80%</span>
                </div>
                <div>
                    <div>Office</div>
                    <span>80%</span>
                </div>
                <div>
                    <div>Subl. Text</div>
                    <span>80%</span>
                </div>
                <div>
                    <div>Git</div>
                    <span>70%</span>
                </div>
                <div>
                    <div>VS 2019</div>
                    <span>50%</span>
                </div>
            </div>
            <div>
                <div>Langues</div>
                <div>
                    <div>Français</div>
                    <span>Natif</span>
                </div>
                <div>
                    <div>English</div>
                    <span>C1</span>
                </div>
                <div>
                    <div>Italiano</div>
                    <span>A2</span>
                </div>
            </div>
        </>
    );
}