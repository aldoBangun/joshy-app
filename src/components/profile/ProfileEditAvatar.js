import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form } from 'react-bootstrap'
import { Pencil } from 'react-bootstrap-icons'
import { updateUser } from '../../features/thunks/currentUser'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ProfileEditAvatar = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.currentUser.user)
  const loading = useSelector(state => state.loading.isLoading)
  const [imageFile, setImageFile] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [error, setError] = useState('')

  const AvatarSchema = Yup.object().shape({
    profilePicture: Yup.string().required()
  })

  const formik = useFormik({
    initialValues: {
      profilePicture: ''
    },
    validationSchema: AvatarSchema,
    onSubmit: () => {
      const data = {
        userId: user.id,
        profilePicture: imageFile
      }
      dispatch(updateUser(data))
    }
  })

  const previewImage = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImageURL(reader.result)
    }
  }

  const handleChange = (e) => {
    const ONE_MEGA_BYTE = 1024 * 1024
    const selectedFile = e?.target?.files[0]
    const allowedFileType = ['image/jpeg', 'image/jpg', 'image/png']

    if (!selectedFile) {
      setImageFile('')
      setImageURL('')
      formik.setFieldValue('profilePicture', '')
      return
    } 
    const isValidImageType = allowedFileType.indexOf(selectedFile?.type) !== -1
    const isValidImageSize = selectedFile?.size <= ONE_MEGA_BYTE
    const isNotValidInput = !isValidImageType || !isValidImageSize

    if (isNotValidInput) {
      setError('Please insert a valid image format and size')
      setImageURL('')
      setImageFile('')
      formik.setFieldValue('profilePicture', '')
      return    
    }

    setError('')
    setImageFile(selectedFile)
    previewImage(selectedFile)
    formik.setFieldValue('profilePicture', e?.target?.value || '')
  }

  return (
    <>
      {user && (
        <>
          <img 
            className="edit-profile-avatar rounded-circle d-block mb-3"
            src={imageURL ? imageURL : user.profilePicture}
            alt="user-avatar"
            height={200}
            width={200}
          />

          {error && <small className="text-danger text-center">{error}</small>}

          <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <Form.Group controlId="avatar">
              <Form.Label className="label-edit-avatar d-flex gap-2 align-items-center justify-content-center cursor-pointer fw-semibold">
                <span>Edit</span>
                <Pencil />
              </Form.Label>
              <Form.Control
                className="d-none"
                type="file"
                name="profilePicture"
                onChange={handleChange}
                value={formik.values.profilePicture}
              />
            </Form.Group>

            {imageFile && (
              <div className="d-grid">
                <Button className="mt-4" type="submit" disabled={loading}>
                  {loading ? 'Mengunggah' : 'Unggah Foto'}
                </Button>
              </div>
            )}
          </Form>
        </>
      )}
    </>
  )
}

export default ProfileEditAvatar