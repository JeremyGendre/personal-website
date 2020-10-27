import React from "react";
import {FaUserCircle} from "react-icons/all";
import SectionTitle from "../SectionTitle";

export default function Profile() {
    return (
        <>
            <SectionTitle icon={<FaUserCircle/>} text="PROFIL"/>
            <div className="block md:flex mx-8 mt-12 mb-8">
                <div className="text-2xl my-auto md:w-3/4 xl:mr-20 text-justify">
                    <p>Je suis un étudiant en informatique. Après avoir obtenu un DUT Informatique à
                        l'IUT d'Annecy-le-vieux ainsi qu'une licence professionnelle Chargé de Projet Informatique,
                        je suis actuellement une formation en alternance afin de valider le titre d'Expert en Développement Web au sein de
                        l'école Ynov à Lyon.</p><br/>
                    <p>Mon parcours m'a permis de découvrir le secteur web qui, depuis, me passionne. Ainsi, suite à
                        mes études, je souhaiterais prendre part à un projet dans ce même secteur.</p><br/>
                    En consultant ce site, vous pourrez en apprendre plus sur moi, sur les projets que j'ai pu
                    réaliser, et plus encore !
                </div>
                <div className="border-4 mx-auto md:ml-8 mt-8 md:mt-0 lg:w-1/4 lg:h-full lg:rounded h-48 w-48 rounded-full hover:translate-x-2 hover:-translate-y-2 hover:shadow-profile-hover transform transition duration-300 shadow-profile border-white overflow-hidden">
                    <img className="hover:scale-110 transform transition duration-300" src={ process.env.PUBLIC_URL + '/images/perso.jpg' }/>
                </div>
            </div>
        </>
    );
}