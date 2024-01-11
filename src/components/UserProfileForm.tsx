"use client";
import { axios } from "@/config/axios.config";
import { AxiosResponse } from "axios";
import classNames from "classnames";
import { ChangeEvent, JSX, useEffect, useState } from "react";

interface UserProfile{
  "id"?: number,
  "name"?: string,
  "email"?: string,
  "email_verified_at"?: Date,
  "created_at"?: Date,
  "updated_at"?: Date,
}
export default function UserProfileForm(): JSX.Element{
  const [ profile, setProfile ] = useState<UserProfile>();
  const [ message, setMessage ] = useState<string>( "" );
  useEffect( () => {
    axios.get( "/api/auth/profile" ).then( ( response: AxiosResponse<UserProfile> ) => {
      setProfile( response.data );
    } );
  }, [] );
  function changeName( event: ChangeEvent<HTMLInputElement> ){
    setProfile( { ...profile, name: event.target.value } );
  }
  function saveChange(){
    axios.post( "/api/auth/change-profile", { name: profile?.name, id: profile?.id } )
         .then( ( response: AxiosResponse ) => {
           setProfile( response.data?.["data"] );
           setMessage( response.data?.["message"] );
         } )
         .catch( ( error ) => {
           setMessage( error?.response.data?.errors );
         } );
  }
  return (
    <div className = { classNames( "user-profile-form" ) }>
      <div id = { "user-profile-form-inputs" } className = { classNames() }>
        <input className = { classNames( "text-black" ) } type = "text" placeholder = { "name" } id = { "user-name" } value = { profile?.name } onChange = { changeName } />
        <p id = { "user-email" }>{ profile?.email }</p>
      </div>
      <div id = { "user-profile-form-confirmation" } onClick = { saveChange }>
        Save change
      </div>
      <p className = { classNames( "text-xs" ) }>{ message }</p>
    </div>
  );
}
