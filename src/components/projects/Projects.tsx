import React from "react";
import {FaSuitcase} from "react-icons/all";
import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";
import {ProjectItemType} from "../../types/ProjectItemType";
import {
    AxiosTag,
    BootstrapTag, CsharpTag,
    JQueryTag,
    LaravelTag,
    ReactTag,
    SymfonyTag,
    TailwindTag, UnityTag,
    VuejsTag
} from "../../types/Tags";

const projectList: Array<ProjectItemType> = [
    {
        path: process.env.PUBLIC_URL + '/images/media-sante.JPG',
        href: 'https://www.media-sante.com/',
        title: 'Media-sante - Appli web interne',
        tags: [SymfonyTag, JQueryTag, BootstrapTag]
    },
    {
        path: process.env.PUBLIC_URL + '/images/abs_mngt.JPG',
        href: 'https://github.com/JeremyGendre/absence_management_v2',
        title: 'Appli de gestion de congés',
        tags: [SymfonyTag, ReactTag, TailwindTag, AxiosTag]
    },
    {
        path: process.env.PUBLIC_URL + '/images/ropeup-api.png',
        href: 'https://www.ropeup.fr/',
        title: 'Rope Up - Appli web',
        tags: [LaravelTag, VuejsTag, BootstrapTag]
    },
    {
        path: process.env.PUBLIC_URL + '/images/loudiers-gites.PNG',
        href: 'https://www.gites-de-loudiers.fr/',
        title: 'Gîtes de Loudiers - Site web',
        tags: [SymfonyTag, ReactTag, TailwindTag, AxiosTag]
    },
    {
        path: process.env.PUBLIC_URL + '/images/unity-game.JPG',
        href: 'https://unity.com/fr',
        title: 'IUT Annecy - Jeu avec Unity',
        tags: [UnityTag, CsharpTag]
    },
];

export default function Projects() {
    return (
        <>
            <SectionTitle icon={<FaSuitcase/>} text="PROJETS"/>
            <div className="flex flex-wrap mt-8">
                {projectList.map((projectItem, index) => {
                    return (
                        <ProjectItem
                            key={index}
                            path={projectItem.path}
                            href={projectItem.href}
                            title={projectItem.title}
                            tags={projectItem.tags}
                        />
                    );
                })}
            </div>
        </>
    );
}