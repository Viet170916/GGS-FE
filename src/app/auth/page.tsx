'use client';
import { appGlobal } from "@/config/window";
import { useAuth } from "@/middlewares/auth";
import classNames from "classnames";
import Link from "next/link";
import React, { JSX } from "react";

export default function Auth(): JSX.Element{
  // @ts-ignore
  const token = new URLSearchParams( appGlobal?.location.search ).get( "token" );
  if( appGlobal ){
    appGlobal.localStorage['accessToken'] = token;
  }
  const isLogin = useAuth( token );
  return (
    <div className = { classNames( "grid", "" ) }>
      { isLogin ? <div>
          <p>Login Successfully</p>
          <Link href = { "/home" }>Go to home page</Link>
        </div> :
        <div>loading</div>
      }
    </div>
  );
}
