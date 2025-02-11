import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Table from 'react-bootstrap/Table';

const Employeemaster = () => {
  return (
    <div
      className="row"
      style={{
        border: "1px solid #fff", // Border around the div
        padding: "10px",
        borderRadius: "10px",
        background: "#80808036",
        marginLeft: "20px",
        display: "flex",
        alignItems: "center", // Align items vertically in the center
      }}
    >
      <div className="col-md-12">
        <div className="card">
          <div className="class-header">
            <h5>Employee Master</h5>
          </div>
          <div className="card-body">
          <Table striped>
          <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
          </thead>
          <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
          </tbody>
          </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employeemaster;
