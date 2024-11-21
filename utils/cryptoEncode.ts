import { Aes } from "https://deno.land/x/crypto/aes.ts";
import { Cbc, Padding } from "https://deno.land/x/crypto/block-modes.ts";

export function cryptoEncode(
  originData: string,
  iv: string | undefined | string[]
) {
  const te = new TextEncoder();
  const key = te.encode("1234567887654321");
  const ivv = te.encode(iv as string);
  const data = te.encode(originData);
  const cipher = new Cbc(Aes, key, ivv, Padding.LAST_BYTE);
  const encrypted = cipher.encrypt(data);
  const cryptoData = btoa(String.fromCharCode(...encrypted));
  return cryptoData;
}
