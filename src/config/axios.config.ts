import { appGlobal } from "@/config/window";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_HOST ?? "http://localhost:8000";
// @ts-ignore
axios.defaults.headers = {
  Authorization: appGlobal?.localStorage["accessToken"] ? `Bearer ${ appGlobal?.localStorage["accessToken"] }` : null,
  "Content-Type": "application/json",
};
export { axios };
