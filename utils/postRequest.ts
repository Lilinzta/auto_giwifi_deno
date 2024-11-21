import axios from "npm:axios";

export function postData(
  baseUrl: string,
  headers: { "Content-Type": string; "User-Agent": string },
  Obj: { ivv: string | undefined | string[]; msg: string; sign: string }
) {
  const url =
    baseUrl +
    "/gportal/web/authLogin?round=" +
    Math.round(Math.random() * 1000);
  axios
    .post(
      url,
      {
        data: Obj.msg,
        iv: Obj.ivv,
      },
      { headers: headers }
    )
    .then((Response) => {
      console.log(Response.data);
      setTimeout(function () {
        queryAuthState(headers, Obj.sign, baseUrl);
      }, 2000);
    });
}

function queryAuthState(
  headers: { "Content-Type": string; "User-Agent": string },
  sign: string,
  baseUrl: string
) {
  const url = baseUrl + "/gportal/web/queryAuthState";
  axios
    .post(
      url,
      {
        sign: sign,
      },
      {
        headers: headers,
        responseType: "json",
      }
    )
    .then((Response) => {
      const obj = Response.data;
      console.log(obj);
    });
}
