import React, { useState, useEffect } from "react";

const Filterjobs = (props) => {
  const {
    searchText,
    setSearchText,
    showOnlyFeaturedJobs,
    setShowOnlyFeaturedJobs,
    showOnlyRemoteJobs,
    setShowOnlyRemoteJobs,
  } = props;

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  function handleShowFeaturedOnlyChange(event) {
    showOnlyFeaturedJobs(event.target.checked);
  }

  function handleShowRemotOnlyChange(event) {
    showOnlyFeaturedJobs(event.target.checked);
  }

  return (
    <section className="text-center align-center p-4 m-4">
      <h1 className="text-center text-white text-3xl bg-cyan-500 hover:bg-cyan-600">Search Jobs</h1>
      <div>
        <div>
          <input
            className="border-2 m-4 border-rose-500"
            value={searchText}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label >Options</label>
      </div>
      <div >
        <div>
          <label>
            {" "}
            <input
              id="featured"
              type="checkbox"
              checked={showOnlyFeaturedJobs}
              onChange={handleShowFeaturedOnlyChange}
              className="mr-2"
            />
            Featured
          </label>
        </div>
        <div>
          <label htmlFor="remote">
            <input id="remote" 
            type="checkbox" 
            checked={showOnlyRemoteJobs}
            onChange={handleShowRemotOnlyChange}
            className="mr-2"/>
            Remote
          </label>
        </div>
      </div>
    </section>
  );
};

export default Filterjobs;
