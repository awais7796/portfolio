import React from "react";
import { Button } from "@/components/ui/stateful-button";
import InputBox from "../components/ui/InputBox";

const Contact = () => {
  return (
    <>
      <div id="contact" className="h-screen bg-amber-900">
        <h2 className="mt-5 text-3xl font-bold mb-8">Say Hello</h2>

        <div className="flex flex-col items-start bg-amber-300">
          <h3>dm on X is recommended</h3>
          <div className="flex gap-1">
            <h1>X</h1>
            <h1>X</h1>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full ">
          <h3>you can mail also </h3>
          <InputBox label="Email" placeholder="johndeo@gmail.com" />
          <InputBox
            label="Type your message"
            placeholder="Type your message here "
            height="h-20"
          />
          <Button>Submit</Button>
        </div>
      </div>
    </>
  );
};

export default Contact;
