import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm">
        <Card>
          <form className="flex flex-col gap-4">
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
            <Button type="submit">Registration</Button>
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
