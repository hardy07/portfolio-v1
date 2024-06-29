import { useEffect, useState, Suspense } from "react";
import toast, { Toaster } from "react-hot-toast";
import NavBar from "../components/navbar.jsx";
import SocialCard from "../components/SocialCard";
import Footer from "../components/footer.jsx";
import ReCAPTCHA from "react-google-recaptcha";
import { RiSendPlane2Fill } from "react-icons/ri";
import constants from "../utils/constants";
import { useThemeStore } from "../contexts/theme";
import axios from "axios";

const Contact = () => {
  const { mode } = useThemeStore();
  const [time, setTime] = useState();
  const [mystate, setMystate] = useState("");

  useEffect(() => {
    const date = new Date();
    const timezone = "Asia/Kolkata";
    const formattedTime = date.toLocaleString("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const hour = date.toLocaleString("en-US", {
      timeZone: timezone,
      hour: "numeric",
    });

    const isInSleepTime = hour >= 23 || hour < 7; // Updated condition for sleeping time
    setMystate(isInSleepTime ? "sleeping" : "awake");
    setTime(formattedTime);

    const intervalId = setInterval(() => {
      const date = new Date();
      const formattedTime = date.toLocaleString("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const hour = date.toLocaleString("en-US", {
        timeZone: timezone,
        hour: "numeric",
      });

      const isInSleepTime = hour >= 23 || hour < 7; // Updated condition for sleeping time
      setMystate(isInSleepTime ? "sleeping" : "awake");
      setTime(formattedTime);
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState("");

  const sendMessage = () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email", {
        style: {
          borderRadius: "10px",
          background: "#1f1f1f",
          color: "#fff",
        },
      });
      return;
    } else if (name.length <= 3 || name.length >= 32) {
      // Fixed condition for name length
      toast.error("Name field should be between 4 and 31 characters", {
        style: {
          borderRadius: "10px",
          background: "#1f1f1f",
          color: "#fff",
        },
      });
      return;
    } else if (message.length <= 50 || message.length >= 300) {
      // Fixed condition for message length
      toast.error("Message field should be between 51 and 299 characters", {
        style: {
          borderRadius: "10px",
          background: "#1f1f1f",
          color: "#fff",
        },
      });
      return;
    } else if (!captcha?.length > 0) {
      toast.error("Please solve the captcha", {
        style: {
          borderRadius: "10px",
          background: "#1f1f1f",
          color: "#fff",
        },
      });
      return;
    }

    toast.promise(
      axios.post(`.netlify/functions/contact`, {
        name,
        email,
        message,
        captcha,
      }),
      {
        loading: "Sending...",
        success: "Message Sent!",
        error: (err) => {
          if (err.response && err.response.status === 429) {
            return "You're on cooldown, please wait 10 minutes!";
          } else {
            return "Something went wrong!";
          }
        },
      },
      {
        style: {
          borderRadius: "10px",
          background: "#1f1f1f",
          color: "#fff",
        },
      }
    );
  };

  return (
    <Suspense fallback={<h1> Loading...</h1>}>
      <div className="text-white bg-zinc-900 min-h-screen bg-grid">
        <NavBar />
        <div className="pt-16 w-[90vw] mx-auto md:max-w-[750px] md:pt-24">
          <h1 className="text-3xl font-extrabold">Let's Talk 💬</h1>
          <p className="text-white/40 mt-5">
            It's currently <strong className="text-white/60">{time}</strong> for
            me, so I'm probably{" "}
            <strong className="text-white/60">{mystate}</strong>. I'll get back
            to you soon.
          </p>
        </div>
        <div className="grid grid-cols-1 mt-5 gap-4 md:grid-cols-2 md:gap-0 md:max-w-[750px] md:mx-auto">
          <div className="flex flex-col items-center gap-3 md:order-1">
            {constants.contact_socials.map((item, idx) => (
              <SocialCard {...item} key={idx} />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col bg-boxes border-white/10 border-[1px] p-5 rounded-2xl gap-5 min-w-[18rem]">
              <div className="flex flex-col">
                <label
                  className="text-sm font-rubik text-white/50"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="bg-zinc-800 h-10 rounded-lg outline-none px-2"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-sm font-rubik text-white/50"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="bg-zinc-800 h-10 rounded-lg outline-none px-2"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-[23rem]">
                <label
                  className="text-sm font-rubik text-white/50"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="bg-zinc-800 rounded-lg outline-none px-2 py-2 resize-none"
                  id="message"
                  cols="30"
                  rows="10"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div
                  className={`mt-5 flex items-center justify-center ${
                    mode === "light" && "invert hue-rotate-180"
                  }`}
                >
                  <ReCAPTCHA
                    sitekey={constants.recaptcha_key}
                    onChange={(e) => setCaptcha(e)}
                    theme="dark"
                    size="normal"
                    tabindex="0"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="w-[10rem] flex items-center h-12 bg-primary rounded-xl justify-center gap-1 mt-1 font-bold font-rubik"
                  onClick={sendMessage}
                >
                  Send <RiSendPlane2Fill />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Toaster position="bottom-center" />
      </div>
    </Suspense>
  );
};

export default Contact;
