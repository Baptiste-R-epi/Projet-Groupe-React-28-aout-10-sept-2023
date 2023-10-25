import { useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Navbar from "components/layouts/layout.navBar";
import { Button } from "components/button/button.button";
import { Box } from "components/styled/styled.box";
import { UserDisplay } from "components/card/card.userDisplay";

export const Login = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const UserFromLocalStorage = JSON.parse(localStorage.getItem("user"));

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <>
      <Box>
        <Navbar />
      </Box>
      {UserFromLocalStorage ? (
        <>
          <UserDisplay user={UserFromLocalStorage} />
        </>
      ) : (
        <>
          <div>
            <Button onClick={() => login()}>Sign in with Google</Button>
          </div>
        </>
      )}
    </>
  );
};
