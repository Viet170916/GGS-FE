"use client";
import LoginForm from "@/components/LoginForm";
// import echo  from "@/config/websocket.config";
import { JSX, useEffect } from "react";

export default function LoginPage(): JSX.Element{
  // useEffect( () => {
  //   echo.channel( 'sendTokenLogin' )
  //       .subscribed( () => {console.log( "aaaa" );} )
  //       .listen( '.private_msg', ( data: any ) => {
  //         console.log( "hello", data );
  //       } );
  //   // @ts-ignore
  // }, [] );
  useEffect( () => {
  }, [] );
  return (
    <main className = "flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
    </main>
  );
}
