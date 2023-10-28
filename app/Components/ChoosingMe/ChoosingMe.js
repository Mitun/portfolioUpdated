import React from "react";

const ChoosingMe = () => {
  const headingsForChoosing = [
    "Lean tools",
    "Problem-Solving",
    "Adaptability",
    "Communication",
    "Teamwork",
    "Attention to Detail",
    "Time Management",
    "Critical Thinking",
    "Domain Knowledge",
    "Business Acumen",
    "Ethical Considerations",
    "User-Centric Focus",
    "Continuous Learning",
    "Leadership Skills",
    "Creativity",
    "Empathy",
    "Cultural Awareness",
    "Conflict Resolution",
    "Networking",
    "Strategic Thinking",
    "Project Management",
    "Ownership",
  ];

  return (
    <div className="bg-white pb-10">
      <div className="text-4xl pt-10 pl-10 font-bold text-black">
        WHY CHOOSE ME?
      </div>
      <div className="text-2xl mt-4 ml-8 mb-4 font-bold text-black text-justify p-2 lg:pr-20 md:pr-10 xl:pr-20">
        Opt for me due to my proven below experiences, which translates into
        efficient collaboration, superior user experiences, and a strong
        alignment with your strategic business objectives, extending beyond
        technical proficiency.
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 lg:gap-4">
        {headingsForChoosing.map((heading, index) => (
          <div key={index} className="flex flex-col items-center ">
            <div className="border-2 rounded-3xl border-stone-950 h-12 w-48 flex items-center justify-center whitespace-nowrap bg-gray-50 hover:bg-orange-400">
              <p key={index}>{heading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoosingMe;
