import React from "react";
import { Button } from "@/components/ui/stateful-button";
import InputBox from "../components/ui/InputBox";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col pt-10 text-border">
      <InputBox label="first name" placeholder="enter your name" />

      <Button>Submit</Button>
    </div>
  );
};

export default Contact;
