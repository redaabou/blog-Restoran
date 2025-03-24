import React, { useEffect ,useState } from 'react'
import {Col, Container, Row} from "react-bootstrap";
import axios from 'axios'

import CardContainer from "./CardContainer";

const Categories =() => {
    const [categoriesData, setCategoriesData] = useState([])

    const getCategory = async () => {
        try {
            const response = await axios.get('http://localhost:4000/categories')
            setCategoriesData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCategory()
    }, [])

    console.log(categoriesData)

  return (
    <Container className='d-flex justify-content-center'>
    <Row>
    {
       categoriesData? categoriesData.map((category, index) => {
            return (
            <Col key={index}>
                <CardContainer title={category.title} about={category.image} />
            </Col>
            )
       }):`Loading...`
    }
        
    </Row>
    </Container> 
  )
}

export default Categories