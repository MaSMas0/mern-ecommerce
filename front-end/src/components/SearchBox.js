import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <Form onSubmit={submitHandler}>
      <Row>
        <Col md='7'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      </Col>
      <Col md='5'>
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
      </Col>
      </Row>
    </Form>
  )
}

export default SearchBox
