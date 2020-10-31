import React from "react";
import {FaSuitcase} from "react-icons/all";
import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";

export default function Projects() {
    return (
        <>
            <SectionTitle icon={<FaSuitcase/>} text="PROJETS"/>
            <div className="flex flex-wrap">
                <ProjectItem path={process.env.PUBLIC_URL + '/images/media-sante.JPG'}
                             href="https://www.media-sante.com/" title="Media-sante" text="Appli web interne sous Symfony"/>
                <ProjectItem path={process.env.PUBLIC_URL + '/images/ropeup-api.png'}
                             href="https://www.ropeup.fr/" title="Rope Up !" text="Appli web sous Laravel"/>
                <ProjectItem path={process.env.PUBLIC_URL + '/images/loudiers-gites.PNG'}
                             href="https://www.gites-de-loudiers.fr/" title="Gîtes de Loudiers" text="Site web"/>
                <ProjectItem path={process.env.PUBLIC_URL + '/images/unity-game.JPG'}
                             href="https://unity.com/fr" title="IUT Annecy" text="Jeu avec Unity (C#)"/>
            </div>
        </>
    );
}