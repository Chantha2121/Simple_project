import React from "react";
export  default function App(){
  return (
    <>
      <Greeting/>
      <Job/>
    </>
  );
}
function Greeting(){
  return <h1>Welcome</h1>
}
function Job(){
  return <h3>I am student</h3>
}