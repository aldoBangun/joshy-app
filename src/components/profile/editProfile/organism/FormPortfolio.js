import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUserPortofolio } from "../../../../features/slices/portofolio";
import { useFormik } from "formik"
import * as Yup from "yup"

const FormPortfolio = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.currentUser.user);
  const loading = useSelector(state => state.loading.isLoading);
  const [imageFile, setImageFile] = useState('');

  const PortofolioSchema = Yup.object().shape({
    appName: Yup.string().required(),
    link: Yup.string().required(),
    type: Yup.string().required(),
    appPicture: Yup.string().required()
  })

  const formik = useFormik({
    initialValues: {
      appName: '',
      link: '',
      type: '',
      appPicture: ''
    },
    validationSchema: PortofolioSchema,
    onSubmit: (values) => {
      const data = {
        ...values,
        userId: user?.id,
        appPicture: imageFile
      }
      
      dispatch(addUserPortofolio(data))
    }
  })

  const handleImageUpload = (e) => {
    const imageFile = e?.target?.files?.[0] || ''

    if (!imageFile) {
      setImageFile('')
      formik.setFieldValue('appPicture', '')
      return
    }
    
    setImageFile(imageFile)
    formik.setFieldValue('appPicture', e.target.value)
  }

  const handleRadioButton = (e) => {
    formik.setFieldValue('type', e.target.value)
  }

  return (
    <>
      <Form className="m-5" onSubmit={formik.handleSubmit} encType="multipart/form-data">

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted fs-6">Nama aplikasi</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan nama apliksi"
            size="sm"
            className="py-3 px-5 text-sm"
            name="appName"
            onChange={formik.handleChange}
            value={formik.values.appName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted fs-6">Demo Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan link aplikasi"
            size="sm"
            className="py-3 px-5 text-sm"
            name="link"
            onChange={formik.handleChange}
            value={formik.values.link}
          />
        </Form.Group>

        <Row className="mb-2">
          <Col lg={3}>
            <p className="text-right text-label tex-muted">Type aplikasi</p>
          </Col>
          <Col lg={2}>
            <Form.Check
              label="Aplikasi Web"
              id="radio-web"
              name="type"
              type="radio"
              value="web"
              onChange={handleRadioButton}
            />
          </Col>
          <Col lg={4}>
            <Form.Check
              label="Aplikasi Mobile"
              id="radio-mobile"
              name="type"
              type="radio"
              value="mobile"
              onChange={handleRadioButton}
            />
          </Col>
        </Row>

        <Form.Group controlId="formFile" className="mb-5">
          <Form.Label className="text-muted">Upload gambar</Form.Label>
          <Form.Control
            type="file"
            size="lg"
            name="appPicture"
            onChange={handleImageUpload}
            value={formik.values.appPicture}
          />
        </Form.Group>
        
        <hr />

        <div className="d-grid gap-2">
          <Button variant="primary" className="py-3 fw-bold mt-4" type="submit" disabled={loading} >
            {loading ? 'Menyimpan' : 'Simpan'}
          </Button>
          <Button variant="secondary" className="py-3 fw-bold">
            Batal
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormPortfolio;
