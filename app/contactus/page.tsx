import { Input } from "@nextui-org/input";
import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-lg mx-auto bg-red-300">
      <div className="w-full">
        <div className="flex items-center justify-center w-full">
          <Input
            isRequired
            type="email"
            label="Person name"
            defaultValue=""
            className="w-1/2 p-2"
          />
          <Input
            isRequired
            type="email"
            label="Contact number*
            "
            defaultValue=""
            className="w-1/2 p-2"
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <Input
            isRequired
            type="email"
            label="Mail Id
            "
            defaultValue=""
            className="w-1/2 p-2"
          />
          <Input
            isRequired
            type="email"
            label="Area Cover Radius*
            "
            defaultValue=""
            className="w-1/2 p-2"
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <Input
            isRequired
            type="email"
            label="Shop No/Flat No/House No*
            "
            defaultValue=""
            className="w-1/2 p-2"
          />
          <Input
            isRequired
            type="email"
            label="Village*
            "
            defaultValue=""
            className="w-1/2 p-2"
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <Input
            isRequired
            type="email"
            label="Taluko*
            "
            defaultValue=""
            className="w-1/2 p-2"
          />
          <Input
            isRequired
            type="email"
            label="Jillo*
            "
            defaultValue=""
            className="w-1/2 p-2"
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <Input
            isRequired
            type="email"
            label="Distc.
            "
            defaultValue=""
            className="w-1/2 p-2"
          />
          <Input
            isRequired
            type="email"
            label="PIN Code
            "
            defaultValue=""
            className="w-1/2 p-2"
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <Input
            isRequired
            type="email"
            label="Location
            "
            defaultValue=""
            className="w-1/2 p-2"
          />
          <Input
            isRequired
            type="email"
            label="Addhar card copy
            "
            defaultValue=""
            className="w-1/2 p-2"
          />
        </div>

        <div className="flex items-center justify-center w-full">
          <Input
            isRequired
            type="email"
            label="PAN Card Copy"
            defaultValue=""
            className="w-1/2 p-2"
          />
          <Input
            isRequired
            type="email"
            label="Cancle Chque OR Passbook Front Copy
            *
            "
            defaultValue=""
            className="w-1/2 p-2"
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <Input
            isRequired
            type="email"
            label="Bike Details"
            defaultValue=""
            className="w-1/2 p-2"
          />
          <Input
            isRequired
            type="email"
            label="Bike Available"
            defaultValue=""
            className="w-1/2 p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
