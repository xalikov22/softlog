import Navbar from "../components/Navbar";
import axios from "axios";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import HeroInfo from "../components/HeroInfo";

function Blog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const titleStyle = {
    maxWidth: "700px",
    margin: "0 auto",
    width: "100%",
  };

  const textStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    width: "100%",
  };

  return (
    <div>
      <Navbar />
      <HeroInfo
        title={"This is a blog overview title"}
        text={
          "You will be overwhelmed by the choices of software available on the market these days. One helpful resource is a software review blog, which provides detailed reviews and recommendations to make it easier for you to find the right software for your need."
        }
        textStyle={textStyle}
        titleStyle={titleStyle}
      />

      <div className="container px-5 sm:py-18 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.length > 0 ? (
            products.map((item) => (
              <div key={item.id} className="p-4 lg:w-1/2">
                <div className="bg-white border-2 border-gray-200 rounded-md flex hover:bg-gray-100">
                  <div className="h-full flex flex-col">
                    <div className="flex-grow p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-6 gap-3 flex-shrink-0 flex items-center text-center leading-none">
                          <img
                            src="/public/two.png"
                            alt="Avatar"
                            className="h-full"
                          />
                          <h1 className=" text-gray-900">{item.title}</h1>
                        </div>
                      </div>

                      <p className="leading-relaxed text-xl font-medium mb-2">
                        {item.content}
                      </p>
                    </div>
                    <span className="inline-flex gap-5 pl-8 sm:pl-8">
                      <p className="text-gray-500 ">Nov 4, 2022</p>

                      <a className="ml-2 px-7  text-gray-500 pb-8">
                        <button className=" px-5 border hover:bg-blue-600 hover:text-white border-gray-400">
                          Label
                        </button>
                      </a>
                    </span>
                  </div>
                  <img
                    className="flex-shrink-0 rounded-lg  w-48 my-3 hidden  sm:flex h-48 object-cover object-center sm:mb-0 mb-4"
                    src="/public/1_1.png"
                    alt=""
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 ">No records found.</p>
          )}
        </div>
      </div>

      <section className="text-gray-600 max-w-8xl mx-auto body-font">
        <div className="flex flex-col text-center items-center sm:mb-20 mb-12">
          <a
            href=""
            className="py-1 px-7 border w-[200px] border-sky-500 bg-blue-600 hover:bg-white text-white hover:text-blue-600 rounded-3xl transition duration-300"
          >
            Write a review
          </a>
        </div>
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
            <img
              className="object-cover object-center "
              src="/public/ddd.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="container px-5  mx-auto">
            <h1 className="sm:text-3xl text-3xl pb-2 sm:mb-8 text-start font-semibold title-font text-gray-900">
              Related categories
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2  p-4 ">
              <div className="border border-gray-200 p-6 hover:bg-gray-100  rounded-lg">
                <div className="flex items-center sm:justify-between gap-8">
                  <span className="flex  items-center gap-5">
                    <img
                      className="w-12 sm:w-16"
                      src="/public/Avatar.svg"
                      alt=""
                    />
                    <span>
                      <h2 className="text-gray-900 text-[15px] sm:text-lg  title-font font-medium">
                        CRM Software
                      </h2>
                      <button className="leading-relaxed text-[12px] sm:mt-5  title-font font-medium border-2 border-gray-200 hover:bg-blue-600 text-gray-400  hover:text-white">
                        Sales software
                      </button>
                    </span>
                  </span>
                  <div className="flex items-center mb-3 text-[11px]">
                    <FaStar className="hover:text-yellow-500" />
                    <p className="pl-2">4/5</p>
                    <span className="text-blue-600 pl-2 border-b-2 border-blue-500">
                      (20 reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2  p-4 ">
              <div className="border border-gray-200 p-6 hover:bg-gray-100  rounded-lg">
                <div className="flex items-center sm:justify-between gap-8">
                  <span className="flex  items-center gap-5">
                    <img
                      className="w-12 sm:w-16"
                      src="/public/Avatar.svg"
                      alt=""
                    />
                    <span>
                      <h2 className="text-gray-900 text-[15px] sm:text-lg  title-font font-medium">
                        CRM Software
                      </h2>
                      <button className="leading-relaxed text-[12px] sm:mt-5  title-font font-medium border-2 border-gray-200 hover:bg-blue-600 text-gray-400  hover:text-white">
                        Sales software
                      </button>
                    </span>
                  </span>
                  <div className="flex items-center mb-3 text-[11px]">
                    <FaStar className="hover:text-yellow-500" />
                    <p className="pl-2">4/5</p>
                    <span className="text-blue-600 pl-2 border-b-2 border-blue-500">
                      (20 reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2  p-4 ">
              <div className="border border-gray-200 p-6 hover:bg-gray-100  rounded-lg">
                <div className="flex items-center sm:justify-between gap-8">
                  <span className="flex  items-center gap-5">
                    <img
                      className="w-12 sm:w-16"
                      src="/public/Avatar.svg"
                      alt=""
                    />
                    <span>
                      <h2 className="text-gray-900 text-[15px] sm:text-lg  title-font font-medium">
                        CRM Software
                      </h2>
                      <button className="leading-relaxed text-[12px] sm:mt-5  title-font font-medium border-2 border-gray-200 hover:bg-blue-600 text-gray-400  hover:text-white">
                        Sales software
                      </button>
                    </span>
                  </span>
                  <div className="flex items-center mb-3 text-[11px]">
                    <FaStar className="hover:text-yellow-500" />
                    <p className="pl-2">4/5</p>
                    <span className="text-blue-600 pl-2 border-b-2 border-blue-500">
                      (20 reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2  p-4 ">
              <div className="border border-gray-200 p-6 hover:bg-gray-100  rounded-lg">
                <div className="flex items-center sm:justify-between gap-8">
                  <span className="flex  items-center gap-5">
                    <img
                      className="w-12 sm:w-16"
                      src="/public/Avatar.svg"
                      alt=""
                    />
                    <span>
                      <h2 className="text-gray-900 text-[15px] sm:text-lg  title-font font-medium">
                        CRM Software
                      </h2>
                      <button className="leading-relaxed text-[12px] sm:mt-5  title-font font-medium border-2 border-gray-200 hover:bg-blue-600 text-gray-400  hover:text-white">
                        Sales software
                      </button>
                    </span>
                  </span>
                  <div className="flex items-center mb-3 text-[11px]">
                    <FaStar className="hover:text-yellow-500" />
                    <p className="pl-2">4/5</p>
                    <span className="text-blue-600 pl-2 border-b-2 border-blue-500">
                      (20 reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2  p-4 ">
              <div className="border border-gray-200 p-6 hover:bg-gray-100  rounded-lg">
                <div className="flex items-center sm:justify-between gap-8">
                  <span className="flex  items-center gap-5">
                    <img
                      className="w-12 sm:w-16"
                      src="/public/Avatar.svg"
                      alt=""
                    />
                    <span>
                      <h2 className="text-gray-900 text-[15px] sm:text-lg  title-font font-medium">
                        CRM Software
                      </h2>
                      <button className="leading-relaxed text-[12px] sm:mt-5  title-font font-medium border-2 border-gray-200 hover:bg-blue-600 text-gray-400  hover:text-white">
                        Sales software
                      </button>
                    </span>
                  </span>
                  <div className="flex items-center mb-3 text-[11px]">
                    <FaStar className="hover:text-yellow-500" />
                    <p className="pl-2">4/5</p>
                    <span className="text-blue-600 pl-2 border-b-2 border-blue-500">
                      (20 reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2  p-4 ">
              <div className="border border-gray-200 p-6 hover:bg-gray-100  rounded-lg">
                <div className="flex items-center sm:justify-between gap-8">
                  <span className="flex  items-center gap-5">
                    <img
                      className="w-12 sm:w-16"
                      src="/public/Avatar.svg"
                      alt=""
                    />
                    <span>
                      <h2 className="text-gray-900 text-[15px] sm:text-lg  title-font font-medium">
                        CRM Software
                      </h2>
                      <button className="leading-relaxed text-[12px] sm:mt-5  title-font font-medium border-2 border-gray-200 hover:bg-blue-600 text-gray-400  hover:text-white">
                        Sales software
                      </button>
                    </span>
                  </span>
                  <div className="flex items-center mb-3 text-[11px]">
                    <FaStar className="hover:text-yellow-500" />
                    <p className="pl-2">4/5</p>
                    <span className="text-blue-600 pl-2 border-b-2 border-blue-500">
                      (20 reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 max-w-8xl mx-auto body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap bg-gray-100 rounded-xl">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-6  pl-12 mb-6">
              <h1 className="title-font  lg:pl-20  mb-2 text-[37px] font-semibold text-gray-900">
                Selling products?
              </h1>
              <h1 className="leading-relaxed lg:pl-20 pl-3 text-[37px] font-semibold">
                Get discovered
              </h1>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full">
              <button className="  lg:ml-20 border p-2 border-sky-500 bg-blue-600 hover:bg-white text-white hover:text-blue-600 rounded-3xl transition duration-300 w-full  leading-relaxed">
                Claim your profile
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center "
              src="/public/10_2.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
