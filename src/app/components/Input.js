import React, { Component } from "react";

const Input = (props) => {
  let object = {};

  if (props.shrink) {
    object = {
      shrink: true,
    };
  }

  return (
    <>
      <textarea 
      placeholder={props.placeholder}
      id={props.id}
      className={props.className}
      onChange={props.onChange}
      value={props.value}
       />
    </>
  );
};

export default Input;