import React from "react";
import {FaQuestionCircle} from "react-icons/all";
import SectionTitle from "../SectionTitle";
import AboutSchoolItem from "./AboutSchoolItem";
import '../../assets/css/about.css';

export default function About() {
    return (
        <>
            <SectionTitle icon={<FaQuestionCircle/>} text="A PROPOS"/>
            <div className="mt-8">
                <div className="text-2xl border-l-4 pl-2 border-white my-4">Parcours scolaire</div>
                <div className="relative">
                    <div className="about-school-container flex flex-col mt-8 pr-0 sm:pr-8 lg:pr-0">
                        <AboutSchoolItem title="En cours" text="Mastère Développement Web à Ynov (Lyon)" right={false}/>
                        <AboutSchoolItem title="2019 - 2020" text="Licence Professionnelle Chargé de Projet Informatique à Tetras (Annecy-le-vieux)" right={true}/>
                        <AboutSchoolItem title="2016 - 2018" text="DUT Informatique à l'IUT d'Annecy-le-vieux." right={false}/>
                        <AboutSchoolItem title="2015" text="BAC Scientifique option Informatique et Sciences du Numérique" right={true}/>
                    </div>
                </div>
            </div>
            <div id="about-hobbies">
                <div>Centres d'intérêt</div>
                <div id="hobbies-divs-container">
                    <div className="hobbies-divs">
                        <img className="hobbies_divs_img" title="Musique"
                             src="../images/listening_music.jpg" alt="music" height="70" width="70"/>
                        <img className="hobbies_divs_img" title="Batterie" src="../images/drums.png"
                             alt="drums" height="70" width="70"/>
                        <img className="hobbies_divs_img" title="Basket-ball"
                             src="../images/basket_ball.jpg" alt="basket" height="70" width="70"/>
                        <img className="hobbies_divs_img" title="Hand-ball" src="../images/handball.png"
                             alt="handball" height="70" width="70"/>
                        <img className="hobbies_divs_img" title="Escalade" src="../images/climbing.png"
                             alt="climbing" height="70" width="70"/>
                        <img className="hobbies_divs_img" title="Programmer" src="../images/prog.jpg"
                             alt="programming" height="70" width="70"/>
                        <img className="hobbies_divs_img" title="Lire" src="../images/reading.png"
                             alt="reading" height="70" width="70"/>
                        <img className="hobbies_divs_img" title="Jeux-vidéos"
                             src="../images/playing.png" alt="videogames" height="70" width="70"/>
                        <img className="hobbies_divs_img" title="Films/séries"
                             src="../images/montage_video.png" alt="videos" height="70" width="70"/>
                    </div>
                </div>
            </div>
        </>
    );
}