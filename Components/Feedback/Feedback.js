import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import image1 from "../Feedback/1.png";
import image2 from "../Feedback/11.jpeg";
import image3 from "../Feedback/image.png";
import { BsQuote } from "react-icons/bs";
const Feedback = () => {
  const testimonialData = [
    {
      id: 1,
      image: image1,
      project: "LATEX PROJECT",
      message:
        "I'm really happy with your determination and commitment to finish my project, particularly as it needed to be completed under pressure. I know it wasn't easy, but I knew you could do it. Your helpful attitude shows that you can continue to take on new challenges and grow with them. Thank you for your extra effort.",
      author: " — Dhefaf F.",
      location: "Australia",
    },
    {
      id: 2,
      image: image3,
      project: "OVERLEAF PROJECT",
      message:
        "He was instrumental in formatting our technical project and documentation in Overleaf and ensuring flawless citation. His attention to detail and prompt service made our completing the project procedures seamlessly. Highly recommended.",
      author: " — BIngersoll",
      location: "USA",
    },
    {
      id: 3,
      image: image2,
      project: "DISSERTATION ",
      message:
        "Working with Mitun on the classification project was a fantastic experience. His dedication and knowledge truly made a difference in my project's success. I highly recommend Mitun for any deep learning projects!",
      author: " — M. Rahman",
      location: "Bangladesh",
    },
  ];
  return (
    <div>
      <div className="text-4xl pt-10 pl-10 font-bold text-white mb-6">
        CUSTOMER FEEDBACK
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-4">
        {testimonialData.map((item) => (
          <div
            key={item.id}
            className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden mb-10 bg-white w-72"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 flex items-center justify-center">
                {item.project}
              </div>
              <div className="flex space-x-1 items-center justify-center mb-4">
                <FaStar className="text-3xl text-yellow-500" />
                <FaStar className="text-3xl text-yellow-500" />
                <FaStar className="text-3xl text-yellow-500" />
                <FaStar className="text-3xl text-yellow-500" />
                <FaStar className="text-3xl text-yellow-500" />
              </div>
              <Image
                src={item.image}
                alt="Tijan Bitmoji"
                height={10}
                width={80}
                className="mx-auto rounded-full mb-4"
              />
              <p class="text-gray-700 text-base text-justify mb-4">
                &quot; {item.message} &quot;
              </p>
              <p class="text-gray-700 text-base text-justify flex items-center justify-center">
                {item.author}{" "}
              </p>
              <p className="flex items-center justify-center">
                {item.location}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
