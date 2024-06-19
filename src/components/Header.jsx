import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import HeroInfo from "./HeroInfo";

function Header() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/records")
      .then((res) => {
        setRecords(res.data);
      })
      .catch((error) => {
        console.error("Error fetching records:", error);
      });
  }, []);

  const titleStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    width: "100%",
  };

  const textStyle = {
    maxWidth: "900px",
    width: "100%",
    margin: "0 auto",
  };

  return (
    <>
      <HeroInfo
        title={"Category title"}
        text={
          "Accounting software automates an organization's financial functions and transactions with modules including accounts payable, accounts receivable, payroll, billing and general ledger."
        }
        textStyle={textStyle}
        titleStyle={titleStyle}
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 sm:py-18 py-10 mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {records.length > 0 ? (
              records.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-full mx-auto sm:w-1/2 lg:w-1/3  xl:w-[450px] "
                >
                  <div className="bg-white border-2  border-gray-200 rounded-md hover:bg-gray-50">
                    <div className="h-full flex flex-col">
                      <div className="flex-grow p-6">
                        <span className="flex justify-between items-center">
                          <div className="h-12 flex-shrink-0 flex flex-col text-center leading-none">
                            <img
                              src="/Avatar.svg"
                              alt="Avatar"
                              className="h-full"
                            />
                          </div>
                          <h1 className="text-xl sm:pr-[90px] font-medium text-gray-900 mb-3">
                            {item.title}
                          </h1>
                          <div className="flex items-center mb-3">
                            <FaStar className="hover:text-yellow-500" />
                            <p className="pl-2">4/5</p>
                            <span className="text-blue-600 pl-2 border-b-2 border-blue-500">
                              (20 reviews)
                            </span>
                          </div>
                        </span>
                        <button className="text-xs  font-medium border-2 border-gray-200 hover:bg-blue-600 text-gray-400 hover:text-white mb-3 ml-[80px] px-4 py-1 rounded">
                          CATEGORY
                        </button>
                        <p className="leading-relaxed ">{item.content}</p>
                        <a
                          href="#"
                          className="text-blue-600 border-b-2  border-blue-500  hover:text-gray-400"
                        >
                          Read more
                        </a>
                      </div>
                      <div className="flex  justify-center gap-5 p-4 ">
                        <a
                          href="#"
                          className="border border-sky-500 bg-blue-600 hover:bg-white text-white hover:text-blue-600 rounded-3xl py-1 px-4 transition duration-300"
                        >
                          Claim profile
                        </a>
                        <a
                          href="#"
                          className="border border-sky-500 bg-blue-600 hover:bg-white text-white hover:text-blue-600 rounded-3xl py-1 px-4 transition duration-300"
                        >
                          Write a review
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No records found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
