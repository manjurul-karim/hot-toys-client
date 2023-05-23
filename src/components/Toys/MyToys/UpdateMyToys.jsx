import { Button, Card, Label, TextInput } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

const UpdateMyToys = () => {
  const updateToy = useLoaderData();

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const forms = event.target;
    const toyPrice = forms.toyPrice.value;
    const quantity = forms.quantity.value;
    const description = forms.description.value;
    const updatedToy = {
      toyPrice,
      quantity,
      description,
    };
    console.log(updatedToy);
    forms.reset();

    fetch(`https://a10-hot-toys-server-manjurul-karim.vercel.app/addedtoys/${updateToy._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast("Toy Updated Successfully");
        }
      });
  };
  return (
    <div className=" bg-gray-50  ">
      <Card className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="hero min-h-screen bg-base-200">
          <form onSubmit={handleUpdateToy} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="toyprice" value="Toy Price" />
              </div>
              <TextInput
                id="toyPrice"
                type="number"
                name="toyPrice"
                placeholder="Toy Price"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Toy Quantity" value="Toy Quantity" />
              </div>
              <TextInput
                id="quantity"
                type="number"
                name="quantity"
                placeholder="Toy Quantity"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Toy description" />
              </div>
              <TextInput
                id="text"
                type="text"
                name="description"
                placeholder="Toy Desscription"
                required={true}
              />
            </div>

            <Button outline={true} gradientDuoTone="greenToBlue" type="submit">
              Update Toys
            </Button>
            <ToastContainer />
          </form>
        </div>
      </Card>
    </div>
  );
};

export default UpdateMyToys;
