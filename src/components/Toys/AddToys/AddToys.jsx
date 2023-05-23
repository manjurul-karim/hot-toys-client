import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import useTitle from "../../../hooks/useTitle";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AddToys = () => {
  useTitle("Add A Toy");

  const handleAddToy = (event) => {
    event.preventDefault();
    const forms = event.target;
    const toyName = forms.toyName.value;
    const toyPrice = forms.toyPrice.value;
    const quantity = forms.quantity.value;
    const SellerName = forms.SellerName.value;
    const email = forms.email.value;
    const subCategory = forms.subCategory.value;
    const rating = forms.rating.value;
    const photoURL = forms.photoURL.value;
    const description = forms.description.value;
    const newToy = {
      toyName,
      toyPrice,
      quantity,
      SellerName,
      email,
      subCategory,
      rating,
      photoURL,
      description,
    };
    console.log(newToy);

    fetch("https://a10-hot-toys-server-manjurul-karim.vercel.app/addedtoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            toast('Added Toys Successfully')
        }
      });
  };

  return (
    <div className="bg-gray-50 px-2 flex justify-center items-center h-screen ">
      <div>
        <h2 className="text-center mb-12 text-2xl font-bold">Add A Toys</h2>
        <form
          onSubmit={handleAddToy}
          className="flex flex-col gap-4 w-full p-4"
        >
          <div className=" flex ">
            <div className="w-1/3  mr-3">
              <div className="mb-2  ">
                <Label htmlFor="Toy Name" value="Toy Name" />
              </div>
              <TextInput
                id="text"
                type="name"
                name="toyName"
                placeholder="Toy Name"
                required={true}
              />
            </div>
            <div className="w-1/3">
              <div className="mb-2 block">
                <Label htmlFor="Toy price" value="Toy Price" />
              </div>
              <TextInput
                id="number"
                type="price"
                name="toyPrice"
                placeholder="Toy Price"
                required={true}
              />
            </div>
            <div className="w-1/3 ml-3">
              <div className="mb-2 block">
                <Label
                  htmlFor="Available Quantity"
                  value="Available Quantity"
                />
              </div>
              <TextInput
                id="number"
                type="quantity"
                name="quantity"
                placeholder="Toy Quanrtity"
                required={true}
              />
            </div>
          </div>
          <div className=" flex ">
            <div className="w-1/3  mr-3">
              <div className="mb-2  ">
                <Label htmlFor="Seller Name" value="Seller Name" />
              </div>
              <TextInput
                id="text"
                type="name"
                name="SellerName"
                placeholder="Seller Name"
                required={true}
              />
            </div>
            <div className="w-1/3">
              <div className="mb-2 block">
                <Label htmlFor="Seller Email" value="Seller Email" />
              </div>
              <TextInput
                id="email"
                type="email"
                name="email"
                placeholder="Seller Email"
                required={true}
              />
            </div>
            <div className="w-1/3 ml-3">
              <div className="mb-2 block">
                <Label htmlFor="Sub Category" value="Sub Category" />
              </div>
              <TextInput
                id="text"
                type="name"
                name="subCategory"
                placeholder="Toy sub category"
                required={true}
              />
            </div>
          </div>
          <div className=" flex ">
            <div className="w-1/3  mr-3">
              <div className="mb-2  ">
                <Label htmlFor="rating" value="Rating" />
              </div>
              <TextInput
                id="text"
                type="name"
                name="rating"
                placeholder="rating"
                required={true}
              />
            </div>
            <div className="w-1/3">
              <div className="mb-2 block">
                <Label htmlFor="Toy PhotoURL" value="Toy PhotoURL" />
              </div>
              <TextInput
                id="text"
                type="name"
                name="photoURL"
                placeholder="Toy PhotoURL"
                required={true}
              />
            </div>
            <div className="w-1/3 ml-3">
              <div className="mb-2 block">
                <Label htmlFor="Toy Description" value="Toy Description" />
              </div>
              <TextInput
                id="text"
                type="name"
                name="description"
                placeholder="Toy Desscription"
                required={true}
              />
            </div>
          </div>
          <Button  outline={true} gradientDuoTone="greenToBlue" type="submit">
            Submit
          </Button> <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default AddToys;
