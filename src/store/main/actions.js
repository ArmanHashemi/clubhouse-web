import service from "boot/axios";

export function me({ dispatch, commit }, data) {
  return service.send("POST", "/api/me", data, true);
}

export function activePing({ dispatch, commit }, data) {
  return service.send("POST", "/api/active_ping", data, true);
}
export function joinChannel({ dispatch, commit }, data) {
  return service.send("POST", "/api/join_channel", data, true);
}
export function acceptSpeakerInvite({ dispatch, commit }, data) {
  return service.send("POST", "/api/accept_speaker_invite", data, true);
}
export function inviteToSpeak({ dispatch, commit }, data) {
  return service.send("POST", "/api/invite_speaker", data, true);
}
export function get_channel({ dispatch, commit }, data) {
  return service.send("POST", "/api/get_channel", data, true);
}
