import { useEffect } from "react";
import { Card, Tabs, Tab } from "react-bootstrap";
import CandidatePortofolioList from "./CandidatePortofolioList";
import CandidateExperienceList from "./CandidateExperienceList";
import { useSelector, useDispatch } from 'react-redux'
import { getUserPortofolios, portofolioSelector } from "../../features/slices/portofolio";
import { getUserExperiences, experienceSelector } from "../../features/slices/experience";
import { useParams } from 'react-router-dom'

const ProfileCandidateTabs = () => {
  const dispatch = useDispatch()
  const portofolios = useSelector(portofolioSelector.selectAll)
  const experiences = useSelector(experienceSelector.selectAll)
  const { userId } = useParams()

  useEffect(() => {
    dispatch(getUserPortofolios(userId))
    dispatch(getUserExperiences(userId))
  }, [userId, dispatch])

  // const SIX_MONTH_IN_MILISECON = 1000 * 60 * 60 * 24 * 30 * 6;

  // const experiences = [
  //   {
  //     id: 1,
  //     position: 'Pirates',
  //     company_name: 'Crusty Crab',
  //     start_date: new Date().getTime() - SIX_MONTH_IN_MILISECON,
  //     end_date: new Date().getTime(),
  //     description: 'A place where you can order Craby Patty',
  //     candidate_profile_id: 1
  //   },
  //   {
  //     id: 2,
  //     position: 'Pirates',
  //     company_name: 'Crusty Crab',
  //     start_date: new Date().getTime() - SIX_MONTH_IN_MILISECON,
  //     end_date: new Date().getTime(),
  //     description: 'A place where you can order Craby Patty',
  //     candidate_profile_id: 1
  //   }
  // ]

  return (
    <>
      <Card className="border-0 p-4" style={{ minHeight: "20rem" }}>
        <Tabs
          defaultActiveKey="portofolio"
          id="uncontrolled-tab-example"
          className="mb-3 border-0"
        >
          <Tab eventKey="portofolio" title="Portofolio" className="border-0">
            <CandidatePortofolioList portofolios={portofolios}/>
          </Tab>
          <Tab eventKey="experience" title="Pengalaman Kerja" className="border-0">
            <CandidateExperienceList experiences={experiences} />
          </Tab>
        </Tabs>
      </Card>
    </>
  )
}

export default ProfileCandidateTabs;