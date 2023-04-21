/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/about.jpg";

const imageAltText = "About section image";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "As a technology enthusiast and final year student at Mehran University of Jamshoro Pakistan, I am passionate about using my skills and knowledge in data science to make a meaningful impact in the industry. With 2+ years of experience under my belt, including internships and freelance work, I have developed a strong foundation in data analysis, visualization, machine learning, and deep learning. In addition to my professional pursuits, I am an active participant in various volunteer works and communities such as AWS CC, GDSC, and MLSA, where I have had the privilege of guiding and mentoring over 20k students. I am always seeking to improve myself and take on new challenges.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python",
  "Data Analysis",
  "Machine Learning",
  "Deep Learning",
  "Problem Solving",
  "Public Speaking",
  "Leadership"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "You are, what you repeatedly do. Excellence then is not an act but a habit";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
