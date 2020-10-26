import React from "react";

export default function Contact() {
    return (
        <div className="px-2 md:px-10 lg:px-20 xl:px-40">
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
    );
}