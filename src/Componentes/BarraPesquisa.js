import React from "react";
import { Container, Row, Col, Navbar, Form, FormControl } from "react-bootstrap";

export default function BarraPesquisa(props) {
  return (
    
          <Navbar expand="lg" className="p-0 mb-4">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
            >
              <Form className="w-100 d-flex">
                <FormControl
                  type="text"
                  onSubmit={e => e.preventDefault()}
                  value={props.search}
                  onChange={props.handleChange}
                  placeholder="Pesquisa Filmes"
                  className="mr-sm-2 w-100"
                />
              </Form>
            </Navbar.Collapse>
            <Navbar.Brand className="text-white text-right">WebCatalog - Filmes</Navbar.Brand>
          </Navbar>
    
  );
}