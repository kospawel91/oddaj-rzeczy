import React from "react";

const YellowBarComponent = () => {
    
  const yellowSectionComp = [
    {
      title: "Oddanych worków",
      num: "10",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.",
    },
    {
      title: "Wspartych organizacji",
      num: "5",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.",
    },
    {
      title: "Zorganizowanych zbiórek",
      num: "7",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.",
    }
  ]

  return yellowSectionComp.map(({ title, num, text, i }) => {
    return (
      <div className="yellowBar-item" key={i}>
        <div className="yellowBar-num">{num}</div>
        <div className="yellowBar-name">{title}</div>
        <div className="yellowBar-text">{text}</div>
      </div>
    );
  });
};

export default YellowBarComponent;
