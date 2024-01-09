export default function App() {
  return (
    <div className="content">
      <div className="app">
        <div>
          <img
            className="imgHiden"
            src="../src/assets/images/illustration-sign-up-mobile.svg"
            alt=""
          />
        </div>
        <div className="content-left">
          <h1>Stay updated!</h1>
          <p> Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>
              <samp>
                <img src="../src/assets/images/icon-list.svg" alt="" />
              </samp>
              Product discovery and building what matters
            </li>
            <li>
              <samp>
                <img src="../src/assets/images/icon-list.svg" alt="" />
              </samp>
              Measuring to ensure updates are a success
            </li>
            <li>
              <samp>
                <img src="../src/assets/images/icon-list.svg" alt="" />
              </samp>
              And much more!
            </li>
          </ul>
          <div className="divForInput">
            <label htmlFor="email">Email address</label>
            <input
              className="inputText"
              type="text"
              placeholder="email@company.com"
            />
            <input
              className="inputButton"
              type="button"
              value="Subscribe to monthly newsletter"
            />
          </div>
        </div>
        <div className="content-right">
          <img
            src="../src/assets/images/illustration-sign-up-desktop.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
