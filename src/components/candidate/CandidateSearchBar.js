import { Form, Button, Dropdown } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const CandidateSearchBar = () => {
  const styleSearchIcon = {
    position: "absolute",
    top: "50%",
    right: "2rem",
    transform: "translateY(-50%)"
  }

  return (
    <div className="bg-white rounded p-3 shadow-lg">
      <Form>
        <div className="d-flex gap-3">
          <div className="position-relative w-100 border-end border-1 border-dark pe-4">
            <Form.Control type="text" placeholder="Search for any skills" className="bg-transparent border-0"/>
            <Search size={24} color="gray" style={styleSearchIcon} />
          </div>

          <Dropdown>
            <Dropdown.Toggle className="bg-transparent text-bg-light border-0" id="dropdown-basic">
              Sort
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          <Button>Search</Button>
        </div>
      </Form>
    </div>
  )
}

export default CandidateSearchBar;