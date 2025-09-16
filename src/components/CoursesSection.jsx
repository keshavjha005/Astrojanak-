import React from "react";
import { GraduationCap, Users } from "lucide-react";

const courses = [
  {
    title: "Advanced Astrology Course",
    image: "https://astroarunpandit.org/wp-content/uploads/2023/06/learn-advanced-astrology-course-by-astro-arun-pandit-best-astrologer-in-india.jpg", // Replace with your actual path
    certified: true,
    students: "500+ Students Enrolled",
  },
  {
    title: "Advanced Numerology Course",
    image: "https://astroarunpandit.org/wp-content/uploads/2022/11/3-768x432-1-300x169.jpg", // Replace with your actual path
    certified: true,
    students: "500+ Students Enrolled",
  },
  {
    title: "Lal Kitab Course",
    image: "https://astroarunpandit.org/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-03-at-19.05.39_1a5bef26-768x432.jpg", // Replace with your actual path
    certified: true,
    students: "500+ Students Enrolled",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#822f20] mb-12">
          Explore Our Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full object-cover"
              />
              <div className="p-5 text-left">
                <div className="flex items-center justify-between text-[#822f20] mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap size={18} />
                    <span>Certified Course</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users size={18} />
                    <span>{course.students}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-[#b3281f] hover:bg-[#9f2018] text-white font-semibold py-2 rounded-lg transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default CoursesSection;
