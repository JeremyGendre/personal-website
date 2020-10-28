import React from "react";
import {FaTools} from "react-icons/all";
import SectionTitle from "../SectionTitle";
import SkillItem from "./SkillItem";

export default function Skills() {
    return (
        <>
            <SectionTitle icon={<FaTools/>} text="COMPETENCES"/>
            <div className="flex flex-wrap mt-10 text-xl">
                <div className="w-full lg:w-1/2 my-2">
                    <div className="mb-4">Langages de programmation</div>
                    <SkillItem label="HTML / CSS" path={process.env.PUBLIC_URL + '/images/skills/HTML-CSS.png'}/>
                </div>
                <div className="w-full lg:w-1/2 my-2">
                    <div>Framework & Librairies</div>
                </div>
                <div className="w-full lg:w-1/2 my-2">
                    <div>Logiciels</div>
                </div>
                <div className="w-full lg:w-1/2 my-2">
                    <div>Langues</div>
                </div>
            </div>
        </>
    );
}