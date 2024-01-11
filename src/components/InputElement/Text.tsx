import classNames from "classnames";
import { ChangeEvent, useState } from "react";
import "./Text.scss";

function Text( props: { id?: string, className?: string, initValue?: string, transValue?: ( value: string ) => void, type?: string, placeholder?: string } ){
  const [ text, setText ] = useState( props.initValue ?? "" );
  function textChange( event: ChangeEvent<HTMLInputElement> ){
    setText( event.target.value );
  }
  return (
    <div className = "form">
      <input
        id = { props.id }
        className = { classNames( "textBox", "form__input", props.className ) }
        value = { text }
        // @ts-ignore
        type = { (props.type == "email" && "email") || "text" }
        // @ts-ignore
        // onBlur = { prop.transValue?.( text ) }
        onBlur = { ( event ) => {props.transValue( event.target.value ); } }
        placeholder = { props.placeholder }
        onChange = { textChange }
      />
    </div>
  );
}
export default Text;
