import classNames from "classnames";
import React, { JSX } from "react";

export default function layout( { children }: { children: React.ReactNode } ): JSX.Element{
  return (
    <div className = { classNames( "" ) }>
      { children }
    </div>
  );
}
