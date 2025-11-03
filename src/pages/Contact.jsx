import React from "react";
import { StatefulButton } from "@/components/ui/stateful-button";
import InputBox from "../components/ui/InputBox";
import Button from "@/components/ui/button";
const Contact = () => {
  const TwitterSvg = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-twitter-x"
      viewBox="0 0 16 16"
    >
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );
  const MeetSvg = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-chat-text"
      viewBox="0 0 16 16"
    >
      <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
      <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5" />
    </svg>
  );
  return (
    <>
      <div id="contact" className="h-screen ">
        <div className=" flex flex-col justify-between items-center w-full">
          <h2 className="mt-5 text-3xl font-bold mb-8 playfair-display">
            Education
          </h2>

          <div className="max-w-4xl w-full flex items-center gap-5 mx-auto border-2 p-5 rounded-2xl ">
            <div>
              <img
                className="h-12 w-12 rounded-full"
                src="https://upload.wikimedia.org/wikipedia/en/4/42/Sant_Gadge_Baba_Amravati_University_logo.png"
                alt="university logo"
              />
            </div>

            <div className="flex flex-col">
              <h3>Bachelor of Engineering in Information Technology</h3>
              <h2>Sant Gagde Baba Amravati University</h2>
            </div>

            <div>
              <h4>Sept 2025</h4>
            </div>
          </div>
        </div>

        <h2 className="text-center playfair-display mt-5 text-3xl font-bold mb-8">
          Say Hello
        </h2>

        <div className="flex flex-col gap-7">
          <div className="  flex flex-col items-start ">
            <h3 className="playfair-display">dm on X is recommended</h3>

            <div className="flex gap-1">
              <Button label="Book a meet" SvgIcon={MeetSvg} url="/"></Button>
              <Button
                label="dm on X"
                SvgIcon={TwitterSvg}
                url="https://x.com/awaizz49"
              ></Button>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col gap-5 w-full ">
              <h3 className="playfair-display">You can mail also </h3>
              <InputBox label="Email" placeholder="johndeo@gmail.com" />
              <InputBox
                label="Type your message"
                placeholder="Type your message here "
                height="h-20"
              />
              <StatefulButton>Submit</StatefulButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
