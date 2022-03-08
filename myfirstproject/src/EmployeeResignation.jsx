import React, { useState } from "react";
import { Form } from 'react-bootstrap';
function Empform() {
  const [empid, setEmpid] = useState("");
  const [empName, setEmpName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [joiningDate, setJoiningDate] = useState("");


  async function ResginationEnp(e) {
      let Data = {empid , empName , mobile , city , address , joiningDate};
      console.log(Data);
      e.preventDefault();

      let output = await fetch(
          "http://localhost:4500/mysql/Employee/to-postdata/",
          {
              method: "POST",
              headers: {
                  "Content-type": "application/json",
                  "Accept": "application/json"
              },
              body: JSON.stringify(Data)
          }
      );
      output = await output.json();
      console.log("output", output);
  }

  return (
      <div className="col-4-sm">
          <h1>Resignation Form</h1>
          <br />
          <Form>
              <label style={{ float: "left" }}>Employee id</label>
              <input
                  className="form-control"
                  type="Text"
                  value={empid}
                  onChange={(e) => setEmpid(e.target.value)}
                  placeholder="eg..78"
              />
              <br />
              <label style={{ float: "left" }}>Employee Name</label>
              <input
                  className="form-control"
                  type="Text"
                  value={empName}
                  onChange={(e) => setEmpName(e.target.value)}
                  placeholder="eg. Rama"
              />

             

              <br />
              <label style={{ float: "left" }}>Employee Mobile</label>
              <input
                  className="form-control"
                  type="Text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="eg..7896541233"
              />
               
               <br />
              <label style={{ float: "left" }}>Employee City</label>
              <input
                  className="form-control"
                  type="Text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="eg..shiv nagar colony"
              />

              <br />
              <label style={{ float: "left" }}>Employee Address</label>
              <input
                  className="form-control"
                  type="Text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="eg..full address"
              />

              <br />
              <label style={{ float: "left" }}>Employee JioningDate</label>
              <input
                  className="form-control"
                  type="Text"
                  value={joiningDate}
                  onChange={(e) => setJoiningDate(e.target.value)}
                  placeholder="eg..2022/02/24"
              />

              <br />
              <button onClick={ResginationEnp} style={{ float: "left" }}>
                  Resigtration Done
              </button>
          </Form>
      </div>
  );
}

export default Empform;
