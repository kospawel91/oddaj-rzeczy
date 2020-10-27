import React from 'react';
import shirt from '../../../assets/Icon-1.svg'
import bag from '../../../assets/Icon-2.svg'
import magnifi from '../../../assets/Icon-3.svg'
import kurierOrder  from '../../../assets/Icon-4.svg'

const FourStepsItemsComponent = () => {
  const itemComponents = [
    {
      image: [shirt],
      name: "Wybierz rzeczy",
      text: "ubrania, zabawki, sprzęt i inne",
    },
    {
      image: [bag],
      name: "Spakuj je",
      text: "skorzystaj z worków na śmieci",
    },
    {
      image: [magnifi],
      name: "Zdecyduj komu \nchcesz pomuc",
      text: "wybierz zaufane miejsce",
    },
    {
      image: [kurierOrder],
      name: "Zamów kuriera",
      text: "kurier przyjedzie w dogodnym terminie",
    },
  ];
  return (
    <div className="fourItemContainer">
      {itemComponents.map(({ image, name, text, i }) => {
        return (
          <div className="fourItemContainer-item" key={i}>
            <img className="fourItemContainer-image" src={image} />
            <h2 className="fourItemContainer-name">{name}</h2>
            <hr className="fourItemContainer-hr" />
            <p className="fourItemContainer-text">{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FourStepsItemsComponent;