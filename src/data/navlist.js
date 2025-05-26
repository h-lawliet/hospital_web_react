import api from "../api"

export const navList = [
  {
    name: "본원소개",
    link: "/about",
    detail: ["인사말", "의료진 소개", "진료 시간", "오시는길", "층별 안내"],
    topImg: "/images/pageTop/top1.webp"
  },
  {
    name: "특화센터",
    link: "/center",
    detail: ["뇌졸중 특화센터", "모야모야 특화센터", "두통 · 어지럼증 센터", "뇌졸중 · 치매 통합 예방센터", "운동센터", "이완센터"],
    topImg: "/images/pageTop/top2.webp"
  },
  {
    name: "진료분야",
    link: "/appointment",
    detail: ["급성뇌졸중", "모야모야", "두통", "어지럼", "현훈", "뇌졸중 예방치료", "치매 예방치료", "노화 예방치료", "운동 치료", "이완 치료"],
    topImg: "/images/pageTop/top3.webp"
  },
  {
    name: "검사항목",
    link: "/examination",
    detail: [],
    topImg: "/images/pageTop/top4.webp"
  },
  {
    name: "커뮤니티",
    link: "/community",
    detail: ["상담예약", "연구활동", "공지사항"],
    topImg: "/images/pageTop/top5.webp"
  },
]

let fetched = false
let cachedRooms = null      // ⭐ rooms 캐시

export function fetchExaminationRooms(cb = () => {}) {
  /* 이미 받아 둔 경우 즉시 콜백 */
  if (fetched && cachedRooms) {
    cb(cachedRooms)
    return
  }

  /* 최초 호출 ― API 요청 */
  api.get("/examination", { withCredentials: true })
    .then(res => {
      const rooms = Array.from(
        new Set((res.data || []).map(d => (d.room || "").trim()))
      )
      navList[3].detail = rooms
      cachedRooms = rooms          // 💾 캐싱
      fetched = true
      cb(rooms)                    // 최초 호출자에게 전달
    })
    .catch(console.error)
}