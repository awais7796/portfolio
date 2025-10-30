import React from "react";
import { Button } from "@/components/ui/stateful-button";
import InputBox from "../components/ui/InputBox";

const Contact = () => {
  return (
    <>
      <div id="contact" className="">
        <span>Say Hello</span>

        <div className="flex flex-col gap-5">
          <InputBox placeholder="johndeo@gmail.com" />
          <InputBox placeholder="Type your message here " />
          <Button>Submit</Button>
        </div>
      </div>
    </>
  );
};

export default Contact;
