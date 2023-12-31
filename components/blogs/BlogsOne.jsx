"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { blogs } from "@/data/blog";
import Link from "next/link";
import { getBlogsByCategory, getallBlogCategory } from "@/service/blog";
import moment from "moment";
export default function BlogsOne() {
  const [pageItems, setPageItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('ALL');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategory()

  }, [])
  useEffect(() => {
   
    getblogBycategory(currentCategory)
   
  }, [])

  

  const getAllCategory = async() => {
    await getallBlogCategory().then(({data}) => { 
      console.log("blogs", data)
      setCategories(data?.category)
    })
  }

  const getblogBycategory = async (currentCategory) => {
    await getBlogsByCategory(currentCategory).then(({data}) => { 
      setCurrentCategory(currentCategory)
    setPageItems(data?.blog)
    })
  }
  
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">Latest Blogs and Events</h1>
                </div>

                <div>
                  {/* <p className="page-header__text">
                    We’re on a mission to deliver engaging, curated courses at a
                    reasonable price.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-sm layout-pb-lg">
        <div className="container">
          <div className="tabs -pills js-tabs">
            <div className="tabs__controls d-flex justify-center flex-wrap y-gap-20 x-gap-10 js-tabs-controls">
              {categories.map((elm, i) => (
                <div key={i} onClick={() => getblogBycategory(elm?.category)}>
                  <button
                    className={`tabs__button px-15 py-8 rounded-8 js-tabs-button ${
                      currentCategory == elm?.category ? "is-active" : ""
                    } `}
                    data-tab-target=".-tab-item-1"
                    type="button"
                  >
                    {elm?.category_title}
                  </button>
                </div>
              ))}
            </div>

            <div className="tabs__content pt-40 js-tabs-content">
              <div className="tabs__pane -tab-item-1 is-active">
                <div className="row y-gap-30">
                  {pageItems.map((elm, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                      <div className="blogCard -type-1">
                        <div className="blogCard__image">
                          <img
                            width={530}
                            height={450}
                            className="w-1/1 rounded-8"
                            src={elm.thumbnail}
                            alt="image"
                          />
                        </div>
                        <div className="blogCard__content mt-20">
                          <div className="blogCard__category">
                            {elm.category.toUpperCase()}
                          </div>
                          <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                            <Link
                              className="linkCustom"
                              href={`/blogs/${elm._id}`}
                            >
                              {elm.title}
                            </Link>
                          </h4>
                          <div className="blogCard__date text-14 mt-5">
                            {moment(elm.createdAt).format('DD-MM-YYYY')}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <div className="row justify-center pt-60 lg:pt-40">
                  <div className="col-auto">
                    <div className="pagination -buttons">
                      <button className="pagination__button -prev">
                        <i className="icon icon-chevron-left"></i>
                      </button>

                      <div className="pagination__count">
                        <a href="#">1</a>
                        <a className="-count-is-active" href="#">
                          2
                        </a>
                        <a href="#">3</a>
                        <span>...</span>
                        <a href="#">67</a>
                      </div>

                      <button className="pagination__button -next">
                        <i className="icon icon-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
