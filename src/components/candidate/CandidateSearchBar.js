import React from "react";
import { Form, Button, Dropdown } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const CandidateSearchBar = (props) => {
  const styleSearchIcon = {
    position: "absolute",
    top: "50%",
    right: "2rem",
    transform: "translateY(-50%)"
  }

  const {searchValue: searchInput, sortBy: sortInput} = props

  const [sortByValue, setSortByValue] = React.useState('')
  const [searchValue, setSearchValue] = React.useState('')

  const inputToSend = (searchValue, sortValue) => {
    searchInput(searchValue)
    sortInput(sortValue)
  }

  return (
    <div className="bg-white rounded p-3 shadow-lg">
      <Form>
        <div className="d-flex gap-3">
          <div className="position-relative w-100 border-end border-1 border-dark pe-4">
            <Form.Control type="text" placeholder="Search for any skills" className="bg-transparent border-0" onChange={e => setSearchValue(e?.target?.value)}/>
            <Search size={24} color="gray" style={styleSearchIcon} />
          </div>

          <Dropdown>
            <Dropdown.Toggle className="bg-transparent text-bg-light border-0" id="dropdown-basic">
              Sort
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSortByValue('name')}>Nama</Dropdown.Item>
              <Dropdown.Item onClick={() => setSortByValue('domicile')}>Lokasi</Dropdown.Item>
              <Dropdown.Item onClick={() => setSortByValue('skill')}>Skill</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          <Button onClick={() => inputToSend(searchValue, sortByValue)}>Search</Button>
        </div>
      </Form>
    </div>
  )
}

export default CandidateSearchBar;