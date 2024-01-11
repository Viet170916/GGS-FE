import classNames from "classnames";
import React, { JSX } from "react";

export default function LoginLayout( { children }: { children: React.ReactNode } ): JSX.Element{
  return (
    <div id={"login-layout"} className = { classNames( "" ) }>
      {children}
    </div>
  );
}
