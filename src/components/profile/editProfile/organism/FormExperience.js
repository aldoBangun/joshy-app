import { Button, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUserExperience } from "../../../../features/slices/experience";
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormExperience = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.currentUser.user)
  const loading = useSelector(state => state.loading.isLoading)

  const ExperienceSchema = Yup.object().shape({
    position: Yup.string().required(),
    companyName: Yup.string().required(),
    startDate: Yup.date(),
    endDate: Yup.date(),
    description: Yup.string()
  })

  const formik = useFormik({
    initialValues: {
      position: '',
      companyName: '',
      startDate: '',
      endDate: '',
      description: ''
    },
    validationSchema: ExperienceSchema,
    onSubmit: (values) => {
      const data = { ...values, userId: user.id }
      dispatch(addUserExperience(data))
    }
  })

  return (
    <>
      <Form className="m-5" onSubmit={formik.handleSubmit}>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted fs-6">Posisi</Form.Label>
          <Form.Control
            type="text"
            placeholder="Web developer"
            size="sm"
            className="py-3 px-5 text-sm"
            name="position"
            onChange={formik.handleChange}
            value={formik.values.position}

          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-muted fs-6">
                Nama perusahaan
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="PT Jhosy"
                size="sm"
                className="py-3 px-5 text-sm"
                name="companyName"
                onChange={formik.handleChange}
                value={formik.values.companyName}

              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-muted fs-6">Tahun masuk</Form.Label>
              <Form.Control
                type="date"
                size="sm"
                className="py-3 px-5 text-sm"
                name="startDate"
                onChange={formik.handleChange}
                value={formik.values.startDate}

              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-muted fs-6">Tahun keluar</Form.Label>
              <Form.Control
                type="date"
                size="sm"
                className="py-3 px-5 text-sm"
                name="endDate"
                onChange={formik.handleChange}
                value={formik.values.endDate}

              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-muted fs-6">Deskripsi singkat</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Deskripsikan pekerjaan anda"
            className="py-3 px-3"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}

          />
        </Form.Group>

        <hr />

        <div className="d-grid gap-2">
          <Button variant="primary" className="py-3 fw-bold mt-4" type="submit" disabled={loading}>
            {loading ? 'Menambahkan Data' : 'Tambah pengalaman kerja'}
          </Button>
          <Button variant="secondary" className="py-3 fw-bold">
            Batal
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormExperience;
