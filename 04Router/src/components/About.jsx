// About.js
import React from 'react';

const About = () => {
  return (
    <div className=" mx-auto p-8 bg-stone-500">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
      <p className="text-gray-700 leading-loose">
        Welcome to MyWebsite! Our goal is to help gym-goers track their workouts, monitor their progress, and achieve their fitness goals. 
        We are dedicated to providing an easy-to-use platform that integrates advanced AI to generate custom workout routines based on your unique needs.
      </p>
      <p className="text-gray-700 leading-loose mt-4">
        Our team is passionate about fitness and technology, working tirelessly to bring you the best tools to stay motivated and reach new heights.
        Whether you're just starting your fitness journey or are a seasoned athlete, MyWebsite is here to support you every step of the way.
      </p>
    </div>
  );
};

export default About;
