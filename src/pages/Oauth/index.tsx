import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Oauth() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("되긴하는거니?");

  const sendCodeAndGetResponse = () => {
    console.log("실행은 되니?");
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");

    axios
      .get("https://api.ddakkm.com/user/oauth2/kakao", {
        params: { code: code },
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      })
      .then((rsp) => {
        console.log(rsp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    sendCodeAndGetResponse();
  }, []);

  return <div></div>;
}

export default Oauth;
