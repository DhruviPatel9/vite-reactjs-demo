import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label, Table } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Select from "react-select";
import { toast } from "react-toastify";

const initialProduct = {
  title: "",
  description: "",
  brand: "",
  price: "",
  gender: "",
  discountPercentage: "",
  availableStock: "",
  thumbnail: "",
  category: [],
  color: [],
  size: [],
};

const obj2 = {
  title: "radhaaa",
  description: "fdgggh",
  brand: "dfd",
  price: "323",
  gender: "male",
  discountPercentage: "12",
  availableStock: "23",
  thumbnail: "url",
  category: ["user"],
  color: ["red", "yellow"],
  size: ["x", "l"],
};

export default function AProduct() {
  let [product, setProduct] = useState(initialProduct);
  let [allProduct, setAllProduct] = useState([]);
  const [modal, setModal] = useState(false);
  let [select, setSelect] = useState([]);
  let [updateModal, setUpateModal] = useState(false);

  const colorOptions = [
    { value: "red", label: "red" },
    { value: "green", label: "green" },
    { value: "yellow", label: "yellow" },
    { value: "pink", label: "Pink" },
    { value: "black", label: "Black" },
  ];

  const categoryOptions = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
    { value: "employee", label: "Employee" },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:9999/product/create",
      data: product,
    })
      .then((res) => {
        console.log(" res:", res);
        toggle();
        refetchData();
        toast.success("data added");
        setProduct(initialProduct);
      })
      .catch((err) => {
        toast.error("fill the data");
      });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => {
        console.log(" res:", res);
        setAllProduct(res.data.data);
      })
      .catch((err) => {
        toast.error("fill the data");
      });
  }, []);

  const selectHandler = (e) => {
    // console.log("e:", e);
    let color = e.map((e) => e.value);
    setProduct({ ...product, color: color });
  };

  const checkHandler = (e) => {
    if (product?.size?.includes(e)) {
      let filterData = product?.size?.filter((ele) => ele !== e);
      setProduct({ ...product, size: filterData });
    } else {
      setProduct({ ...product, size: [...product?.size, e] });
    }
  };

  const deleteHandler = (id) => {
    console.log("🚀 ~ deleteHandler ~ id:", id);
    axios({
      method: "delete",
      url: http://localhost:9999/product/delete/${id},
    })
      .then((res) => {
        toast.success("data deleted");
        refetchData();
      })
      .catch((err) => {
        toast.error("--->", err);
      });
  };

  const editHandler = (data) => {
    console.log("data:", data);
    toggle();
    setProduct(data);
    setUpateModal(true);
  };

  const updateHandler = () => {
    axios({
      method: "put",
      url:http://localhost:9999/product/update/${product?._id},
      data: product,
    })
      .then((res) => {
        toast.success("data updated");
        toggle();
        refetchData();
        setProduct(initialProduct);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const toggle = () => {
    setModal(!modal);
    setUpateModal(false);
  };

  return (
    <>
      <div>
        <div>
          <Button color="danger" onClick={toggle}>
            Add Product
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Product page</ModalHeader>
            <ModalBody></ModalBody>
            <Form onSubmit={(e) => submitHandler(e)}>
                <FormGroup>
                  <Label for="exampleEmail">Title</Label>
                  <Input
                    onChange={(e) =>
                      setProduct({ ...product, title: e?.target?.value })
                    }
                    id="title"
                    value={product.title}
                    placeholder="with a placeholder"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Description</Label>
                  <Input
                    onChange={(e) =>
                      setProduct({ ...product, description: e?.target?.value })
                    }
                    value={product.description}
                    id="examplePassword"
                    placeholder="password placeholder"
                    type="text"
                  />
                </FormGroup>

                <FormGroup tag="fieldset">
                  <Label>Gender</Label>
                  <FormGroup check>
                    <Input
                      checked={product?.gender === "male"}
                      onClick={() => setProduct({ ...product, gender: "male" })}
                      name="radio1"
                      type="radio"
                    />
                    <Label check>Male</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      checked={product?.gender === "female"}
                      onClick={() =>
                        setProduct({ ...product, gender: "female" })
                      }
                      name="radio1"
                      type="radio"
                    />
                    <Label check>Female</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      checked={product?.gender === "kids"}
                      onClick={() => setProduct({ ...product, gender: "kids" })}
                      name="radio1"
                      type="radio"
                    />
                    <Label check>Kids</Label>
                  </FormGroup>
                </FormGroup>

                <FormGroup>
                  <Label for="examplePassword">Brand</Label>
                  <Input
                    onChange={(e) =>
                      setProduct({ ...product, brand: e?.target?.value })
                    }
                    value={product.brand}
                    id="examplePassword"
                    placeholder="password placeholder"
                    type="text"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="examplePassword">Image</Label>
                  <Input
                    onChange={(e) =>
                      setProduct({ ...product, thumbnail: e?.target?.value })
                    }
                    value={product.thumbnail}
                    id="examplePassword"
                    placeholder="password placeholder"
                    type="text"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="examplePassword">Price</Label>
                  <Input
                    onChange={(e) =>
                      setProduct({ ...product, price: e?.target?.value })
                    }
                    value={product.price}
                    id="examplePassword"
                    placeholder="password placeholder"
                    type="number"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="examplePassword">DiscountPercentage</Label>
                  <Input
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        discountPercentage: e?.target?.value,
                      })
                    }
                    value={product.discountPercentage}
                    id="examplePassword"
                    placeholder="password placeholder"
                    type="number"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="examplePassword">AvailableStock</Label>
                  <Input
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        availableStock: e?.target?.value,
                      })
                    }
                    value={product.availableStock}
                    id="examplePassword"
                    placeholder="password placeholder"
                    type="number"
                  />
                </FormGroup>

                <Label check>Size</Label>
                <FormGroup check classname="d-flex gap-2">
                  {["s", "M", "L", "Xl"]?.map((e) => {
                    return (
                      <div>
                        <Input
                          id="check1"
                          onChange={() => checkHandler(e)}
                          checked={product?.size?.includes(e)}
                          type="checkbox"
                        />
                        <Label check>{e}</Label>
                      </div>
                    );
                  })}
                </FormGroup>

                <FormGroup>
                  <Label for="examplePassword">color</Label>
                  <Select
                    isMulti
                    options={colorOptions}
                    value={product.color?.map((color) => {
                      return { value: color, label: color };
                    })}
                    onChange={(e) => selectHandler(e)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="examplePassword">Category</Label>
                  <Select
                    isMulti
                    options={categoryOptions}
                    value={product.category?.map((ele) => {
                      return { value: ele, label: ele };
                    })}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        category: e.map((ele) => ele.value),
                      })
                    }
                  />
                </FormGroup>
                {updateModal ? (
                  <Button
                    className="bg-red-500"
                    onClick={() => updateHandler()}
                  >
                    Update
                  </Button>
                ) : (
                  <Button className="bg-red-500">Submit</Button>
                )}
              </Form>
            </ModalBody>
          </Modal>
        </div>

        <Table striped>
          <thead>
            <tr>
              <th>SR.No.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Color</th>
              <th>Size</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allProduct.map((e, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <img className="h-18 w-10" src={e.thumbnail} alt="" />
                  </td>
                  <td>{e.title}</td>
                  <td>{e.price}</td>
                  <td>
                    <div className="d-flex gap-2">
                      {e.color.map((e) => {
                        return (
                          <div
                            style={{ backgroundColor: e }}
                            className="border border-black rounded-full h-4 w-4"
                          ></div>
                        );
                      })}
                    </div>
                  </td>

                  <td>
                    <div className="d-flex gap-2">
                      {["s", "m", "l", "xl"].map((size) => {
                        return (
                          <div className="p-2 border border-black">{size}</div>
                        );
                      })}
                    </div>
                  </td>
                  <td>
                    <Button
                      className="bg-red-500"
                      onClick={() => deleteHandler(e?._id)}
                    >
                      Delete
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="bg-red-500"
                      onClick={() => editHandler(e)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}