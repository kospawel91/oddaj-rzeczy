import React,{useEffect,useState} from 'react';

const OrganizationDataComponent = ({date}) => {
 
    return (
      <div className="organization-data">
        <ul className="organization-data-list">
          {date.map((el, i) => {
            return (
              <li key={i} className="organization-data-list-item">
                <div className="list-item-left">
                  <h1>{el.name}</h1>
                  <p>{el.desc}</p>
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