import Button from "@/components/Button/Button";
import Text from "@/components/InputElement/Text";
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
  const [ accountInfo, setAccountInfo ] = useState<AccountInfo>( { email: "" } );
  function loginHandler(){
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
  function emailChange( text: string ){
    setAccountInfo( { ...accountInfo, email: text } );
  }
  function passwordChange( event: ChangeEvent<HTMLInputElement> ){
    setAccountInfo( { ...accountInfo, password: event.target.value } );
  }
  return (
    <div className = { classNames( "login-form" ) }>
      <div className = "z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className = { classNames( "login-form-inputs", "text-black" ) }>
          <Text className = { classNames( "w-96" ) } type = { "email" } placeholder = { "email" } id = { "login-email" } initValue = { accountInfo?.email } transValue = { emailChange } />
          {/*<input type = "email" placeholder = { "email" } id = { "login-email" } onChange = { emailChange } value = { accountInfo?.email } />*/ }
        </div>
        <Button className = { classNames( "login-form-confirmation", "bg-blue-300" ) } click = { loginHandler }>
          Login
        </Button>
        <p className = { classNames( "w-200", "h-10", message.isError ? "text-red-500" : "text-green-500" ) }>{ message.content }</p>
      </div>
    </div>
  );
}
