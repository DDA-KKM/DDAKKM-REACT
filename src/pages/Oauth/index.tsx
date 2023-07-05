import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

interface OAUTH {
  type: "SIGNUP" | "LOGIN";
  url: string;
}

function Oauth() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("되긴하는거니?");

  const sendCodeAndGetResponse = () => {
    console.log("실행은 되니?");
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");

    axios
      .get<OAUTH>("https://api.ddakkm.com/user/oauth2/kakao", {
        params: { code: code },
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      })
      .then((rsp) => {
        if (rsp.data.type) {
          console.log(rsp.data.type);
          console.log(rsp.data.url);
          console.log("여기로 가보자고!!");
        }
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
