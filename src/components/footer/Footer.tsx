import React from "react";

export default function Footer() {
    return (
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
    );
}