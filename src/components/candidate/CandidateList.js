import React from "react";
import { Alert, Card, ListGroup } from "react-bootstrap";
import CandidateItem from "./CandidateItem";
import axios from "axios";

const CandidateList = (props) => {
  const {searchData, sortData} = props;

  const [candidatesData, setCandidatesData] = React.useState([]);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    setIsError(false)
    axios.get('/users', {
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