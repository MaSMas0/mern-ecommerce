import React from "react";
import { Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/Product/ProductListAction";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  return (
    <>
      <h1>latest products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger"> {error} </Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default Home;
