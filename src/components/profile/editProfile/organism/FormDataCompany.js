import React from "react";
import { Form, Button } from "react-bootstrap";
import { updateUser } from "../../../../features/thunks/currentUser"; 
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormDataCompany = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.currentUser.user)
  const loading = useSelector(state => state.loading.isLoading)

  const CompanySchema = Yup.object().shape({
    companyName: Yup.string().required(),
    companyField: Yup.string().required(),
    companyDomicile: Yup.string().required(),
    description: Yup.string().required(),
    email: Yup.string().email().required(),
    phoneNumber: Yup.string().required(),
    instagram: Yup.string().required(),
    linkedin: Yup.string().required()
  })

  const formik = useFormik({
    initialValues: {
      companyName: user?.companyName || '',
      companyField: user?.companyField || '',
      companyDomicile: user?.companyDomicile || '',
      description: user?.description || '',
      email: user?.email || '',
      phoneNumber: user?.phoneNumber || '',
      instagram: user?.instagram || '',
      linkedin: user?.linkedin || ''
    },
    validationSchema: CompanySchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const data = {
        userId: user?.id,
        ...values
      }
      dispatch(updateUser(data))
    }
  })

  return (
    <>
      <Form className="mx-5 my-3" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="companyName">
          <Form.Label className="text-muted fs-6"> Nama perusahaan </Form.Label>
          <Form.Control
            className="py-3 px-5 text-sm"
            type="text"
            placeholder="Masukan nama perusahaan"
            name="companyName"
            onChange={formik.handleChange}
            value={formik.values.companyName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="companyField">
          <Form.Label className="text-muted fs-6"> Bidang </Form.Label>
          <Form.Control
            className="py-3 px-5 text-sm"
            type="text"          
            placeholder="Masukan bidang perusahaan ex : Financial"
            name="companyField"
            onChange={formik.handleChange}
            value={formik.values.companyField}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="companyDomicile">
          <Form.Label className="text-muted fs-6"> Kota </Form.Label>
          <Form.Control
            className="py-3 px-5 text-sm"
            type="text" 
            placeholder="Masukan kota"
            name="companyDomicile"
            onChange={formik.handleChange}
            value={formik.values.companyDomicile}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label className="text-muted fs-6">Deskripsi </Form.Label>
          <Form.Control
            className="py-3 px-3"
            as="textarea"
            rows={4}    
            placeholder="Tuliskan deskripsi singkat"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="text-muted fs-6"> Email </Form.Label>
          <Form.Control
            className="py-3 px-5 text-sm"
            type="email" 
            placeholder="Masukan email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="instagram">
          <Form.Label className="text-muted fs-6"> Instagram </Form.Label>
          <Form.Control
            className="py-3 px-5 text-sm"
            type="text"
            placeholder="Masukan nama instagram"
            name="instagram"
            onChange={formik.handleChange}
            value={formik.values.instagram}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label className="text-muted fs-6"> Nomor telepon </Form.Label>
          <Form.Control
            className="py-3 px-5 text-sm"
            type="text"  
            placeholder="Masukan nomor telepon"
            name="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="companyName">
          <Form.Label className="text-muted fs-6"> Linkedin </Form.Label>
          <Form.Control
            className="py-3 px-5 text-sm"
            type="text"
            placeholder="Masukan nama linkedin"
            name="linkedin"
            onChange={formik.handleChange}
            value={formik.values.linkedin}
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" className="py-3 fw-bold mt-3" type="submit" disabled={loading}>
            {loading ? 'Menyimpan' : 'Simpan' }
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormDataCompany;
