export const isAllowedPath = (path) => {
  // "/"로 시작하는 경로를 분리하고, 빈 문자열은 제거합니다.
  const segments = path.split('/').filter(Boolean);

  if (segments.length === 0) return "Home";

  if (segments[0] === "test") return "Test";

  if (segments[0] === "about") {
    return segments.length === 2 && ["0", "1", "2", "3", "4"].includes(segments[1]);
  }

  if (segments[0] === "center") {
    return segments.length === 2 && ["0", "1", "2", "3", "4", "5"].includes(segments[1]);
  }

  if (segments[0] === "appointment") {
    return segments.length === 2 && ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(segments[1]);
  }

  if (segments[0] === "examination") {
    return segments.length === 2 && ["0", "1", "2", "3", "4", "5", "6", "7"].includes(segments[1]);
  }

  if (segments[0] === "community") {

    if (segments.length === 2 && ["0", "1", "2"].includes(segments[1])) return true
    if (segments.length === 3 && segments[1] == 2) return true
  }

  // /api/admin/...
  if (segments[0] === "api" && segments[1] === "admin") {
    if (segments.length === 2) return true;
    if (segments[2] === "notice") {
      return segments.length === 3 || segments.length === 4;
    }
    if (segments[2] === "login") {
      return segments.length === 3;
    }
    if (segments[2] === "examination") {
      return segments.length === 3 || segments.length === 4;
    }
    if (segments[2] === "research") {
      return segments.length === 3 || segments.length === 4;
    }
    if (segments[2] === "reserve") {
      return segments.length === 3;
    }
    // 그 외에는 모두 거름
    return false;
  }

  // 위의 규칙에 해당하지 않는 모든 경로는 허용하지 않음
  return false;
};