import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import { authContext } from "../../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  useTitle("Register");

  const { user, createUser } = useContext(authContext);
  // console.log(createUser);
  const [accpted, setAccepted] = useState(false);
  const [sucess, setSucess] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    console.log(name, email, password, photoUrl);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // ! validation
        if (!/(?=.*[0-9])/.test(password)) {
          setError("please enter number");
        } else if (password.length < 6) {
          setError("please set at least 6 character");
        }
        setError(" ");
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
      if (createUser) {
        toast("User Created Successfully");
      }
  };
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <div className="flex justify-center bg-gray-50 my-6">
      <div className="max-w-sm flex">
        <Card className="bg-gradient-to-r from-cyan-500 to-blue-500">
          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name1" value="Your Name" />
              </div>
              <TextInput
                id="name1"
                name="name"
                type="text"
                placeholder="Set Your Name"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                name="email"
                type="email"
                placeholder="Set Your Email"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                name="password"
                type="password"
                placeholder="Set Your Password"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Your Photo URL" />
              </div>
              <TextInput
                id="photoUrl"
                name="photoUrl"
                type="text"
                placeholder="Enter your photo URL"
                required={true}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button outline={true} gradientDuoTone="greenToBlue" type="submit">
              Registration
            </Button>
            <ToastContainer/>
          </form>

          <div>
            <h4 className="font-md text-md">
              Al ready Have An Acoount? Please ...{" "}
              <Link className="underline font-bold" to="/login">
                Login
              </Link>
            </h4>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
