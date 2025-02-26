import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 환경변수에서 API 주소 가져오기
  // baseURL: "http://localhost:3000",
  withCredentials: true, // CORS 문제 해결을 위해 쿠키 포함
});

export default api;