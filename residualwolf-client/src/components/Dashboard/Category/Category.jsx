import React , { useState ,useContext, useEffect} from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles, useTheme, withTheme } from "@material-ui/core/styles";
import swal from "sweetalert";
import axios from "axios";
import { _BASE_URL } from "../../../ApiUrls";
import { Modal } from "react-bootstrap";
import Context from "../../../context/ResidualWolf/Context";

function Category() {
  const initialState = {
    name: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [showModal, setShowModal] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = (name) => {
    setShowModal(true);
    if (name.length === 0 ) {
      setShowSubmit(false);
    } else {
      setShowSubmit(true);
    }
    setFormData({
      name
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
  const { getCategories, categories } = context;
  useEffect(() => {
    getCategories();
  }, [categories]);
  const classes = useStyles();
  const createCategory = (e) => {
    e.preventDefault();
    axios
      .post(
        _BASE_URL + `/add-category`,
        {
          name: formData.name,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        swal("", "This category is added", "success");
        setShowModal(false);
        setFormData(initialState);
      })
      .catch((err) => {
        swal("", err.message, "error");
      });
  };

  // const updateCategory = (e) => {
  //   e.preventDefault();
  //   axios
  //     .patch(
  //       _BASE_URL + `/blog/${post._id}`,
  //       {
  //         title: formData.title,
  //         description: formData.desc,
  //         imageUrl: formData.url,
  //       },
  //       { headers: { "Content-Type": "application/json" } }
  //     )
  //     .then((res) => {
  //       swal("", "This blog is updated", "success");
  //       setShowModal(false);
  //       setFormData(initialState);
  //     })
  //     .catch((err) => {
  //       swal("", err.message, "error");
  //     });
  // };
  return (
    <div>
      <Sidebar />
      {showModal ? (
        <Modal className="mt-5" show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">
                Add a Category
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
                    placeholder="Category Name"
                    required
                  />
                </div>
                {showSubmit ? (
                <button 
                type="submit" 
                className="btn btn-primary"
                onClick={createCategory}>
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
              <button className="btn btn-primary" onClick={(e)=>handleShow('')}>Add a Category</button>
            </div>
          </div>
          {categories && categories.length > 0
              ? categories.map((category, i) => {
                return (
                  <div class="row mb-5 mt-3">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3 padding-left-mobile">
                      <div class="card font-regular bg-adminPrimary">
                        <div class="card-body">
                          <h5 class="text-dark font-weight-bold mt-2">
                            {category.name}
                          </h5>
                          <button 
                          class="btn btn-primary"
                          onClick={(e) =>
                            handleShow(category.name)
                          }>Edit</button>
                          <button class="btn btn-danger ml-3">Delete</button>
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

export default Category;
