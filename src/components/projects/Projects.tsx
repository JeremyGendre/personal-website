import React from "react";
import {FaSuitcase} from "react-icons/all";
import SectionTitle from "../SectionTitle";

export default function Projects() {
    return (
        <>
            <SectionTitle icon={<FaSuitcase/>} text="PROJETS"/>
            <div id="project-card-container">
                <div className="project-card">
                    <div className="project-card-img">
                        <img src="../images/media-sante.JPG"/>
                        <div className="hover-project-card" data-href="https://www.media-sante.com/"><span>Vers le site</span>
                        </div>
                    </div>
                    <div className="project-card-infos">
                        <div>Media-sante</div>
                        <div className="project-descr">Appli web interne sous Symfony</div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src="../images/ropeup-api.png"/>
                        <div className="hover-project-card" data-href="https://www.ropeup.fr/"><span>Vers le site</span>
                        </div>
                    </div>
                    <div className="project-card-infos">
                        <div>Rope Up !</div>
                        <div className="project-descr">Appli web sous Laravel</div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src="../images/loudiers-gites.PNG"/>
                        <div className="hover-project-card" data-href="https://www.gites-de-loudiers.fr/">
                            <span>Voir plus</span></div>
                    </div>
                    <div className="project-card-infos">
                        <div>Gîtes de Loudiers</div>
                        <div className="project-descr">Site web en PHP</div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src="../images/unity-game.JPG"/>
                        <div className="hover-project-card" data-href="https://unity.com/fr"><span>Vers le site</span>
                        </div>
                    </div>
                    <div className="project-card-infos">
                        <div>IUT Annecy</div>
                        <div className="project-descr">Jeu avec Unity (C#)</div>
                    </div>
                </div>
            </div>
        </>
    );
}