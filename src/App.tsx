import "./sass/App.scss";
import { useRef, useState } from "react";
import Signin from "./Signin";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const usernameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  return (
    <>
      {loggedIn ? (
        <Signin />
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              name="username"
              type="text"
              ref={usernameInput}
              placeholder="username"
            />
          </div>
          <div>
            <input
              name="password"
              type="text"
              ref={passwordInput}
              placeholder="password"
            />
          </div>
          <button
            type="submit"
            onClick={() => {
              if (
                usernameInput.current?.value === "amir.dev" &&
                passwordInput.current?.value === "pg67a/w"
              )
                setLoggedIn(true);
            }}
          >
            Login
          </button>
        </form>
      )}
    </>
  );
};

export default App;
