import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import { UserPerPage } from "../components/UserPerPage";
import Users from "../components/Users";

function Github() {
  const [portfolio, setPortFolio] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [dynamicRoute, setDynamicRoute] = useState(false);
  
  function scrollView(z) {
    z.current.scrollIntoView();
  }
  function chooseRepo() {
    
    setDynamicRoute(true);
  }

  useEffect(() => {
    fetch("https://api.github.com/users/MemunatTairu/repos")
      .then((res) => res.json())
      .then((data) => {
        setPortFolio(data);
        setTotalPages(Math.ceil(data.length / UserPerPage));
        setLoading(false);
      });
  }, []);
  const handleClick = (btn) => {
    if (btn === "next") {
      setPage(page +1 );
      return;
    }
    setPage(page -1 );
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div
      style={{ width: "100", 
      border: "1px soild black", 
      position: "relative", 
      textAlign: "center",
     }}
    >
      <h2 className="repository-list">Github Repositories </h2> 
      <Users
        users={portfolio}
        page={page}
        chooseRepo={chooseRepo}
        scrollView={scrollView}
        dynamicRoute={dynamicRoute}
      />

      <Pagination
        totalPages={totalPages}
        handleClick={handleClick}
        setPage={setPage}
        page={page}
      />
    </div>
  );
}

export default Github;