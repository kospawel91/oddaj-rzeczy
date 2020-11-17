import React from 'react';

const InputKurier = ({
  type = "input",
  name,
  onChange,
}) => {
  return (
    <>
      <input
        className="kurier-input"
        type={type}
        id={name}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

export default InputKurier;