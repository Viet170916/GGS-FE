'use client';
import Button from "@/components/Button/Button";
import Text from "@/components/InputElement/Text";
import classNames from "classnames";
import { JSX, useEffect, useMemo } from "react";
import { IoSearch } from "react-icons/io5";

export default function Home(): JSX.Element{
  useEffect( () => {
  }, [] );
  // useAuth();
  const ThisHeader = useMemo<() => JSX.Element>( () => Header, [] );
  const ThisRenderResult = useMemo<() => JSX.Element>( () => RenderResult, [] );
  return (
    <div id = { "home-layout" } className = { classNames( "h-screen", "grid", "gap-y-1", "p-2" ) } style = { { gridTemplateRows: "80px 1fr" } }>
      <ThisHeader />
      <ThisRenderResult />
    </div>
  );
}
function Header(): JSX.Element{
  function searchHandler(){
  }
  return (
    <div id = { "home-layout-header" } className = { classNames( "convex border-rd-10", "h-20" ) }>
      <div id = { "search-area" } className = { classNames( "flex" ) }>
        <Text id = { "search-bar" } placeholder = { "search" } className = { classNames( "w-80" ) } />
        <Button click = { searchHandler }><IoSearch /></Button>
      </div>
    </div>
  );
}
function RenderResult(): JSX.Element{
  function searchHandler(){
  }
  return (
    <div id = { "home-render-result" } className = { classNames( "concave border-rd-10", "m-2", "h-full" ) }>
    </div>
  );
}
