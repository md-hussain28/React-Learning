import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen p-4">
      <main className="container mx-auto flex-grow">
        <section className="text-center my-16">
          <h1 className="text-5xl font-bold mb-4">Welcome to React Router Learning Hub</h1>
          <p className="text-xl text-gray-300 mb-8">
            Master React Router with our comprehensive guides and hands-on examples.
          </p>
          <a href="#get-started" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
            Get Started
          </a>
        </section>

        <section id="get-started" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-2">Basics of React Router</h2>
            <p className="text-gray-300 mb-4">
              Learn the fundamentals of React Router, including routing, links, and basic navigation.
            </p>
            <a href="/basics" className="text-blue-500 hover:underline">Learn More</a>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-2">Advanced Routing Techniques</h2>
            <p className="text-gray-300 mb-4">
              Explore advanced concepts like dynamic routing, nested routes, and route guards.
            </p>
            <a href="/advanced" className="text-blue-500 hover:underline">Learn More</a>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-2">Practical Projects</h2>
            <p className="text-gray-300 mb-4">
              Apply what you've learned by building real-world projects using React Router.
            </p>
            <a href="/projects" className="text-blue-500 hover:underline">Learn More</a>
          </div>
        </section>

        <section className="my-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Why Learn React Router?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            React Router is essential for creating modern, single-page applications (SPAs). It allows you to
            manage navigation, handle dynamic URLs, and implement complex routing with ease.
          </p>
          <a href="/why-react-router" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
            Discover More
          </a>
        </section>
      </main>
    </div>
  );
};

export default Home;
