import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm ">
        <Card>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" type="password" required={true} />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Login</Button>
          </form>
          <div>
            <h2 className="text-center text-md font-semibold ">
              Or LogIn With
            </h2>
            <div className="flex justify-center my-4">
              <Button className="w-full" outline={true} gradientDuoTone="greenToBlue">
                <BsGoogle className="mr-8"></BsGoogle> <span className="text-xl hover:text-red-500">Google</span>
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
