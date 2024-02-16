'use client';
import Button from "@/components/Button/Button";
import Text from "@/components/InputElement/Text";
import { axios } from "@/config/axios.config";
import { useAuth } from "@/middlewares/auth";
import { AxiosResponse } from "axios";
import classNames from "classnames";
import { JSX, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function Home(): JSX.Element{
  const [ data, setData ] = useState( [] );
  useEffect( () => {
  }, [] );
  useAuth();
  return (
    <div id = { "home-layout" } className = { classNames( "h-screen", "grid", "gap-y-1", "p-2" ) } style = { { gridTemplateRows: "80px 1fr" } }>
      <Header setData = { setData } />
      <RenderResult data = { data } />
    </div>
  );
}
function Header( { setData }: { setData: ( data: any ) => void } ): JSX.Element{
  const [ search, setSearch ] = useState( '' );
  function searchHandler(){
    axios.get( "api/search", {
      params: { q: search },
    } )
         .then( ( response: AxiosResponse ) => {
           setData( response.data );
         } )
         .catch( ( error ) => {
         } );
  }
  return (
    <div id = { "home-layout-header" } className = { classNames( "convex border-rd-10", "h-20" ) }>
      <div id = { "search-area" } className = { classNames( "flex" ) }>
        <Text id = { "search-bar" } placeholder = { "search" } className = { classNames( "w-80" ) } transValue = { setSearch } />
        <Button click = { searchHandler }><IoSearch /></Button>
      </div>
    </div>
  );
}
function RenderResult( { data }: { data: any[] } ): JSX.Element{
  return (
    <div id = { "home-render-result" } className = { classNames( "concave border-rd-10", "m-2", "h-full") }>
      { data.map( ( searchedResult ) => (
        <div key = { searchedResult.url } className = { classNames( "convex border-rd-10", "m-4","grid" ) }>
          <span className={classNames("opacity-50", "font-light", "text-sm")}>{ searchedResult.host }</span>
          <a href = { searchedResult.url }>{ searchedResult.title }</a>
        </div>
      ) ) }
    </div>
  );
}
