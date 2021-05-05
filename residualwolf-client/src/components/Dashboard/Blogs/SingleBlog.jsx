import axios from "axios";
import React, { useState , useEffect ,useRef , useContext} from "react";
import swal from "sweetalert";
import { _BASE_URL } from "../../../ApiUrls";
import { Modal } from "react-bootstrap";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import Context from "../../../context/ResidualWolf/Context";

function SingleBlog({ post }) {
  const initialState = {
    title: "",
    desc: "",
    url: "",
    category: "",
    tags: [],
    shortDescription : ""
  };
  const [formData, setFormData] = useState(initialState);
  const [showModal, setShowModal] = useState(false);
  const [fileOneValue, setFileOneValue] = useState(false);
  const [fileOne, setFileOne] = useState("");
  function handleImage(dataUri) {
    dataUri && setFileOneValue(false);
    setFileOne(dataUri);
  }
  const handleShow = (title, url, desc,category ,tags ,shortDescription) => {
    setShowModal(true);
    setFileOne(url);
    setFormData({
      title,
      desc,
      url,
      category,
      tags,
      shortDescription
    });
  };
  const handleClose = () => setShowModal(false);

  const deleteBlog = (e) => {
    e.preventDefault();
    axios
      .delete(_BASE_URL + `/blog/${post._id}`)
      .then((res) => {
        swal("", "This blog is deleted", "success");
      })
      .catch((err) => {
        swal("", err.message, "error");
      });
  };
  const editorRef = useRef();
  
  useEffect(() => {
     console.log(editorRef.current?.editor.core);
  }, []);
  const handleChange = (content)=>{
    setFormData({
      ...formData,
      desc: content,
    })
  }
  const context = useContext(Context);
  const { getCategories, categories } = context;
  useEffect(() => {
    getCategories();
  }, []);
  const updateBlog = (e) => {
    e.preventDefault();
    axios
      .patch(
        _BASE_URL + `/blog/${post._id}`,
        {
          blog: {
              title: formData.title,
              description: formData.desc,
              imageUrl: formData.url,
              category : formData.category,
              tags : formData.tags,
              shortDescription: formData.shortDescription
            }
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        swal("", "This blog is updated", "success");
        setShowModal(false);
        setFormData(initialState);
      })
      .catch((err) => {
        swal("", err.message, "error");
      });
  };
  return (
    <>
      {showModal ? (
        <Modal className="mt-5" show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">Edit a blog</div>
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
                        [e.target.name]: e.target.value,
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
                        [e.target.name]: e.target.value,
                      })}
                    }
                    className="form-control mt-3"
                    required
                  >
                    {categories && categories.length>0 ? 
                    categories.map(c=>{
                       return <option value={c._id}>{c.name}</option>
                    }): ''}
                  </select>
                </div>
                <div className="form-group">
                  <label className="font-20 font-bold">Image</label>
                  <img src={fileOne} className="img-fluid blog-image"/>
                  <button className="font-20 font-bold bg-tertiaryColor w-100 mt-2" onClick={()=>document.getElementById('upload')?.click()}>Upload</button>
                  <input
                    onChange={(e) =>
                      setFileOne(URL.createObjectURL(e.target.files[0]))
                    }
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
                        [e.target.name]: e.target.value.split(','),
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
                        [e.target.name]: e.target.value,
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
                  <SunEditor ref={editorRef} height="100" placeholder="Please add yor blog here..." onChange={handleChange} setContents={formData.desc}/>
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
                  Edit
                </button>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
      <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-4" key={post._id}>
        <div className="card bg-adminPrimary font-regular h-100 mb-0 py-0">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-6 col-6">
              <img
                className="img-fluid blog-image"
                src={post.imageUrl}
                alt="Card image cap"
                style={{ borderRadius: "20px 0px 0px 20px" }}
              />
            </div>
            <div className="col-lg-7 col-md-6 col-sm-6 col-6 pt-4 pb-2">
              <i class="far fa-clock"></i>&nbsp;&nbsp;
              <span className="font-medium">
                {post.createdAt.slice(-post.createdAt.length, 10)}
              </span>
              <h5 className=" mt-3 font-demi mb-2  pr-3">
                {post.title.length > 30
                  ? post.title.substring(0, 30) + "..."
                  : post.title}
              </h5>
              <p className="mt-2 mb-2 font-medium  pr-3">
                {post.shortDescription?.substring(0, 150) + "..."}
              </p>
              <div className="mt-3">
                <button
                  className="btn btn-primary mr-2"
                  //   onClick={handleShow(
                  //     post.title,
                  //     post.description,
                  //     post.imageUrl
                  //   )}
                  onClick={(e) =>
                    handleShow(post.title, post.imageUrl, post.description ,post.category , post.tags , post.shortDescription)
                  }
                >
                  Edit
                </button>
                <button className="btn btn-danger mr-2" onClick={deleteBlog}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
