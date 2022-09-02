import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../../features/thunks/currentUser";
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormDataDiri = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.currentUser.user);
  const loading = useSelector(state => state.loading.isLoading);
  let userSkillsJSON

  if (user?.skills) userSkillsJSON = JSON.parse(user?.skills)
  const userSkills = userSkillsJSON?.join(", ")

  const UserSchema = Yup.object().shape({
    name: Yup.string().required(),
    job: Yup.string(),
    domicile: Yup.string(),
    workplace: Yup.string(),
    description: Yup.string(),
    skills: Yup.string()
  })

  const formik = useFormik({
    initialValues: {
      name: user?.name || '',
      job: user?.job || '',
      domicile: user?.domicile || '',
      workplace: user?.workPlace || '',
      description: user?.description || '',
      skills: userSkills || ''
    },
    enableReinitialize: true,
    validationSchema: UserSchema,
    onSubmit: (values) => {
      const userData = { 
        ...values,
        workPlace: values.workplace,
        userId: user.id
      }
      
      dispatch(updateUser(userData))
    }
  })

  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="m-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted fs-6">Nama</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan nama"
            autoFocus
            size="sm"
            className="py-3 px-5 text-sm"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted fs-6">Job</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan job"
            size="sm"
            className="py-3 px-5 text-sm"
            name="job"
            onChange={formik.handleChange}
            value={formik.values.job}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted fs-6">Domisili</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan domisili"
            size="sm"
            className="py-3 px-5 text-sm"
            name="domicile"
            onChange={formik.handleChange}
            value={formik.values.domicile}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted fs-6">Tempat kerja</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan tempat kerja"
            size="sm"
            className="py-3 px-5 text-sm"
            name="workplace"
            onChange={formik.handleChange}
            value={formik.values.workplace}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-muted fs-6">Deskripsi singkat</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Tuliskan deskripsi singkat"
            className="py-3 px-3"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted fs-6">Skills</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan skills"
            size="sm"
            className="py-3 px-5 text-sm"
            name="skills"
            onChange={formik.handleChange}
            value={formik.values.skills}
          />
        </Form.Group>

        {/* Button */}
        <div className="d-grid gap-2">
          <Button variant="primary" className="py-3 fw-bold mt-4" type="submit" disabled={loading}>
            {loading ? 'Menyimpan...' :'Simpan'}
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormDataDiri;
