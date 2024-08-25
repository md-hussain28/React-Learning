// Services.js
import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md p-6 rounded-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Workout Tracking</h3>
          <p className="text-gray-700">
            Track your daily workouts, monitor your progress, and see how you improve over time. Our easy-to-use tracking system lets you log exercises, sets, and reps.
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">AI-Generated Routines</h3>
          <p className="text-gray-700">
            Get personalized workout routines based on your fitness level, goals, and preferences. Our AI algorithm creates routines that are tailored to you.
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Progress Reports</h3>
          <p className="text-gray-700">
            Receive detailed reports on your progress, including performance analysis, charts, and recommendations for improvement. Stay motivated by seeing your growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
