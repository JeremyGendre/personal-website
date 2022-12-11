import React from "react";
import {FaGithub, FaSuitcase} from "react-icons/all";
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
        path: process.env.PUBLIC_URL + '/images/projects/media-sante.JPG',
        href: 'https://www.media-sante.com/',
        title: 'Media-sante - Appli web interne',
        tags: [SymfonyTag, JQueryTag, BootstrapTag]
    },
    {
        path: process.env.PUBLIC_URL + '/images/projects/abs_mngt.JPG',
        href: 'https://github.com/JeremyGendre/absence_management_v2',
        title: 'Appli de gestion de congés',
        tags: [SymfonyTag, ReactTag, TailwindTag, AxiosTag]
    },
    {
        path: process.env.PUBLIC_URL + '/images/projects/ropeup-api.png',
        href: 'https://www.ropeup.fr/',
        title: 'Rope Up - Appli web',
        tags: [LaravelTag, VuejsTag, BootstrapTag]
    },
    {
        path: process.env.PUBLIC_URL + '/images/projects/loudiers-gites.PNG',
        href: 'https://www.gites-de-loudiers.fr/',
        title: 'Gîtes de Loudiers - Site web',
        tags: [SymfonyTag, ReactTag, TailwindTag, AxiosTag]
    },
    {
        path: process.env.PUBLIC_URL + '/images/projects/playlistsong.JPG',
        href: 'https://playlistsongs-41452.web.app/',
        title: 'Ynov Lyon - Playlist de chansons',
        tags: [VuejsTag]
    },
    {
        path: process.env.PUBLIC_URL + '/images/projects/unity-game.JPG',
        href: 'https://unity.com/fr',
        title: 'IUT Annecy - Jeu avec Unity',
        tags: [UnityTag, CsharpTag]
    },
];

export default function Projects() {
    const titleGithubLink = (
        <div className="flex flex-row">
            PROJETS
            <div className="ml-8 text-lg flex cursor-pointer text-orange-500 hover:underline hover:text-orange"
                 onClick={() => {window.open("https://github.com/JeremyGendre")}}>
                <div className="my-auto">Voir plus</div>
                <div className="ml-2 my-auto"><FaGithub/></div>
            </div>
        </div>
    );
    return (
        <>
            <SectionTitle icon={<FaSuitcase/>} text={titleGithubLink}/>
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