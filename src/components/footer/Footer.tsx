import React from "react";

export default function Footer() {
    return (
        <div id="footer">
            &copy Jérémy Gendre 2020
            <div id="sn-container">
                <div data-href="https://www.facebook.com/jeremy.gendre.7" data-target="_blank">
                    <i className="fab fa-facebook-square" title="facebook"/>
                </div>
                <div data-href="https://github.com/JeremyGendre" data-target="_blank">
                    <i className="fab fa-github" title="GitHub"/>
                </div>
                <div data-href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-gendre-a06772133/" data-target="_blank">
                    <i className="fab fa-linkedin" title="linkedin"/>
                </div>
            </div>
        </div>
    );
}