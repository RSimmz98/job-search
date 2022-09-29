import React, {useState} from 'react';
import './App.css';
import { FilterJobs, JobList } from './components/index';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [searchText, setSearchText] = useState("")
  const [showOnlyRemoteJobs, setShowOnlyRemoteJobs] = useState(false)
  const [showOnlyFeaturedJobs, setShowOnlyFeaturedJobs] = useState(false)


  return (
    <div>
      <FilterJobs
       searchText={searchText} 
       setSearchText={setSearchText}
        setShowOnlyFeaturedJobs={setShowOnlyFeaturedJobs}
        showOnlyFeaturedJobs={showOnlyFeaturedJobs}
        showOnlyRemoteJobs={showOnlyRemoteJobs}
        setShowOnlyRemoteJobs={setShowOnlyRemoteJobs}
        />
      <JobList 
       searchText={searchText}
       showOnlyFeaturedJobs={showOnlyFeaturedJobs}
       showOnlyRemoteJobs={showOnlyRemoteJobs} />
    </div>
  );
}

export default App;
