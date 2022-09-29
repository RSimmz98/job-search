import React, { useState, useEffect } from "react";
import jobs from "../data/jobs";

function Job(props) {
  const { job } = props;
  const { title, description } = job;
  const { isDetail, setDetail } = useState(false);

  function handleClick() {
    setDetail(true);
  }
  return (
    <div>
      <li>
        <article onClick={handleClick}>
          <div>
            <h4>{title}</h4>
            {isDetail ? <p>{description}</p> : null}
          </div>
        </article>
      </li>
    </div>
  );
}

const Joblist = (props) => {
  const { searchText, showOnlyFeaturedJobs, showOnlyRemoteJobs } = props;
  const filteredJobs = Array.from(jobs).filter((job) => {
    return job.title.toLowerCase().includes(value.toLowerCase());
  });

  if (showOnlyFeaturedJobs) {
    filteredJobs = filteredJobs.filter((job) => job.isFeatured);
  }

  if (showOnlyRemoteJobs) {
    filteredJobs = filteredJobs. filter(job => job.isRemote)
  }

  return (
    <div>
      <ol>
        {filteredJobs.map((job) => (
          <Job key={job.title} job={job} />
        ))}
      </ol>
    </div>
  );
};

export default Joblist;
