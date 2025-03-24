import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/AddRepas.css'

const AddRepas = () => {
  const navigate = useNavigate();
  const [urlImage, setUrlImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categorie, setCategorie] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading === true) {
      setUrlImage(null);
      setTitle('');
      setDescription('');
      setCategorie('');
      setLoading(false);
      navigate('/DisplayRepas');
    }
  }, [loading, navigate]);

  const titleValue = (e) => {
    setTitle(e.target.value);
  };

  const imageValue = (e) => {
    setUrlImage(e.target.files[0]);
  };

  const descriptionValue = (e) => {
    setDescription(e.target.value);
  };

  const categorieValue = (e) => {
    setCategorie(e.target.value);
  };

  const uploadData = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('file', urlImage);
      data.append('upload_preset', 'RestoranBlogImages');
      const image = await axios.post('https://api.cloudinary.com/v1_1/ddvr5er0g/image/upload', data);
      await axios.post('http://localhost:4000/repas', {
        title,
        description,
        categorie,
        image: image.data.secure_url,
      });
      setLoading(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="add-repas-container d-flex justify-content-center align-items-center vh-100">
      <Container className="w-50 bg-light p-5 rounded shadow">
        <h1 className="text-center mb-4">Ajouter un repas</h1>
        <Form onSubmit={uploadData}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Titre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Titre"
              onChange={titleValue}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Description"
              onChange={descriptionValue}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              onChange={imageValue}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="categorie">
            <Form.Label>Catégorie</Form.Label>
            <Form.Select onChange={categorieValue} required>
              <option disabled selected>
                Catégories
              </option>
              <option value="marocain">Marocain</option>
              <option value="italien">Italien</option>
              <option value="chinois">Chinois</option>
              <option value="mexicaine">Mexicaine</option>
            </Form.Select>
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Ajouter Repas
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default AddRepas;
