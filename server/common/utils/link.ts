function getDevOrigin(): string {
  const env = process.env.__NEXT_PRIVATE_ORIGIN;
  if (env && env.trim().length > 0) return env;
  return window.location.origin;
}

function getOrigin(): string {
  if (process.env.NODE_ENV == "development") {
    return getDevOrigin();
  } else if (process.env.NODE_ENV == "production") {
    return process.env.NEXT_PUBLIC_BASE_URL;
  } else {
    return getDevOrigin();
  }
}

export function link(path: string) {
  if (!path) return path;
  const origin = getOrigin();

  if (path.startsWith("/")) {
    return origin + path;
  } else {
    return path;
  }
}

export function imageLink(path: string) {
  return link(path);
}
