import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <section className="section-footer--before">
        <div className="container grid grid-two--cols">
          <div className="before-footer--div">
            <h3 className="footer-title">
              Let's revolutionize the way you study
            </h3>
            <p>Join our free bootcamps to know us better</p>
            <div className="btn-div">
              <button className="btn">Start Now</button>
            </div>
          </div>
          <div className="footer-img">
            <img src="/images/coder.jpg" alt="" />
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container grid grid-four--cols ">
          <div className="footer-div1">
            <h3 className=".title">Mojahid Admin </h3>
            <p>Let's revolutionize the way you study with Mojahid.</p>
            <div className="footer-icon--div">
              <div>
                <Link to="https://github.com/Mdmojahid90">
                  <FaGithubSquare className="footer-icon" />
                </Link>
              </div>
              <div>
                <Link to="https://x.com/i/flow/logins">
                  <FaSquareXTwitter className="footer-icon" />
                </Link>
              </div>
              <div>
                <Link to="https://www.linkedin.com/in/md-mojahid-a45352247">
                  <FaLinkedin className="footer-icon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-div2">
            <h3 className=".title">Courses</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>Java script</p>
            <p>Java</p>
            <p>Python</p>
          </div>
          <div className="footer-div3">
            <h3 className=".title">Links</h3>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div className="footer-div3">
            <h3 className=".title">Guides</h3>
            <p>Getting started</p>
            <p>Starter template</p>
            <p>Webpack</p>
            <p>Parcel</p>
            <p>Vite</p>
          </div>
        </div>
        <p className="lastline">
          Copyright © 2024 Md Mojahid. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
