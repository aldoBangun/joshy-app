import { Pagination } from "react-bootstrap";

const CandidatePagination = (props) => {
  const { totalPage, currentPage } = props
  const pages = []

  for(let i=1; i <= totalPage; i++) {
    pages.push(i)
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <Pagination className="gap-2">
          <Pagination.Prev className="rounded-0" />
          {pages.map((page) => (
            <Pagination.Item key={page} active={page===currentPage}>{page}</Pagination.Item>
          ))}
          <Pagination.Next />
        </Pagination>
      </div>
    </>
  )
}

export default CandidatePagination;