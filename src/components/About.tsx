import React from 'react';

const About = () => {
  const calculateAge = () => {
    // Convert 2058 BS to approximately 2001/2002 AD
    const birthYear = 2002;
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 mb-6">
            I'm a {calculateAge()} year old BCA student currently in my 5th semester, based in Nepal. 
            My journey in technology began with a passion for creating meaningful digital experiences.
          </p>
          <p className="text-gray-700 mb-6">
            Currently pursuing my Bachelor's in Computer Applications, I've developed a strong 
            foundation in various programming languages and web technologies. I believe in 
            continuous learning and staying updated with the latest trends in technology.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="mb-4">
              <p className="font-medium">Bachelor of Computer Applications (BCA)</p>
              <p className="text-gray-600">5th Semester</p>
              <p className="text-gray-600">Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;