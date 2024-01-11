import UserProfileForm from "@/components/UserProfileForm";
import classNames from "classnames";
import { JSX } from "react";

export default function ProfilePage(): JSX.Element{
  return (
    <div id = { "profile-page" } className = { classNames( "mx-auto" ) } style = { { width: "100vw", height: "100vh" } }>
      <UserProfileForm />
    </div>
  );
}



class Hehe{
}




let abc = new Hehe();
