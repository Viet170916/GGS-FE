'use client';
import Button from "@/components/Button/Button";
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
    <div className = { classNames( "justify-center", "h-screen", "p-24" ) }>
      { isLogin ?
        <div className = { classNames( "grid", "gap-y-3" ) }>
          <p className = { classNames( "text-center", "text-xl" ) }>Login Successfully</p>
          <Button click = { () => {} }>
            <Link href = { "/home" }>Go to home page</Link>
          </Button>
        </div> :
        <div className = { classNames( "text-center" ) }>loading</div>
      }
    </div>
  );
}
