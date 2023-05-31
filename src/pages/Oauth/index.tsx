import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios";

function Oauth() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log('되긴하는거니?');

  const sendCodeAndGetResponse = async () => {
    console.log('실행은 되니?');
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    console.log(queryParams);
    console.log(code);

    const url = new URL('http://api.ddakkm.com/user/oauth2/kakao');
    url.searchParams.append('code', code as string);
    console.log(url);

    try {
      const response = await fetch(url.toString(), {
        mode: 'cors', // CORS를 활성화하기 위해 mode를 cors로 설정합니다.
        credentials: 'include',
        headers: {
          'Origin': 'http://localhost:3000'
        } // 필요한 경우 쿠키를 전송할 수 있도록 credentials를 include로 설정합니다.
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        console.log('요청 성공');
      } else {
        console.error('Request failed with status:', response.status);
        console.log('요청 실패');
      }
    } catch (error) {
      console.error('Request failed with error:', error);
      console.log('요청 실패');
    }
  };

  useEffect(() => {
    sendCodeAndGetResponse();
  }, []);

  return <div></div>;
}

export default Oauth;