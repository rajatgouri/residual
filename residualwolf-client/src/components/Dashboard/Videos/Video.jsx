import React , { useState ,useContext, useEffect} from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles, useTheme, withTheme } from "@material-ui/core/styles";
import swal from "sweetalert";
import axios from "axios";
import { _BASE_URL } from "../../../ApiUrls";
import { Modal } from "react-bootstrap";
import Context from "../../../context/ResidualWolf/Context";
import ReactPlayer from 'react-player';
import { Multiselect } from 'multiselect-react-dropdown';

function Video() {
  const initialState = {
    name: "",
    tags: []
  };
  const [formData, setFormData] = useState(initialState);
  const [showModal, setShowModal] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = (name,tags,id) => {
    setShowModal(true);
    if (name.length === 0 ) {
      setShowSubmit(false);
    } else {
      setShowSubmit(true);
    }
    console.log(tags);
    setFormData({
      name,
      tags,
      id
    });
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },    
    content: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  }));
  const context = useContext(Context);
  const { getVideos, videos ,getTags , tags} = context;

  const controls = true;
  
  useEffect(() => {
    getVideos();
  },[videos]);

  useEffect(() => {
    getTags();
  },[]);

  const options = tags.map(t=>t.name)
  
  const classes = useStyles();
  
  const deleteBlog = (e,id) => {
    e.preventDefault();
    axios
      .delete(_BASE_URL + `/videos/${id}`)
      .then((res) => {
        swal("", "This video is deleted", "success");
      })
      .catch((err) => {
        swal("", err.message, "error");
      });
  
    };
  const createCategory = (e) => {
    e.preventDefault();
    axios
      .post(
        _BASE_URL + `/add-video`,
        {
          url: formData.name,
          tags: formData.tags,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        swal("", "This video is added", "success");
        setShowModal(false);
        setFormData(initialState);
      })
      .catch((err) => {
        swal("", err.message, "error");
      });
  };

  const updateCategory = (e) => {
    e.preventDefault();
    axios
      .patch(
        _BASE_URL + `/videos/${formData.id}`,
        {
          name: formData.name,
          tags: formData.tags,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        swal("", "This video is updated", "success");
        setShowModal(false);
        setFormData(initialState);
      })
      .catch((err) => {
        swal("", err.message, "error");
      });
  };
  return (
    <div>
      <Sidebar />
      {showModal ? (
        <Modal className="mt-5" show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">
                Video
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="w-100 h-100">
          <form>
                <div className="form-group">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    type="text"
                    className="form-control mt-3"
                    id="exampleFormControlInput1"
                    placeholder="Video URL"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="font-20 font-bold">Tags</label>
                  {options && options.length>0?  (
                  <Multiselect
                  displayValue="Tags"
                  options={options} isObject={false}
                  selectedValues={formData.tags}
                  onSelect={(e)=>{
                    setFormData({
                      ...formData,
                      tags: e,
                    })
                    console.log(formData);
                  }} />
                  ):''}
                </div>
                {showSubmit ? (
                <button 
                type="submit" 
                className="btn btn-primary"
                onClick={updateCategory}>
                  Change
                </button>
                ) : (
                  <button 
                  type="submit" 
                  className="btn btn-primary"
                  onClick={createCategory}>
                    Add
                  </button>
                )}
              </form>
          </div>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
      <main className={classes.content}>        
        <div className="container w-100 h-100">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-12 col-md-12 d-flex justify-content-end">
              <button className="btn btn-primary" onClick={(e)=>handleShow('')}>Add a Video</button>
            </div>
          </div>
          {videos && videos.length > 0
              ? videos.map((category, i) => {
                return (
                  <div class="row mb-5 mt-3" key={i} index={i}>
                  <div class="col-lg-8 col-md-10 col-sm-12 col-12 mb-3 padding-left-mobile">
                      <div class="card font-regular bg-adminPrimary">
                        <div class="card-body">
                        <ReactPlayer url={category.url} controls={controls} width='100%' height="250px" />
                          <button 
                          class="btn btn-primary mt-3"
                          onClick={(e) =>
                            handleShow(category.url,category.tags,category._id)
                          }>Edit</button>
                          <button 
                          class="btn btn-danger ml-3 mt-3"
                          onClick={(e) =>
                            deleteBlog(e,category._id)
                          }>Delete</button>
                        </div>
                      </div>
                    </div>
                    </div>
                )
               }) : '' }
          </div>
      </main>
    </div>
  );
}

export default Video;
