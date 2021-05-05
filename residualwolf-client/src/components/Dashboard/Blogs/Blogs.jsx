import React, { useState, useContext, useEffect, useRef } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "react-bootstrap";
import "../Dashboard.css";
import Context from "../../../context/ResidualWolf/Context";
import SingleBlog from "./SingleBlog";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";


function Blogs() {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const editorRef = useRef();

  const context = useContext(Context);
  const { getPosts, posts } = context;
  useEffect(() => {
    getPosts();
  }, []);
  
  useEffect(() => {
    console.log(editorRef.current?.editor.core);
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const handleChange = (content) => {
    console.log(content); //Get Content Inside Editor
  }
  return (
    <div>
      <Sidebar />

      {showModal ? (
        <Modal className="mt-5" show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">Add a Blog</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="w-100 h-100">
              <form>
                <div className="form-group">
                  <input
                    name="title"
                    type="text"
                    className="form-control mt-3"
                    id="exampleFormControlInput1"
                    placeholder="Blog Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    name="file"
                    type="text"
                    className="form-control mt-3"
                    id="exampleFormControlInput1"
                    placeholder="Blog Image"
                    required
                  />
                </div>
                <div className="form-group">
                  <SunEditor
                    ref={editorRef}
                    height="100"
                    placeholder="Please add yor blog here..."
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Add
                </button>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
      <main className={classes.content}>
        <div class="container padding-left-mobile">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-12 col-md-12 d-flex justify-content-end">
              <button class="btn btn-primary" onClick={handleShow}>
                Add a blog
              </button>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-4">
            {posts && posts.length > 0
              ? posts.map((post, i) => {
                  return <SingleBlog post={post} key={i} index={i} />;
                })
              : ""}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blogs;
