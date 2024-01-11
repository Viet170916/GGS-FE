import classNames from "classnames";
import React, { JSX } from "react";
import "./Button.scss";

export default function Button( props: { children?: string | React.ReactNode, click: () => void, className?: string } ): JSX.Element{
  return (
    // <div className = { classNames( "submit-area", "inner-box" ) }>
    <div className = { classNames( "submit-button", "btn__primary", "btn", props.className ?? "" ) } onClick = { props.click }>
      { props.children ?? "Submit" }
    </div>
    // </div>
  );
}
