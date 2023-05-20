import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import useTitle from "../../../hooks/useTitle";
import { authContext } from "../../../providers/AuthProvider";

const Login = () => {
  useTitle("Login");
  const [sucess, setSucess] = useState("");
  const [error, setError] = useState("");

  const { signIn, signInWithGoogle } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // const displayName= form.displayName.value
    // const photoURL = form.photoURL.value
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSucess("login Sucessfull");
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center bg-gray-50 h-screen ">
      <div className="max-w-sm mt-12 ">
        <Card className="bg-gradient-to-r from-cyan-500 to-blue-500">
          <form onSubmit={handleLogIn} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                name="email"
                placeholder="Put Your Email"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                name="password"
                placeholder="Put Your Password"
                required={true}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button outline={true} gradientDuoTone="greenToBlue" type="submit">
              Login
            </Button>
          </form>
          <div>
            <h2 className="text-center text-md font-semibold ">
              Or LogIn With
            </h2>
            <div className="flex justify-center my-4">
              <Button
                onClick={handleGoogleSignIn}
                className="w-full"
                outline={true}
                gradientDuoTone="greenToBlue"
              >
                <BsGoogle className="mr-8"></BsGoogle>{" "}
                <span className="text-xl hover:text-red-500">Google</span>
              </Button>
            </div>
            <h4 className="font-md text-md">
              New To Here? Please ...{" "}
              <Link className="underline font-bold" to="/register">
                Register
              </Link>
            </h4>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
