import React from "react";

export default function Content() {
    return (
        <div className="relative z-10 mt-screen bg-gray-200">
            <div className="content-articles">
                <h1 className="titles"><i className="fas fa-user-circle icons-left"></i>PROFIL</h1>
                <div className="row">
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
                    <div id="container-img-perso" className="col-sm-4">
                        <img id="img-perso" src="../images/perso.jpg"/>
                    </div>
                </div>
            </div>
            <div id="skills" className="content-articles">
                <div id="inner-skills">
                    <h1 className="titles">COMPETENCES <i className="fas fa-tools icons-right"></i></h1>
                    <div id="skills-languages" className="skills-articles">
                        <div className="skills-category">Langages de programmation</div>
                        <div className="element-skills" data-percentage="0.8">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">HTML/CSS</div>
                            <span className="skills-percentage">80%</span>
                        </div>
                        <div className="element-skills" data-percentage="0.75">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">PHP</div>
                            <span className="skills-percentage">75%</span>
                        </div>
                        <div className="element-skills" data-percentage="0.7">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">JS</div>
                            <span className="skills-percentage">70%</span>
                        </div>
                        <div className="element-skills" data-percentage="0.65">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">SQL</div>
                            <span className="skills-percentage">65%</span>
                        </div>
                        <div className="element-skills" data-percentage="0.5">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">Java</div>
                            <span className="skills-percentage">50%</span>
                        </div>
                        <div className="element-skills" data-percentage="0.5">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">C#</div>
                            <span className="skills-percentage">50%</span>
                        </div>
                    </div>
                    <div id="skills-libraries" className="skills-articles">
                        <div className="skills-category">Framework & Librairies</div>
                        <div className="element-skills" data-percentage="0.8">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">Symfony</div>
                            <span className="skills-percentage">80%</span>
                        </div>
                        <div className="element-skills" data-percentage="0.7">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">Laravel</div>
                            <span className="skills-percentage">70%</span>
                        </div>
                        <div className="element-skills" data-percentage="0.7">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">JQuery</div>
                            <span className="skills-percentage">70%</span>
                        </div>
                        <div className="element-skills" data-percentage="0.4">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">Vue.js</div>
                            <span className="skills-percentage">40%</span>
                        </div>
                    </div>
                    <div id="skills-software" className="skills-articles">
                        <div className="skills-category">Logiciels</div>
                        <div className="element-skills" data-percentage="0.8">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">PHPStorm</div>
                            <span className="skills-percentage">80%</span>
                        </div>
                        <div className="element-skills" data-percentage="0.8">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">Office</div>
                            <span className="skills-percentage">80%</span>
                        </div>
                        <div className="element-skills" data-percentage="0.8">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">Subl. Text</div>
                            <span className="skills-percentage">80%</span>
                        </div>
                        <div className="element-skills" data-percentage="0.7">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">Git</div>
                            <span className="skills-percentage">70%</span>
                        </div>
                        <div className="element-skills" data-percentage="0.5">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">VS 2019</div>
                            <span className="skills-percentage">50%</span>
                        </div>
                    </div>
                    <div id="skills-tongue" className="skills-articles">
                        <div className="skills-category">Langues</div>
                        <div className="element-skills" data-percentage="1">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">Français</div>
                            <span className="skills-percentage">Natif <span className="to-hide">.</span></span>
                        </div>
                        <div className="element-skills" data-percentage="0.8">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">English</div>
                            <span className="skills-percentage">C1 <span className="to-hide">.</span></span>
                        </div>
                        <div className="element-skills" data-percentage="0.5">
                            <svg className="inner-element-skills" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-1 -1 34 34">
                                <circle cx="16" cy="16" r="15.9155" className="progress-bar__background"/>
                                <circle cx="16" cy="16" r="15.9155"
                                        className="progress-bar__progress js-progress-bar"/>
                            </svg>
                            <div className="inner-element-skills">Italiano</div>
                            <span className="skills-percentage">A2 <span className="to-hide">.</span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="projects" className="content-articles">
                <h1 className="titles"><i className="fas fa-suitcase icons-left"></i> PROJETS</h1>
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
            </div>
            <div id="about" className="content-articles">
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
            <div id="contact" className="content-articles">
                <h1 className="titles"><i className="far fa-address-card icons-left"></i> CONTACT</h1>
                <div id="form-contact-container">
                    <form id="form-contact">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" placeholder="Votre nom"
                                           required/>
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control"
                                           placeholder="Votre email"
                                           required/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="subject" className="form-control"
                                           placeholder="Le sujet" required/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group h-full">
                                        <textarea className="form-control h-full" name="message"
                                                  required></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 text-center">
                            <input type="submit" id="form-contact-submit"/>
                        </div>
                    </form>
                </div>
                <hr className="my-2"/>
                <div>
                    <i className="fas fa-envelope"></i> gendrejeremy@yahoo.fr
                </div>
            </div>
            <div id="footer">
                &copy Jérémy Gendre 2020
                <div id="sn-container">
                    <a href="https://www.facebook.com/jeremy.gendre.7" target="_blank">
                        <i className="fab fa-facebook-square" title="facebook"></i>
                    </a>
                    <a href="https://github.com/JeremyGendre" target="_blank">
                        <i className="fab fa-github" title="GitHub"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-gendre-a06772133/" target="_blank">
                        <i className="fab fa-linkedin" title="linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}