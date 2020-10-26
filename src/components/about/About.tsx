import React from "react";

export default function About() {
    return (
        <div className="px-2 md:px-10 lg:px-20 xl:px-40">
            <div id="inner-about">
                <h1 className="titles">A PROPOS <i className="far fa-question-circle icons-right"></i></h1>
                <div id="about-school-career">
                    <hr className="hr-about"/>
                    <div>Parcours scolaire</div>
                    <div className="timeline">
                        <div className="timeline-text-container left">
                            <div className="content">
                                <h3>2019-2020</h3>
                                <p>Licence Professionnelle Chargé de Projet Informatique à Tetras
                                    (Annecy-le-vieux)</p>
                            </div>
                        </div>
                        <div className="timeline-text-container right">
                            <div className="content">
                                <h3>2018-2019</h3>
                                <p>Licence Informatique à L'Université de Grenoble</p>
                            </div>
                        </div>
                        <div className="timeline-text-container left">
                            <div className="content">
                                <h3>2016-2018</h3>
                                <p>DUT Informatique à l'IUT d'Annecy-le-vieux.</p>
                            </div>
                        </div>
                        <div className="timeline-text-container right">
                            <div className="content">
                                <h3>2015</h3>
                                <p>BAC Scientifique option Informatique et Sciences du Numérique</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="about-hobbies">
                    <hr className="hr-about"/>
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
            </div>
        </div>
    );
}