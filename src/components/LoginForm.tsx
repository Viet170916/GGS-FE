import { axios } from "@/config/axios.config";
import { EmailMessages } from "@/Constant/Messages";
import { ErrorMessage, Message, NormalMessage } from "@/Models/Message";
import classNames from "classnames";
import React, { ChangeEvent, JSX, useState } from "react";

interface AccountInfo{
  email?: string,
  password?: string
}
export default function LoginForm(): JSX.Element{
  const [ message, setMessage ] = useState<Message>( { isError: false, content: "" } );
  const [ accountInfo, setAccountInfo ] = useState<AccountInfo>();
  async function loginHandler( event: any ){
    axios.post( "api/auth/login", { email: accountInfo?.email }, {
      headers: {
        Authorization: null,
      },
    } )
         .then( () => {
           setMessage( NormalMessage( EmailMessages.SENT_MAIL_SUCCESSFULLY ) );
         } )
         .catch( function( error ){
           setMessage( ErrorMessage( error.response.data.error ?? error.message ) );
         } );
  }
  function emailChange( event: ChangeEvent<HTMLInputElement> ){
    setAccountInfo( { ...accountInfo, email: event.target.value } );
  }
  function passwordChange( event: ChangeEvent<HTMLInputElement> ){
    setAccountInfo( { ...accountInfo, password: event.target.value } );
  }
  return (
    <div className = { classNames( "login-form" ) }>
      <div className = "z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className = { classNames( "login-form-inputs", "text-black" ) }>
          <input type = "email" placeholder = { "email" } id = { "login-email" } onChange = { emailChange } value = { accountInfo?.email } />
        </div>
        <button className = { classNames( "login-form-confirmation", "bg-blue-300" ) } onClick = { loginHandler }>
          Login
        </button>
        <p className = { classNames( "w-200", "h-10", message.isError ? "text-red-500" : "text-green-500" ) }>{ message.content }</p>
      </div>
    </div>
  );
}
