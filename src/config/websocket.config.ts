import { appGlobal } from "@/config/window";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

let echo: Echo;
// @ts-ignore
appGlobal.Pusher = Pusher;
echo = new Echo( {
                   broadcaster: 'pusher',
                   key: process.env.NEXT_PUBLIC_VITE_PUSHER_APP_KEY ?? "24dda4e3d80564cd641d",
                   encrypted: false,
                   cluster: process.env.NEXT_PUBLIC_VITE_PUSHER_APP_CLUSTER ?? "ap1",
                   wsHost: process.env.NEXT_PUBLIC_VITE_PUSHER_APP_WS_HOST ?? "localhost",
                   wsPort: process.env.NEXT_PUBLIC_VITE_PUSHER_APP_WS_PORT ?? 6001,
                   forceTLS: false,
                   enabledTransports: [ 'ws' ],
                 } );
export default echo;

