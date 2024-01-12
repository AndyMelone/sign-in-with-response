import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export default function Sign() {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  function redirection() {
    if (text == "") {
      toast.error("une erreur est survenue");
    } else {
      navigate("/response");
    }
  }
  console.log(text);
  return (
    <div className="content">
      <div className="app">
        <div>
          <img
            className="imgHiden"
            src="/images/illustration-sign-up-mobile.svg"
            alt=""
          />
        </div>
        <div className="content-left">
          <h1>Stay updated!</h1>
          <p
            style={{
              width: "90%",
            }}
          >
            {" "}
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul>
            <li>
              <img src="/images/icon-list.svg" alt="" />
              Product discovery and building what matters
            </li>
            <li>
              <img src="/images/icon-list.svg" alt="" />
              Measuring to ensure updates are a success
            </li>
            <li>
              <img src="/images/icon-list.svg" alt="" />
              And much more!
            </li>
          </ul>
          <form action="">
            {" "}
            <div className="divForInput">
              <label htmlFor="email">Email address</label>
              <input
                className="inputText"
                type="text"
                placeholder="email@company.com"
                required
                value={text}
                onChange={(e) => handleChange(e)}
              />
              <input
                onClick={() => redirection()}
                className="inputButton"
                type="submit"
                value="Subscribe to monthly newsletter"
              />
            </div>
          </form>
        </div>
        <div className="content-right">
          <img src="/images/illustration-sign-up-desktop.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
