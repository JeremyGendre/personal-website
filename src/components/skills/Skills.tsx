import React, {useState} from "react";
import {BsReverseLayoutTextWindowReverse, FaCode, FaTools, GiBookshelf, MdLanguage} from "react-icons/all";
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
        icon: <FaCode/>,
        items: skillsListProg
    },
    {
        label : "Frameworks & Librairies",
        icon: <GiBookshelf/>,
        items: skillsListFrameworks
    },
    {
        label : "Logiciels",
        icon: <BsReverseLayoutTextWindowReverse/>,
        items: skillsListSoftwares
    },
    {
        label : "Langues",
        icon: <MdLanguage/>,
        items: skillsListLang
    },
];

export default function Skills() {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <>
            <SectionTitle icon={<FaTools/>} text="COMPETENCES"/>
            <div className="flex flex-wrap mt-10 text-xl rounded border border-orange-600">
                {content.map((category, index) => {
                    return (
                        <div key={index} onClick={() => setCurrentTab(index)} className={(index !== 0 ? 'border-l-1 border-r-3 border-b-3 border-t-3 ' : 'border-3 ') + (currentTab === index ? 'skill-category-active bg-orange-500 text-white ' : '') + " relative px-2 lg:px-8 py-4 text-orange-100 hover:text-white hover:bg-orange-500 transition duration-150 border-orange-500 flex cursor-pointer w-1/4 text-center"}>
                            <div className="flex m-auto">
                                <div className="my-auto md:mr-4">
                                    {category.icon}
                                </div>
                                <div className="my-auto hidden md:flex mr-1">
                                    {category.label}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="border-t-4 border-b-0 border-orange-500 w-full mt-8 pt-8 flex flex-wrap justify-around">
                {content.map((category, index) => {
                    return (
                        <div key={index} className={currentTab === index ? 'flex flex-wrap justify-around w-full' : 'hidden' }>
                            { category.items.map( item => <SkillItem label={item.label} path={process.env.PUBLIC_URL + '/images/skills/' + item.path}/>) }
                        </div>
                    );
                })}
            </div>
        </>
    );
}