import React from "react";
import {FaTools} from "react-icons/all";
import SectionTitle from "../SectionTitle";
import {SkillItemType} from "../../types/SkillItem";
import {SkillCategoryType} from "../../types/SkillCategory";
import SkillItem from "./SkillItem";

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
    {label : 'Italiano', path : 'italy.svg'},
];

const content:Array<SkillCategoryType> = [
    {
        label : "Langages de programmation",
        items: skillsListProg
    },
    {
        label : "Frameworks & Librairies",
        items: skillsListFrameworks
    },
    {
        label : "Logiciels",
        items: skillsListSoftwares
    },
    {
        label : "Langues",
        items: skillsListLang
    },
];

export default function Skills() {
    return (
        <>
            <SectionTitle icon={<FaTools/>} text="COMPETENCES"/>
            <div className="flex flex-wrap mt-10 text-xl">
                {content.map(category => {
                    return (
                        <div className="px-8 py-4 border-2 border-white cursor-pointer">{category.label}</div>
                    );
                })}
                <div className="hidden">
                    {content.map(category => {
                        return (
                            <div className="flex">
                                { category.items.map( item => <SkillItem label={item.label} path={process.env.PUBLIC_URL + '/images/skills/' + item.path}/>) }
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}