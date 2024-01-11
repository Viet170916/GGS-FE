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
    <div className = { classNames( "justify-center", "h-screen" ) }>
      { isLogin ? <div>
          <p className = { classNames( "text-center" ) }>Login Successfully</p>
          <Button click = { () => {} }>
            <Link href = { "/home" }>Go to home page</Link>
          </Button>
        </div> :
        <div>loading</div>
      }
    </div>
  );
}
