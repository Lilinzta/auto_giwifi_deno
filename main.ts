import { getRequest } from "./utils/getRequest.ts";

const args = Deno.args;
const userInfo = {
  username: args[0],
  password: args[1],
};

// If the authentication server IP is not provided, use the default IP.
let baseUrl = "http://10.189.1.3";
if (args[2] != null) {
  baseUrl = "http://" + args[2];
}
const headers = {
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.5.1.4 Safari/537.36",
};

getRequest(baseUrl, headers, userInfo);
