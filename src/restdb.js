const url = "https://gordonlockwoodevents-cf27.restdb.io/rest/events";
const key = "61478cf5dfa7346e2f968e99";
export const eventsPromise = fetch(url, {
  headers: {
    "content-type": "application/json",
    "x-apikey": key,
    "cache-control": "no-cache",
  },
}).then((res) => res.json());
