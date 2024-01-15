import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export default function Sign() {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const validate = emailRegex.test(text);

  function redirection(e) {
    e.preventDefault();

    if (!validate) {
      setError(true);
      toast.error("une erreur est survenue");
    }
    if (emailRegex.test(text)) {
      navigate("/response");
    }
  }
  console.log(validate);

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
          <form onSubmit={(e) => redirection(e)}>
            {" "}
            <div className="divForInput">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label
                  style={{
                    padding: "24px 0 28px 0px ",
                  }}
                  htmlFor="email"
                >
                  Email address
                </label>
                {error && (
                  <strong
                    style={{
                      color: "hsl(4, 100%, 67%)",
                    }}
                  >
                    Valid email required
                  </strong>
                )}
              </div>
              <input
                className={`inputText ${error ? "error" : ""}`}
                type="text"
                placeholder="email@company.com"
                value={text}
                onChange={(e) => handleChange(e)}
              />
              <input
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
