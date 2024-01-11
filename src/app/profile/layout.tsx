"use client";
import { useAuth } from "@/middlewares/auth";
import classNames from "classnames";
import React, { JSX } from "react";

export default function ProfileLayout( { children }: { children: React.ReactNode } ): JSX.Element{
  useAuth();
  return (
    <div id = { "profile-form-layout" } className = { classNames( "" ) }>
      { children }
    </div>
  );
}
