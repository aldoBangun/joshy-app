import { Container } from "react-bootstrap";
import CandidateHeader from "../components/candidate/CandidateHeader";
import CandidateSearchBar from "../components/candidate/CandidateSearchBar";
import CandidateList from "../components/candidate/CandidateList";
// import CandidatePagination from "../components/candidate/CandidatePagination";
import React from "react";

const Candidate = () => {
  const [sortBy, setSortBy] = React.useState('')
  const [searchValue, setSearchValue] = React.useState('')
  return (
    <>
      <CandidateHeader />
      <Container>
        <CandidateSearchBar sortBy={value => setSortBy(value)} searchValue={value => setSearchValue(value) } />
        <CandidateList searchData={searchValue} sortData={sortBy}/>
        {/* DISABLED PAGINATION FOR CANDIDATE LIST */}
        {/* <CandidatePagination totalPage={6} currentPage={1} /> */}
      </Container>
    </>
  )
}

export default Candidate;