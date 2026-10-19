// Puts the Web3Forms access key into the static Egypt landing pages (public/eg, public/eg/en).
// Those pages are generated static HTML, not part of the Vite bundle, so import.meta.env does not reach them.
// The key is the same VITE_WEB3FORMS_KEY Vercel variable the free-check form uses; Web3Forms access keys are
// public by design (they only route a form to the address stored with the key). Without a valid key the pages
// keep the placeholder and the form falls back to a prepared email, so the build never fails because of this.
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const PLACEHOLDER = "__WEB3FORMS_KEY__";
const key = (process.env.VITE_WEB3FORMS_KEY ?? "").trim();
const files = ["dist/eg/index.html", "dist/eg/en/index.html"].filter((f) => existsSync(f));

if (!/^[0-9A-Za-z-]{20,64}$/.test(key)) {
  console.log(`[eg-form] no usable VITE_WEB3FORMS_KEY; ${files.length} page(s) keep the prepared-email fallback`);
} else {
  for (const file of files) {
    const html = readFileSync(file, "utf8");
    if (!html.includes(PLACEHOLDER)) {
      console.log(`[eg-form] ${file}: placeholder not found, left untouched`);
      continue;
    }
    writeFileSync(file, html.split(PLACEHOLDER).join(key));
    console.log(`[eg-form] ${file}: form key set`);
  }
}
