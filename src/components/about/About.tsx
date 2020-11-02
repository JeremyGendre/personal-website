import React, {useState} from "react";
import {FaQuestionCircle} from "react-icons/all";
import SectionTitle from "../SectionTitle";
import AboutSchoolItem from "./AboutSchoolItem";
import '../../assets/css/about.css';
import AboutHobbiesItem from "./AboutHobbiesItem";
import {AboutHobbiesItemType} from "../../types/AboutHobbiesItemType";

const hobbies: Array<AboutHobbiesItemType> = [
    {title: 'Musique', src : '/images/listening_music.jpg'},
    {title: 'Batterie', src : '/images/drums.png'},
    {title: 'Basket-ball', src : '/images/basket_ball.jpg'},
    {title: 'Hand-ball', src : '/images/handball.png'},
    {title: 'Escalade', src : '/images/climbing.png'},
    {title: 'Programmer', src : '/images/prog.jpg'},
    {title: 'Lire', src : '/images/reading.png'},
    {title: 'Jeux-vidéos', src : '/images/drums.png'},
    {title: 'Films/séries', src : '/images/montage_video.png'},
];

export default function About() {
    return (
        <>
            <SectionTitle icon={<FaQuestionCircle/>} text="A PROPOS"/>
            <div className="mt-8">
                <div className="text-2xl border-l-4 pl-4 border-white my-4">Parcours scolaire</div>
                <div className="relative">
                    <div className="about-school-container flex flex-col mt-8 pr-0 sm:pr-8 lg:pr-0">
                        <AboutSchoolItem title="En cours" text="Mastère Développement Web à Ynov (Lyon)" right={false}/>
                        <AboutSchoolItem title="2019 - 2020" text="Licence Professionnelle Chargé de Projet Informatique à Tetras (Annecy-le-vieux)" right={true}/>
                        <AboutSchoolItem title="2016 - 2018" text="DUT Informatique à l'IUT d'Annecy-le-vieux." right={false}/>
                        <AboutSchoolItem title="2015" text="BAC Scientifique option Informatique et Sciences du Numérique" right={true}/>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="text-2xl border-l-4 pl-4 border-white my-4">Centres d'intérêt</div>
                <div>
                    <div className="flex justify-around flex-wrap">
                        {hobbies.map((hobby, index) => <AboutHobbiesItem key={index} title={hobby.title} src={hobby.src}/>)}
                    </div>
                </div>
            </div>
        </>
    );
}
