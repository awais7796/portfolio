import React from "react";
import { StatefulButton } from "@/components/ui/stateful-button";
import InputBox from "../components/ui/InputBox";
import { Button } from "@/components/ui/button";
const Contact = () => {
  return (
    <>
      <div id="contact" className="h-screen ">
        <h2 className="text-center playfair-display mt-5 text-3xl font-bold mb-8">
          Say Hello
        </h2>

        <div className="flex flex-col items-start ">
          <h3 className="playfair-display">dm on X is recommended</h3>

          <div className="flex gap-1">
            <Button variant="outline">Outline</Button>
            <Button variant="default">Default</Button>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full ">
          <h3 className="playfair-display">you can mail also </h3>
          <InputBox label="Email" placeholder="johndeo@gmail.com" />
          <InputBox
            label="Type your message"
            placeholder="Type your message here "
            height="h-20"
          />
          <StatefulButton>Submit</StatefulButton>
        </div>
      </div>
    </>
  );
};

export default Contact;
