import axios from "npm:axios";
import * as cheerio from "npm:cheerio";
import { cryptoEncode } from "./cryptoEncode.ts";
import { postData } from "./postRequest.ts";

export function getRequest(
  baseUrl: string,
  headers: { "Content-Type": string; "User-Agent": string },
  userInfo: { username: string; password: string }
) {
  const url = baseUrl + "/gportal/web/login";
  axios
    .get(url, {
      headers: headers,
    })
    .then((Response) => {
      const $ = cheerio.load(Response.data);
      const iv: string | undefined | string[] = $("#iv").val();
      const sign = decodeURIComponent($("input[name='sign']").val() as string);

      const getStr = $("#frmLogin").serialize();
      const strArr = getStr.split("&");

      strArr[13] = strArr[13] + userInfo.username;
      strArr[14] = strArr[14] + userInfo.password;

      const oriData = strArr.join("&");
      const msg = cryptoEncode(oriData, iv);
      const dataObj = {
        ivv: iv,
        msg: msg,
        sign: sign,
      };
      setTimeout(function () {
        postData(baseUrl, headers, dataObj);
      }, 3000);
    })
    .catch((Error) => {
      console.log(Error);
    });
}
