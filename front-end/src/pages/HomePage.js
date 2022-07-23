import React, { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/Product/ProductActions";

import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
import Meta from '../components/Meta';
import ProductCarousel from '../components/ProductCarousel';
import Paginate from '../components/Paginate';

function Home() {
  const { keyword } = useParams();
  const { pageNumber } = useParams() || 1;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
  
  const productList = useSelector((state) => state.productList);
  const { products, loading, error, page, pages  } = productList;
  
  return (
    <>
    <Meta />
    {!keyword ? (
      <ProductCarousel />
    ) : (
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>
    )}
    <h1>Latest Products</h1>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
      <>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        <Paginate
          pages={pages}
          page={page}
          keyword={keyword ? keyword : ''}
        />
      </>
    )}
  </>
  );
}

export default Home;
