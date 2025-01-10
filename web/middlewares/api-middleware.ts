import { link } from "../common/link";
import { ProfileType } from "../interfaces/api";

export function profileHandler(profile: ProfileType): ProfileType {
  if (!profile) return;
  profile.avatar = link(profile.avatar);
}

export function linksHandler() {}
