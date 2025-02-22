import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // 환경변수에서 API 주소 가져오기
  withCredentials: true, // CORS 문제 해결을 위해 쿠키 포함
});

export default api;