import React from "react";
import { Button } from "@/components/ui/stateful-button";
import InputBox from "../components/ui/InputBox";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="h-screen flex flex-col border-red-900 border-9"
      >
        <h2 className="mt-5 text-3xl font-bold mb-8">Say Hello</h2>

        <div className="flex flex-col gap-5 w-full  px-4">
          <InputBox label="Email" placeholder="johndeo@gmail.com" />
          <InputBox
            label="Type your message"
            placeholder="Type your message here "
          />
          <Button>Submit</Button>
        </div>
      </div>
    </>
  );
};

export default Contact;
