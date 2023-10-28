import React from "react";
import Image from "next/image";
import certificateImage from "./certificate.PNG";
const Projects = () => {
  return (
    <div className="bggBlock">
      <div className=" pt-10 font-bold ml-10  text-4xl mb-6 text-white ">
        PROBLEM SOLVING(DApp PROJECTS)
      </div>
      <div>
        <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden mb-10 bg-white w-10/12 ">
          <Image
            src={certificateImage}
            alt="Project1"
            height={460}
            width={380}
            className="w-full h-68 object-cover"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Certificate Verification System
            </div>
            <p class="text-gray-700 text-base text-justify">
              <span className=" font-bold bg-orange-200 p-1   ">
                OPPORTUNITY:
              </span>{" "}
              Traditional certificate verification systems are insecure,
              time-consuming, and lack user control, resulting in inefficiency
              and data vulnerability.
            </p>
            <p class="text-gray-700 text-base text-justify">
              <span className="font-bold bg-orange-200 p-1 ">SOLUTION:</span> In
              this decentralized certificate verification system user can
              control their data, strore their data(payable: 0.1MATIC) and view
              their data and change their data visibility state anytime. DID is
              applied to control the data privacy by the owner of the data.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 mb-2">
            <span className="mb-2 inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">
              Blockchain
            </span>
            <span className="ml-3 mb-2   inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
              Smart Contracts
            </span>
            <span className="ml-3 mb-2  inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
              Polygon
            </span>
            <span className="ml-3 mb-2  inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
              Decentralized Identity
            </span>
            <span className="ml-3 mb-2  inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
              Payable
            </span>
          </div>

          <div className=" ">
            <a
              href="https://github.com/Mitun/authenticationCertificateData "
              target="_blank"
              rel="noopener noreferrer"
              // className="  outline-pink-500"
            >
              <button className="w-full mb-1 bg-blue-500 p-4 text-white font-bold text-xl hover:bg-orange-400 ">
                Check Code
              </button>
            </a>
          </div>
          <div className=" ">
            <a
              href="https://authentication-certificate-data.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              // className="  outline-pink-500"
            >
              <button className="w-full bg-blue-500 p-4 text-white font-bold text-xl hover:bg-orange-400 ">
                View Details
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
