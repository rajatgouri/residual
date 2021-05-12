import React , { useState ,useContext, useEffect} from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles, useTheme, withTheme } from "@material-ui/core/styles";
import swal from "sweetalert";
import axios from "axios";
import { _BASE_URL } from "../../../ApiUrls";
import { Modal } from "react-bootstrap";
import Context from "../../../context/ResidualWolf/Context";

function Tags() {
  const initialState = {
    name: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [showModal, setShowModal] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = (name,id) => {
    setShowModal(true);
    if (name.length === 0 ) {
      setShowSubmit(false);
    } else {
      setShowSubmit(true);
    }
    setFormData({
      name,
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
  const { getTags, tags } = context;
  
  useEffect(() => {
    getTags();
  },[tags]);
  
  const classes = useStyles();
  
  const deleteBlog = (e,id) => {
    e.preventDefault();
    axios
      .delete(_BASE_URL + `/tags/${id}`)
      .then((res) => {
        swal("", "This tag is deleted", "success");
      })
      .catch((err) => {
        swal("", err.message, "error");
      });
  
    };
  const createCategory = (e) => {
    e.preventDefault();
    axios
      .post(
        _BASE_URL + `/add-tag`,
        {
          name: formData.name,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        swal("", "This tag is added", "success");
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
        _BASE_URL + `/tags/${formData.id}`,
        {
          name: formData.name,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        swal("", "This tag is updated", "success");
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
                Tag
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
                    placeholder="Tag Name"
                    required
                  />
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
              <button className="btn btn-primary" onClick={(e)=>handleShow('')}>Add a Tag</button>
            </div>
          </div>
          {tags && tags.length > 0
              ? tags.map((category, i) => {
                return (
                  <div class="row mb-5 mt-3" key={i} index={i}>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3 padding-left-mobile">
                      <div class="card font-regular bg-adminPrimary">
                        <div class="card-body">
                          <h5 class="text-dark font-weight-bold mt-2">
                            {category.name}
                          </h5>
                          <button 
                          class="btn btn-primary"
                          onClick={(e) =>
                            handleShow(category.name,category._id)
                          }>Edit</button>
                          <button 
                          class="btn btn-danger ml-3"
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

export default Tags;
