import React from "react";
import { IoMdAdd } from "react-icons/io";
import Stars from "../assets/ddd.png";
function Feature() {
  return (
    <div>
      <section className="text-gray-600 body-font max-w-7x1 mx-auto  ">
        <div className="container px-5 py-24 w-full mx-auto ">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-[28px] font-semibold title-font text-start text-gray-900">
              Frequently asked questions
            </h1>
          </div>
          <div className="flex flex-wrap -m-2 ">
            <div className="p-2 lg:w-full md:w-full w-full ">
              <div className="h-full flex hover:bg-gray-100 items-center border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow flex justify-between items-center">
                  <h2 className="text-gray-900 title-font font-medium">
                    This is a question title
                  </h2>
                  <IoMdAdd className="hover:text-blue-600 text-[30px]" />
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-full md:w-full w-full">
              <div className="h-full flex items-center hover:bg-gray-100 border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow flex justify-between items-center">
                  <h2 className="text-gray-900 title-font font-medium">
                    This is a question title
                  </h2>
                  <IoMdAdd className="hover:text-blue-600 text-[30px]" />
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-full md:w-full w-full">
              <div className="h-full flex items-center hover:bg-gray-100 border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow flex justify-between items-center">
                  <h2 className="text-gray-900 title-font font-medium">
                    This is a question title
                  </h2>
                  <IoMdAdd className="hover:text-blue-600 text-[30px]" />
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-full md:w-full w-full">
              <div className="h-full flex items-center hover:bg-gray-100 border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow flex justify-between items-center">
                  <h2 className="text-gray-900 title-font font-medium">
                    This is a question title
                  </h2>
                  <IoMdAdd className="hover:text-blue-600 text-[30px]" />
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-full md:w-full w-full">
              <div className="h-full flex items-center hover:bg-gray-100 border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow flex justify-between items-center">
                  <h2 className="text-gray-900 title-font font-medium">
                    This is a question title
                  </h2>
                  <IoMdAdd className="hover:text-blue-600 text-[30px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="text-gray-600 max-w-8xl mx-auto body-font">
          <div className="container px-5 py-10 mx-auto flex flex-wrap bg-gray-100 rounded-xl">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
              <div className="w-full sm:p-4 px-6  pl-12 mb-6">
                <h1 className="title-font  lg:pl-20  mb-2 text-[37px] font-semibold text-gray-900">
                  Using products?
                </h1>
                <h1 className="leading-relaxed lg:pl-20 pl-3 text-[37px] font-semibold">
                  Write a review
                </h1>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/3 w-full">
                <button className="  lg:ml-20 border p-2 border-sky-500 bg-blue-600 hover:bg-white text-white hover:text-blue-600 rounded-3xl transition duration-300 w-full  leading-relaxed">
                  Write a review
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/3 rounded-lg overflow-hidden mt-6 sm:mt-0">
              <img className="object-cover object-center " src={Stars} alt="" />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Feature;
