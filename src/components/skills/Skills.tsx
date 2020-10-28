import React from "react";
import {FaTools} from "react-icons/all";
import SectionTitle from "../SectionTitle";
import SkillItem from "./SkillItem";
import {SkillItemType} from "../../types/SkillItem";

const skillsListProg:Array<SkillItemType> = [
    {label : 'HTML / CSS', path : 'HTML-CSS.png'},
    {label : 'PHP', path : 'php.png'},
    {label : 'Javascript', path : 'javascript.png'},
    {label : 'Typescript', path : 'typescript.png'},
    {label : 'JSX', path : 'jsx.png'},
    {label : 'SQL', path : 'sql.webp'},
    {label : 'Java', path : 'java.svg'},
];

const skillsListFrameworks:Array<SkillItemType> = [
    {label : 'Symfony', path : 'symfony.png'},
    {label : 'React', path : 'react.png'},
    {label : 'Tailwindcss', path : 'tailwindcss.svg'},
    {label : 'Axios', path : 'axios.png'},
    {label : 'Bootstrap', path : 'bootstrap.png'},
];

const skillsListSoftwares:Array<SkillItemType> = [
    {label : 'PhpStorm', path : 'Phpstorm.png'},
    {label : 'Git', path : 'git.png'},
    {label : 'Postman', path : 'postman.png'},
    {label : 'Visual studio code', path : 'vscode.png'},
    {label : 'Office', path : 'office.png'},
];

const skillsListLang:Array<SkillItemType> = [
    {label : 'Français', path : 'france.webp'},
    {label : 'Anglais', path : 'UKflag.webp'},
    {label : 'Italian', path : 'italy.svg'},
];

export default function Skills() {
    return (
        <>
            <SectionTitle icon={<FaTools/>} text="COMPETENCES"/>
            <div className="flex flex-wrap mt-10 text-xl">
                <div className="w-full lg:w-1/2 my-8 px-8">
                    <div className="mb-4 text-center">Langages de programmation</div>
                    <div className="flex justify-around">
                        { skillsListProg.map( item => <SkillItem label={item.label} path={process.env.PUBLIC_URL + '/images/skills/' + item.path}/>) }
                    </div>
                </div>
                <div className="w-full lg:w-1/2 my-8 px-8">
                    <div className="mb-4 text-center">Frameworks & Librairies</div>
                    <div className="flex justify-around">
                        { skillsListFrameworks.map( item => <SkillItem label={item.label} path={process.env.PUBLIC_URL + '/images/skills/' + item.path}/>) }
                    </div>
                </div>
                <div className="w-full lg:w-1/2 my-8 px-8">
                    <div className="mb-4 text-center">Logiciels</div>
                    <div className="flex justify-around">
                        { skillsListSoftwares.map( item => <SkillItem label={item.label} path={process.env.PUBLIC_URL + '/images/skills/' + item.path}/>) }
                    </div>
                </div>
                <div className="w-full lg:w-1/2 my-8 px-8">
                    <div className="mb-4 text-center">Langues</div>
                    <div className="flex justify-around">
                        { skillsListLang.map( item => <SkillItem label={item.label} path={process.env.PUBLIC_URL + '/images/skills/' + item.path}/>) }
                    </div>
                </div>
            </div>
        </>
    );
}