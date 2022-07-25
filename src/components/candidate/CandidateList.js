import React from "react";
import { Alert, Card, ListGroup } from "react-bootstrap";
import CandidateItem from "./CandidateItem";
import axios from "axios";

const CandidateList = (props) => {
  const {searchData, sortData} = props;

  const [candidatesData, setCandidatesData] = React.useState([]);
  const [isError, setIsError] = React.useState(false);

  //TOKEN
  const config = { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoibG9lYmlzLnRlY2hAZ21haWwuY29tIiwicHJvZmlsZVBpY3R1cmUiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9ub2N0dXJuY2xvdWQvaW1hZ2UvdXBsb2FkL3YxNjU4NjcxOTQwL2Fnd3ljbmdmN2t3d2docXRhNzBtLnBuZyIsImNvdmVySW1hZ2UiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9ub2N0dXJuY2xvdWQvaW1hZ2UvdXBsb2FkL3YxNjU4NjUyNDg4L2d3MW0wY2xtNTNweG1sbW5xd21vLmpwZyIsInJvbGVJZCI6MSwiaWF0IjoxNjU4NzQwNDMxLCJleHAiOjE2NTg4MjY4MzF9.sAgNkHdYA8sdBfnXJBaYu08aM0laoydsRWftZNxHjwU`}

  React.useEffect(() => {
    setIsError(false)
    axios.get('https://joshy-app.herokuapp.com/users', {
      headers: config,
      params: {
        sortBy: sortData,
        value: searchData
      }
    })
    .then((res) => {
      setCandidatesData(res?.data)
    })
    .catch((err) => {
      setIsError(true)
    })
  },[sortData, searchData])

  return (
    <>
      <Card className="shadow-lg border-0 my-5">
      {isError ? <Alert variant="danger">Data not found!</Alert> : null}
      <ListGroup>
        {candidatesData?.map(data => (
          <CandidateItem key={data.id} {...data}/>
        ))}
      </ListGroup>
      </Card>
    </>
  )
}

export default CandidateList;