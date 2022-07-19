import { Container } from "react-bootstrap";
import CandidateHeader from "../components/candidate/CandidateHeader";
import CandidateSearchBar from "../components/candidate/CandidateSearchBar";
import CandidateList from "../components/candidate/CandidateList";
import CandidatePagination from "../components/candidate/CandidatePagination";

const Candidate = () => {
  return (
    <>
      <CandidateHeader />
      <Container>
        <CandidateSearchBar />
        <CandidateList />
        <CandidatePagination totalPage={6} currentPage={1} />
      </Container>
    </>
  )
}

export default Candidate;