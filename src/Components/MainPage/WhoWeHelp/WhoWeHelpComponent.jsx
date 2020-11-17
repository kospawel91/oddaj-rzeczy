import React from "react";
import UnderLineComponent from "../../Utilites/UnderLineComponent";
import ButtonComponent from "../../Utilites/ButtonComponent";
import OrganizationDataComponent from "./OrganizationDataComponent";
import firebase from "../../Firebase/firebase";
import { useState, useEffect } from "react";
import Pagination from './Pagination';

const WhoWeHelpComponent = () => {
  const [organizationType, setOrganizationType] = useState("fundation");
  const [organization, setOrganization] = useState([]);
  const [fundation, setFundation] = useState([]);
  const [collection, setCollection] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const showData = (name) => {
    switch (name) {
      case "fundation":
        return (
          <>
            <OrganizationDataComponent date={currentPostsFundation} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={fundation.length}
              paginate={paginate}
            />
          </>
        );
      case "organization":
        return (
          <>
            <OrganizationDataComponent date={currentPostsOrganization} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={organization.length}
              paginate={paginate}
            />
          </>
        );
      case "collection":
        return (
          <>
            <OrganizationDataComponent date={currentPostsCollecion} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={collection.length}
              paginate={paginate}
            />
          </>
        );
      default:
        break;
    }
  };

  const getOrganization = async () => {
    let response1 = await firebase.organization();
    response1.onSnapshot((querySnapshot) => {
      const items1 = [];
      querySnapshot.forEach((doc) => {
        items1.push(doc.data());
      });
      setOrganization(items1);
    });
  };

  const getFundation = async () => {
    let response2 = await firebase.fundation();
    response2.onSnapshot((querySnapshot) => {
      const items2 = [];
      querySnapshot.forEach((doc) => {
        items2.push(doc.data());
      });
      setFundation(items2);
    });
  };

  const getCollection = async () => {
    let response3 = await firebase.collection();
    response3.onSnapshot((querySnapshot) => {
      const items3 = [];
      querySnapshot.forEach((doc) => {
        items3.push(doc.data());
      });
      setCollection(items3);
    });
  };

  useEffect(() => {
    getOrganization();
    getFundation();
    getCollection();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPostsOrganization = organization.slice(indexOfFirstPost, indexOfLastPost);
  const currentPostsFundation = fundation.slice(indexOfFirstPost, indexOfLastPost);
  const currentPostsCollecion = collection.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="whowehelp-under">
        <UnderLineComponent text="Komu pomagamy?" />
      </div>
      <div className="whowehelp-buttons">
        <ButtonComponent
          buttonText="Fundacjom"
          onClick={() => setOrganizationType("fundation")}
        />
        <ButtonComponent
          buttonText={`Organizacjom
        pozarządowym`}
          onClick={() => setOrganizationType("organization")}
        />
        <ButtonComponent
          buttonText={`Lokalnym
        Zbiórkom`}
          onClick={() => setOrganizationType("collection")}
        />
      </div>
      <div className="whowehelp-wrapper">
        <div className="whowehelp-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quas,
          illum aut reprehenderit neque quos atque quisquam eligendi, suscipit
          praesentium earum architecto labore omnis et sequi harum natus numquam
          vel.
        </div>
      </div>
      {showData(organizationType)}
      
    </>
  );
};

export default WhoWeHelpComponent;
