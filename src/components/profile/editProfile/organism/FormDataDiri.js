import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
// feature
import {
  getProfile,
  profileSelector,
  updateProfileCandidate,
} from "../../../../feature/ProfileSlice";
// atom
import Input from "../atom/Input";

const FormDataDiri = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [domicile, setDomicile] = useState("");
  const [workPlace, setWorkPlace] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const profile = useSelector((state) => profileSelector.selectById(state, id));
  // const profile = useSelector(() => profileSelector.selectAll);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setJob(profile.job);
      setDomicile(profile.domicile);
      setWorkPlace(profile.workPlace);
      setDescription(profile.description);
      setSkills(profile.skills);
    }
  }, [profile]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(
      updateProfileCandidate({
        id,
        name,
        job,
        domicile,
        workPlace,
        description,
        skills,
      })
    );
    // navigate("/profile");
  };

  return (
    <>
      <Form onSubmit={handleUpdate} className="m-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted fs-6">Nama</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan nama"
            size="sm"
            className="py-3 px-5 text-sm"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted fs-6">Job</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan job"
            size="sm"
            className="py-3 px-5 text-sm"
            onChange={(e) => setJob(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted fs-6">Domisili</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan domisili"
            size="sm"
            className="py-3 px-5 text-sm"
            onChange={(e) => setDomicile(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted fs-6">Tempat kerja</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan tempat kerja"
            size="sm"
            className="py-3 px-5 text-sm"
            onChange={(e) => setWorkPlace(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-muted fs-6">Deskripsi singkat</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Tuliskan deskripsi singkat"
            className="py-3 px-3"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-muted fs-6">Skills</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan skills"
            size="sm"
            className="py-3 px-5 text-sm"
            onChange={(e) => setSkills(e.target.value)}
          />
        </Form.Group>

        {/* Button */}
        <div className="d-grid gap-2">
          <Button variant="primary" className="py-3 fw-bold mt-4" type="submit">
            Simpan
          </Button>
          <Button variant="secondary" className="py-3 fw-bold">
            Batal
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormDataDiri;
