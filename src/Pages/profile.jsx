import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { FaGithub, FaMedium, FaTwitter } from "react-icons/fa";

function Profile({
  imgSrc = "./placeholderimage.jpeg",
  name,
  bio,
  location,
  followers,
  following,
  twitter_username,
  medium_username,
  html_url,
}) {
  return (
    <>
      <HelmetProvider>
        <title>Memunat's Github Portfolio</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="canonical" href="http://localhost:3000/portfolio/" />
        <div id="profile">
          <div id="profile-section">
            
            <h1 alt="profile name">{name}</h1>
          </div>
          <div id="profile-details">
            <div className="bio">
              <p>{bio}</p>
              <a href="https://github.com/users/MemunatTairu"></a>
            </div>
            <div className="location">
              <p>{location}</p>
            </div>

            <div>
              <a href="https://github.com/MemunatTairu">
                <button className="buttons">
                  <FaGithub /> GitHub<i className="fa-brands fa-github"></i>
                </button>
              </a>
            </div>
            <div>
              <a href=" https://medium.com/@tairumemunat">
                <button className="buttons">
                  <FaMedium /> Medium<i className="fa-brands fa-medium"></i>
                </button>
              </a>
            </div>

            <div>
              <a href="https://twitter.com/TairuMemun9960">
                <button className="buttons">
                  <FaTwitter /> Twitter<i className="fa-brands fa-twitter"></i>
                </button>
              </a>
            </div>

            <a href="https://github.com/MemunatTairu?tab=following">
              <button className="buttons">Following: {following}</button>
            </a>
            <a href="https://github.com/MemunatTairu?tab=followers">
              <button className="buttons">Followers: {followers}</button>
            </a>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
}

export default Profile;
