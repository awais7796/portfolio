import { useState } from "react";
import emailjs from "@emailjs/browser";
import InputBox from "./InputBox";
import {StatefulButton} from "./stateful-button";
import toast from "react-hot-toast";




const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      await emailjs.send(
         import.meta.env.VITE_SERVICE_ID,
         import.meta.env.VITE_TEMPLATE_ID, // template id
        {
          email,
        message,
        },
        import.meta.env.VITE_PUBLIC_KEY // public key
      );

      // alert("Message sent successfully!");
      toast.success("Message sent successfully!");

      setEmail("");
      setMessage("");

    } catch (error) {
      console.log(error);
      // alert("Failed to send message");
      toast.error("Failed to send message");
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-5 w-full">
        <h3 className="playfair-display">You can mail also</h3>

        <InputBox
          label="Email"
          placeholder="johndeo@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputBox
          label="Type your message"
          placeholder="Type your message here"
          height="h-20"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <StatefulButton onClick={handleSubmit}>
          Submit
        </StatefulButton>
      </div>
    </div>
  );
};

export default EmailForm;