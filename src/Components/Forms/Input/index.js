import React from "react";
import * as C from "./style.js";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  validarAt,
  erro,
}) => {
  return (
    <C.Label>
      {label}
      <C.Input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={validarAt}
      />
      {erro ? <C.Erro>{erro}</C.Erro> : ''}
    </C.Label>
  );
};

export default Input;
