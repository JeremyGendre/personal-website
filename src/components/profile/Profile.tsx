import React from "react";
import {FaUserCircle} from "react-icons/all";

export default function Profile() {
    return (
        <div className="content-articles px-2 md:px-10 lg:px-20 xl:px-40">
            <h1 className="flex">
                <div className="my-auto">
                    <FaUserCircle/>
                </div>
                <div className="my-auto">PROFIL</div>
            </h1>
            <div className="flex">
                <div className="col-sm-8">
                    <p>Je suis un étudiant en informatique. Je viens de terminer mes 2 ans de DUT Informatique à
                        l'IUT
                        d'Annecy-le-vieux et je suis actuellement en licence professionnelle Chargé de Projet
                        Informatique (CP Info) à Annecy.</p>
                    <p>Mon parcours m'a permis de découvrir le secteur web qui, depuis, me passionne. Suite à
                        mes
                        études, je souhaiterais devenir Développeur Web.</p>
                    En consultant ce site, vous pourrez en apprendre plus sur moi, sur les projets que j'ai pu
                    réaliser,
                    etc.
                </div>
                <div className="border-4 hover:translate-x-2 hover:-translate-y-2 hover:shadow-profile-hover transform transition duration-300 shadow-profile border-white overflow-hidden rounded w-80">
                    <img className="hover:scale-110 transform transition duration-300" src={ process.env.PUBLIC_URL + '/images/perso.jpg' }/>
                </div>
            </div>
        </div>
    );
}