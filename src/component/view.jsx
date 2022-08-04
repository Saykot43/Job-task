import React from "react";
import Table from "react-bootstrap/Table";

const View = () => {
  return (
    <Table striped bordered hover variant="light" className="container mt-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Time of Entry</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default View;
