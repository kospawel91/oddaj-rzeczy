import React from 'react';

const OrganizationDataComponent = () => {
    const data = [
      {
        title: "Zbiórka LoremIpsum",
        text: "lasdasdfasdgfgdfshadsfasdfdsfghadfad",
        things: "ubrania, monitory",
      },
      {
        title: "Zbiórka LoremIpsum2",
        text: "lasdasdfasdgfgdfshadsfasdfdsfghadfad",
        things: "ubrania, monitory",
      },
      {
        title: "Zbiórka LoremIpsum3",
        text: "lasdasdfasdgfgdfshadsfasdfdsfghadfad",
        things: "ubrania, monitory",
      },
    ];
    return (
      <div className="organization-data">
        <ul className="organization-data-list">
          {data.map((el, i) => {
            return (
              <li key={i} className="organization-data-list-item">
                <div className="list-item-left">
                  <h1>{el.title}</h1>
                  <p>{el.text}</p>
                </div>
                <div className="list-item-right">
                  <p>{el.things}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export default OrganizationDataComponent;