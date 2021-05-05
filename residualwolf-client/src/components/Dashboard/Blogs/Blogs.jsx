import React, { useState, useContext, useEffect, useRef } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "react-bootstrap";
import "../Dashboard.css";
import swal from "sweetalert";
import { _BASE_URL } from "../../../ApiUrls";
import Context from "../../../context/ResidualWolf/Context";
import SingleBlog from "./SingleBlog";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";


function Blogs() {
  const initialState = {
    title: "",
    desc: "",
    url: "",
    category: "",
    tags: [],
    shortDescription : ""
  };
  const context = useContext(Context);
  const [formData, setFormData] = useState(initialState);
  const [showModal, setShowModal] = useState(false);
  const [fileOneValue, setFileOneValue] = useState('');
  const [fileOne, setFileOne] = useState("");
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const editorRef = useRef();
  const { getPosts, posts ,getCategories, categories } = context;
  useEffect(() => {
    getPosts();
  }, [posts]);
  
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
  
  useEffect(() => {
     console.log(editorRef.current?.editor.core);
  }, []);
  const handleChange = (content)=>{
    setFormData({
      ...formData,
      desc: content,
    })
  }
  useEffect(() => {
    getCategories();
  }, []);
  const updateBlog = (e) => {
    e.preventDefault();
    axios
      .post(
        _BASE_URL + `/blog`,
        {
          blog: {
              title: formData.title,
              description: formData.desc,
              imageUrl: formData.url,
              category : formData.category,
              tags : formData.tags,
              shortDescription: formData.shortDescription
            },
            base64image : {
              fileOneValue
            }
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log(res);
        swal("", "This blog is updated", "success");
        setShowModal(false);
        setFormData(initialState);
      })
      .catch((err) => {
        swal("", err.message, "error");
      });
  };

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
const setOptions = {
  buttonList:      [ ['font', 'fontSize', 'formatBlock'],
  ['bold', 'underline', 'italic', 'removeFormat'],
  ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list'],
  ['link', 'image', 'video', 'fullScreen', 'preview']],
  dialogBox: {

    linkBox: {

        title: 'Insert Link',

        url: 'URL to link',

        text: 'Text to display',

        newWindowCheck: 'Open in new window'

    },

    imageBox: {

        title: 'Insert image',

        file: 'Select from files',

        url: 'Image URL',

        altText: 'Alternative text'

    },

    videoBox: {

        title: 'Insert Video',

        url: 'Media embed URL, YouTube'

    },
  }
}
  return (
    <div>
      <Sidebar />

      {showModal ? (
        <Modal className="mt-5 modal-card" show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">Add a Blog</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="w-100 h-100">
              <form>
                <div className="form-group">
                  <label className="font-20 font-bold">Title</label>
                  <input
                    name="title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ['title']: e.target.value,
                      })
                    }
                    type="text"
                    className="form-control mt-3"
                    id="exampleFormControlInput1"
                    placeholder="Blog Title"
                    required
                  />
                </div>
                <div className="form-group">
                <label className="font-20 font-bold">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={(e) => {
                      console.log(e.target.name,e.target.value);
                      setFormData({
                        ...formData,
                        ['category']: e.target.value,
                      })}
                    }
                    className="form-control mt-3"
                    required
                  >
                    {categories && categories.length>0 ? 
                    categories.map((c,i)=>{
                       return <option value={c._id} key={i}>{c.name}</option>
                    }): ''}
                  </select>
                </div>
                <div className="form-group">
                  <label className="font-20 font-bold">Image</label>
                  <img src={fileOne} className="img-fluid"/>
                  <button className="font-20 font-bold bg-tertiaryColor w-100 mt-2" onClick={()=>document.getElementById('upload')?.click()}>Upload</button>
                  <input
                    onChange={(e) =>{
                      setFileOne(URL.createObjectURL(e.target.files[0]));
                      toBase64(e.target.files[0]).then(r=>{
                        setFileOneValue(r);
                      })
                    }}
                    type="file"
                    className="hidden"
                    id="upload"
                    placeholder="Blog Title"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="font-20 font-bold">Tags</label>
                  <input
                    name="tags"
                    value={formData.tags?.join()}
                    onChange={(e) => {
                      console.log(e);
                      setFormData({
                        ...formData,
                        ['tags']: e.target.value.split(','),
                      })}
                    }
                    type="text"
                    className="form-control mt-3"
                    id="exampleFormControlInput1"
                    placeholder="Blog Tags (comma seperated)"
                    required
                  />
                </div>
                <div className="form-group">
                <label className="font-20 font-bold">Short Description</label>
                  <textarea
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={(e) => {
                      console.log(e);
                      setFormData({
                        ...formData,
                        ['shortDescription']: e.target.value,
                      })}
                    }
                    className="form-control mt-3"
                    id="exampleFormControlInput1"
                    placeholder="Short Description for cards"
                    required
                  />
                </div>
                <div className="form-group">
                <label className="font-20 font-bold mb-1">Description</label>
                  <SunEditor 
                  ref={editorRef} 
                  height="100" 
                  placeholder="Please add yor blog here..." 
                  onChange={handleChange} 
                  setContents={formData.desc}
                  setOptions={setOptions}/>
                  {/* <textarea
                    value={formData.desc}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    name="desc"
                    className="form-control mt-3 mb-4"
                    id="exampleFormControlInput1"
                    placeholder="Category Description"
                    required
                  /> */}
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={updateBlog}
                >
                  Upload
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
