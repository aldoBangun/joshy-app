import { Form, Button } from "react-bootstrap";

const CandidateSearchBar = () => {
  return (
    <div className="bg-white rounded p-2 shadow-lg">
      <Form>
        <div className="d-flex">
          <Form.Control type="text" placeholder="Search for any skills" className="bg-transparent border-0"/>
          <Button>Search</Button>
        </div>
      </Form>
    </div>
  )
}

export default CandidateSearchBar;