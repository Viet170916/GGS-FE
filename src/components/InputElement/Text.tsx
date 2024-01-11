import classNames from "classnames";
import { ChangeEvent, useState } from "react";

function Text( prop: { id?: string, className?: string, initValue?: string, transValue?: ( value: string ) => void, type?: string, placeholder?: string } ){
  const [ text, setText ] = useState( prop.initValue ?? "" );
  function textChange( event: ChangeEvent<HTMLInputElement> ){
    setText( event.target.value );
  }
  return (
    <div className = "form">
      <input
        id = { prop.id }
        className = { classNames( "textBox", "form__input", prop.className ) }
        value = { text }
        // @ts-ignore
        type = { (prop.type == "email" && "email") || "text" }
        // @ts-ignore
        // onBlur = { prop.transValue?.( text ) }
        placeholder = { prop.placeholder }
        onChange = { textChange }
      />
    </div>
  );
}
export default Text;
