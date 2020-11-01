import React from "react";
import {FaSuitcase} from "react-icons/all";
import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";
import {ProjectItemType} from "../../types/ProjectItemType";

const projectList: Array<ProjectItemType> = [
    {
        path: process.env.PUBLIC_URL + '/images/media-sante.JPG',
        href: 'https://www.media-sante.com/',
        title: 'Media-sante - Appli web interne',
        tags: [
            {color: '', text: ''},
        ]
    },
    {
        path: process.env.PUBLIC_URL + '/images/unity-game.JPG',
        href: 'https://github.com/JeremyGendre/absence_management_v2',
        title: 'Appli de gestion de congés',
        tags: [
            {color: '', text: ''},
        ]
    },
    {
        path: process.env.PUBLIC_URL + '/images/ropeup-api.png',
        href: 'https://www.ropeup.fr/',
        title: 'Rope Up - Appli web',
        tags: [
            {color: '', text: ''},
        ]
    },
    {
        path: process.env.PUBLIC_URL + '/images/loudiers-gites.PNG',
        href: 'https://www.gites-de-loudiers.fr/',
        title: 'Gîtes de Loudiers - Site web',
        tags: [
            {color: '', text: ''},
        ]
    },
    {
        path: process.env.PUBLIC_URL + '/images/unity-game.JPG',
        href: 'https://unity.com/fr',
        title: 'IUT Annecy - Jeu avec Unity',
        tags: [
            {color: '', text: ''},
        ]
    },
];

export default function Projects() {
    return (
        <>
            <SectionTitle icon={<FaSuitcase/>} text="PROJETS"/>
            <div className="flex flex-wrap mt-8">
                {projectList.map(projectItem => {
                    return (
                        <ProjectItem
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