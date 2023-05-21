import { Footer } from "flowbite-react";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import logo from "../../../assets/toys-garden.jpg";

const FooterSection = () => {
  return (
    <div className="">
      <Footer container={true}>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="#"
                src={logo}
                alt="Hot Toys Logo"
                name="Hot Toys"
              />
              <div className="mt-4">
                <div className="form-control w-80">
                  <label className="label">
                    <span className="label-text">Enter your email address</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="username@site.com"
                      className="input input-bordered w-full pr-16"
                    />
                    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Hot Toys</Footer.Link>
                  <Footer.Link href="#">xpress Delivary</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Facebook</Footer.Link>
                  <Footer.Link href="#">Twitter</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Hot Toys™" year={2023} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />

            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterSection;
