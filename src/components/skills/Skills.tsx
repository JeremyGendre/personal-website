import React from "react";
import {FaTools} from "react-icons/all";
import SectionTitle from "../SectionTitle";
import SkillItem from "./SkillItem";
import {SkillItemType} from "../../types/SkillItem";

const skillsListProg:Array<SkillItemType> = [
    {label : 'HTML / CSS', path : 'HTML-CSS.png'},
];

const skillsListFrameworks:Array<SkillItemType> = [
    {label : 'Symfony', path : 'symfony.png'},
];

const skillsListSoftwares:Array<SkillItemType> = [
    {label : 'PhpStorm', path : 'Phpstorm.png'},
];

const skillsListLang:Array<SkillItemType> = [
    {label : 'Français', path : 'france.webp'},
];

export default function Skills() {
    return (
        <>
            <SectionTitle icon={<FaTools/>} text="COMPETENCES"/>
            <div className="flex flex-wrap mt-10 text-xl">
                <div className="w-full lg:w-1/2 my-2">
                    <div className="mb-4">Langages de programmation</div>
                    { skillsListProg.map( item => <SkillItem label={item.label} path={process.env.PUBLIC_URL + '/images/skills/' + item.path}/>) }
                </div>
                <div className="w-full lg:w-1/2 my-2">
                    <div className="mb-4">Framework & Librairies</div>
                    { skillsListFrameworks.map( item => <SkillItem label={item.label} path={process.env.PUBLIC_URL + '/images/skills/' + item.path}/>) }
                </div>
                <div className="w-full lg:w-1/2 my-2">
                    <div className="mb-4">Logiciels</div>
                    { skillsListSoftwares.map( item => <SkillItem label={item.label} path={process.env.PUBLIC_URL + '/images/skills/' + item.path}/>) }
                </div>
                <div className="w-full lg:w-1/2 my-2">
                    <div className="mb-4">Langues</div>
                    { skillsListLang.map( item => <SkillItem label={item.label} path={process.env.PUBLIC_URL + '/images/skills/' + item.path}/>) }
                </div>
            </div>
        </>
    );
}