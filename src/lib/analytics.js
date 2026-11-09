const queued = [];
const MAX_QUEUE = 40;

function send(name) {
  if (typeof window !== "undefined" && typeof window.umami?.track === "function") {
    window.umami.track(name);
    return true;
  }
  return false;
}

export function flushQueuedEvents() {
  while (queued.length) {
    const name = queued.shift();
    if (!send(name)) {
      queued.unshift(name);
      break;
    }
  }
}

export function track(name) {
  if (!name) return;
  if (send(name)) return;
  queued.push(name);
  if (queued.length > MAX_QUEUE) queued.shift();
}

export const events = {
  section: (id) => `section_${id}`,
  nav: (id) => `nav_${id}`,
  resumeView: "resume_view",
  resumeDownload: "resume_download",
  emailCopy: "email_copy",
  linkedin: "click_linkedin",
  github: "click_github",
  themeDark: "theme_dark",
  themeLight: "theme_light",
  heroViewExperience: "hero_view_experience",
  heroContactMe: "hero_contact_me",
};
