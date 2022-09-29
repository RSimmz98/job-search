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
    <section>
      <h1 className="text-center text-3xl">Search Jobs</h1>
      <div>
        <div>
          <input
            className="bg-blue-500 align-center border-2px-solid-red-500"
            value={searchText}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label>Options</label>
      </div>
      <div>
        <div>
          <label>
            {" "}
            <input
              id="featured"
              type="checkbox"
              checked={showOnlyFeaturedJobs}
              onChange={handleShowFeaturedOnlyChange}
            />
            Featured
          </label>
        </div>
        <div>
          <label htmlFor="remote">
            <input id="remote" 
            type="checkbox" 
            checked={showOnlyRemoteJobs}
            onChange={handleShowRemotOnlyChange}/>
            Remote
          </label>
        </div>
      </div>
    </section>
  );
};

export default Filterjobs;
