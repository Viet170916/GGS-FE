import { axios } from "@/config/axios.config";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useAuth( token: string | null = null ): boolean{
  const router = useRouter();
  const [ isAuth, setIsAuth ] = useState( false );
  const request = token ? {
    headers: {
      Authorization: `Bearer ${ token }`,
    },
  } : undefined;
  useEffect( (): any => {
    axios.get( `/api/auth/is-login`, request )
         .then( ( response ) => {
           const isLoggedIn = response.data["is-login"] ?? null;
           setIsAuth( true );
           if( !isLoggedIn ){
             router.push( '/login' );
             setIsAuth( false );
           }
         } )
         .catch( () => {
           router.push( '/login' );
         } );
  }, [] );
  return isAuth;
}
