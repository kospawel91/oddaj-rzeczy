import React from 'react';

const Checkbox = ({ type = "checkbox", name, checked = false, onChange, label }) => {
  console.log("Checkbox: ", name, checked);

  return (
    <>
      <input type={type} id={name} name={name} checked={checked} value={label} onChange={onChange} />
    </>
  );
};
export default Checkbox;




