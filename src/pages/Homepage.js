import React from "react";
import { Link } from "react-router-dom";
import courseImage1 from "../assets/images/adobe illustrator.jpg";
import courseImage2 from "../assets/images/blender.jpg";
import courseImage3 from "../assets/images/photoshop.jpg";
import testimonialImage1 from "../assets/images/testimonial.png";
import testimonialImage2 from "../assets/images/customer-review.png";
import testimonialImage3 from "../assets/images/customer-satisfaction.png";
import testimonialImage4 from "../assets/images/rating.png";
import predictiveImages from "../assets/images/predictive-chart.png";
import psychometrictest from "../assets/images/critical-thinking.png";

const Homepage = () => {
  return (
    <>
      <div className="w-full bg-[#f8f9fa] min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#3498db] to-[#2c3e50] text-white py-20 px-10 text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to Learning HubSpot
          </h1>
          <p className="text-2xl mb-8">Your gateway to learning and growth</p>
          <Link
            to="/courses"
            className="bg-[#2ecc71] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#27ae60] transition duration-300"
          >
            Explore Courses
          </Link>
        </section>

        {/* Courses Section */}
        <section className="py-20 px-10 bg-[#ecf0f1]">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#2c3e50]">
            Popular Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[courseImage1, courseImage2, courseImage3].map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 flex items-center justify-center flex-col transition duration-300"
              >
                <img
                  src={course}
                  alt={`Course ${index + 1}`}
                  className="w-[40%] h-[70%] p-7 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-[#2c3e50]">
                    Course {index + 1}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Course Description {index + 1}
                  </p>
                  <Link
                    to={`/course-details/${index + 1}`}
                    className="text-[#3498db] font-semibold hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Psychometric Assessment Section */}
        <section className="bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white py-20 px-10 mt-12 mb-12 text-center rounded-xl mx-4">
          <h2 className="text-3xl font-bold mb-4">Psychometric Assessment</h2>
          <p className="text-xl mb-8">Sign up and start your free assessment</p>
          <Link
            to="/signup"
            className="bg-white text-[#e74c3c] py-3 px-8 rounded-full font-semibold hover:bg-[#ecf0f1] transition duration-300"
          >
            Get Started
          </Link>
        </section>

        {/* Test & Assessment Section */}
        <section className="py-20 px-10 bg-[#ecf0f1]">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2c3e50]">
            Test & Assessment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[psychometrictest, predictiveImages].map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col justify-center items-center"
              >
                <img
                  src={course}
                  alt={`Assessment ${index + 1}`}
                  className="w-[40%] h-[80%] p-10 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-[#2c3e50]">
                    {index === 0
                      ? "Psychometric Assessment"
                      : "NEET Predictor Tool"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Description for{" "}
                    {index === 0
                      ? "Psychometric Assessment"
                      : "NEET Predictor Tool"}
                  </p>
                  <Link
                    to={
                      index === 0 ? "/psychometrictest" : "/neetpredictortool"
                    }
                    className="text-[#3498db] font-semibold hover:underline"
                  >
                    Start Test
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-gradient-to-r from-[#3498db] to-[#2980b9] text-white py-20 px-10 text-center rounded-xl mx-4">
          <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
          <p className="text-xl mb-8">
            Sign up and start your learning journey with us.
          </p>
          <Link
            to="/signup"
            className="bg-white text-[#3498db] py-3 px-8 rounded-full font-semibold hover:bg-[#ecf0f1] transition duration-300"
          >
            Get Started
          </Link>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-10 bg-[#ecf0f1] text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#2c3e50]">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: testimonialImage1,
                text: "MBBSWALA helped me navigate the complexities of medical school admissions with ease. I highly recommend their services!",
                name: "Student A",
              },
              {
                image: testimonialImage2,
                text: "Their psychometric assessment was spot on and really helped me understand my strengths.",
                name: "Student B",
              },
              {
                image: testimonialImage3,
                text: "The NEET predictor tool gave me a realistic estimate and helped me plan my college applications effectively.",
                name: "Student C",
              },
              {
                image: testimonialImage4,
                text: "Fantastic service and very supportive staff. Highly recommend MBBSWALA.",
                name: "Student D",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300"
              >
                <img
                  src={testimonial.image}
                  alt={`Testimonial ${index + 1}`}
                  className="w-[50%] h-[44%] border-[5px] border-[#3498db] rounded-full object-cover mx-auto mb-4"
                />
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <p className="font-bold text-[#2c3e50]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="bg-gradient-to-r from-[#3498db] to-[#2980b9] text-white py-20 px-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl mb-4">
            For any queries or support, reach out to us at:
          </p>
          <p className="text-xl mb-8">
            Email: support@mbbswala.com | Phone: +1 234 567 890
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#3498db] py-3 px-8 rounded-full font-semibold hover:bg-[#ecf0f1] transition duration-300"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </>
  );
};

export default Homepage;
