import React, { Fragment, useContext, useEffect, useState } from "react";
import Context from "../../context/ResidualWolf/Context";
import ReactPlayer from 'react-player';
import Footer from "../Footer/Footer";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import MobileSidebar from "../HomeNavbar/MobileSidebar/MobileSidebar";
import { useHistory } from "react-router-dom";
import Badge from 'react-bootstrap/Badge'

export default () => {
  const context = useContext(Context);
  const [value, setValue] = useState("04");

  const { getVideos, videos } = context;
  useEffect(() => {
    getVideos();
  }, []);

  const [items, setItems] = useState(videos);

  let filteredItems = videos.filter((post) => {
    return post.createdAt.slice(5, 7).includes(value);
  });
  let history = useHistory();
  const handleCategoryClick = (id) => {
    history.push("/blog-list");
  };

  const search = (e) => {
    filteredItems = videos.filter(p=>{
      console.log(p);
      for (let i=0;i<p.tags.length;i++) {
        if (p.tags[i].includes(e.target.value)) {
          return p;
        }
      }
    })
    setItems(filteredItems);
    console.log(e.target.value)
  }

  const controls = true;

  return (
    <Fragment>
      <HomeNavbar handleCategoryClick={handleCategoryClick} />
      <div className="home-page-wrapper">
        <section className="home">
          <div className="container-fluid pb-2 mt-5 mb-3">
            <div className="row mt-3">
              <div className="col-12">
                <div className="col-md-12 text-center">
                  <h2 className="title text-white">Videos</h2>
                  <h6 className="sub-title text-white">Videos Pages</h6>
                  <hr className="mb-5 hr"></hr>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-4 col-md-5 col-sm-12 col-12">
                    <div className="input-group mb-5 w-100 ml-3">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-filter text-primaryColor"></i>
                        </div>
                      </div>
                      <select
                        type="text"
                        className="form-control-filter"
                        placeholder="Search your videos"
                        value={value}
                        onChange={(e) => {
                          setValue(e.target.value);
                          setItems(filteredItems);
                        }}
                      >
                        <option
                          className="card text-white font-regular"
                          value="04"
                          disabled
                        >
                          Filter By Month
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="01"
                        >
                          January
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="02"
                        >
                          Feburary
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="03"
                        >
                          March
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="04"
                        >
                          April
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="05"
                        >
                          May
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="06"
                        >
                          June
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="07"
                        >
                          July
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="08"
                        >
                          August
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="09"
                        >
                          September
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="10"
                        >
                          October
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="11"
                        >
                          November
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="12"
                        >
                          December
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5 col-sm-12 col-12">
                    <div className="input-group mb-5 w-100 ml-3">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-search text-primaryColor"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control-filter"
                        placeholder="Search your videos"
                        onChange={(e) => {
                          search(e)
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="row d-flex justify-content-center">
                  {/* <div className="col-lg-2 col-md-12 col-sm-12 col-12 advertisement px-0 d-lg-block d-none">
                    <div className="card h-100">
                      <img
                        src="https://source.unsplash.com/random/200x285"
                        alt=""
                        className="img-fluid h-100"
                        style={{ borderRadius: "20px" }}
                      />
                    </div>
                  </div> */}
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    {items && items.length > 0 ? (
                      items.map((post, i) => {
                          console.log(post)
                        return (
                          <>
                            <ReactPlayer url={post.url} controls={controls} width='90%' height="400px" key={i} className="mt-5 react-player-video" />
                            {post.tags?.length > 0 ? (
                              <div class="badge-container">
                              {post.tags.map(t => {
                                return <Badge variant="secondary" key="t" className="mr-1 mb-5 mt-1">{t}</Badge>
                              })}
                              </div>
                            ) : ''}
                          </>
                        )
                      })
                    ) : (
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-center font-demi font-20 text-white">
                          No Videos matched your search
                        </div>
                      </div>
                    )}
                  </div>
                  {/* <div className="col-lg-2 col-md-12 col-sm-12 col-12 advertisement px-0 d-lg-block d-none">
                    <div className="card h-100">
                      <img
                        src="https://source.unsplash.com/random/200x285"
                        alt=""
                        className="img-fluid  h-100"
                        style={{ borderRadius: "20px" }}
                      />
                    </div>
                  </div> */}
                </div>
                <div className="col-1"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <MobileSidebar />
      <Footer />
    </Fragment>
  );
};
