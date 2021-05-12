import React, { Fragment, useContext, useEffect , useState} from "react";
import Context from "../../context/ResidualWolf/Context";
import Blog from "./CardNew";
import Spinner from "./Spinner";
import Footer from "../Footer/Footer";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import MobileSidebar from "../HomeNavbar/MobileSidebar/MobileSidebar";
import { TextareaAutosize } from "@material-ui/core";

export default () => {
  const context = useContext(Context);
  const { getPosts, posts ,getVideos , videos} = context;

  const [items, setItems] = useState(posts);
  const [usePosts, setUsePosts] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    getVideos();
  }, []);
  const handleCategoryClick = (id) => {
    setUsePosts(false);
    if (id=='all') {
      setItems(posts);
      return ;
    }
    let filteredItems = posts.filter((post) => {
      return post.category.includes(id);
    });
    console.log(id);
    setItems(filteredItems);
  };

  return (
    <Fragment>
      <HomeNavbar handleCategoryClick={handleCategoryClick}/>
      <div className="home-page-wrapper">
        <section className="home">
          <div className="container-fluid pb-2 mb-3">
            <div className="row mt-5">
              <div className="col-12 pl-4 pr-4 mt-4 ">
                <h3 className="text-white font-demi text-center">
                  Our Latest Blogs
                </h3>
                <hr className="mb-4 hr" />
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
                  {posts && posts.length > 0 && usePosts? (
                        posts.map((post, i) => {
                          return (
                            i < 3 && <Blog post={post} key={i} index={i} />
                          );
                        })
                      ):items && items.length > 0 ? (
                        items.map((post, i) => {
                          return (
                            i < 3 && <Blog post={post} key={i} index={i} />
                          );
                        })
                      ) : items ? (
                        <h6 className="text-white font-demi">
                        No Blogs in this Category !
                      </h6>
                      )
                      : (
                        <Spinner></Spinner>
                      )}
                  </div>                  
                </div>

                <h3 className="text-white font-demi text-center mt-5 pt-5">
                  Popular Blogs
                </h3>
                <hr className="mb-4 hr" />
                <div className="row d-flex justify-content-center pr-3 mb-5">
                 
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="row">
                      {posts && posts.length > 0 && usePosts? (
                        posts.map((post, i) => {
                          return (
                            i < 3 && <Blog post={post} key={i} index={i} />
                          );
                        })
                      ):items && items.length > 0 ? (
                        items.map((post, i) => {
                          return (
                            i < 3 && <Blog post={post} key={i} index={i} />
                          );
                        })
                      ) : items ? (
                        <h6 className="text-white font-demi ml-2">
                        No Blogs in this Category !
                      </h6>
                      )
                      : (
                        <Spinner></Spinner>
                      )}
                    </div>
                  </div>
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
