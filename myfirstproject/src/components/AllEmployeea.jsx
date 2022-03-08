import React from 'react';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

export default function Product() {

  const [data1, setData] = useState([]);

  useEffect(() => {

    const api = "http://localhost:4500/mysql/Employee/all-data";
    const fetchData = async () => {

      try {
        const res = await fetch(api);
        const data = await res.json();
        setData(data.response);
        console.log(data);
        // console.log(data);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

   function Delete(empid) {
     fetch(`http://localhost:4500/mysql/Employee/todata/delete/${empid}`,
      {
        method: "DELETE"
      }).then((result)=>{result.json().then((res)=>{
        console.warn(res);
      });
    });
  }

  return (
    <>
      <div><h1> Product Page</h1></div>
      <Table striped bordered hover variant="success">
        <thead>
          <tr>

            <th>empId</th>
            <th>empName</th>
            <th>mobile</th>
            <th>city</th>
            <th>Address</th>
            <th>joiningDate</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {
            data1.map((items, key) => (

              <tr key={key}>
                <td>{items.empid}</td>
                <td>{items.empName}</td>
                <td>{items.mobile}</td>
                <td>{items.city}</td>
                <td>{items.address}</td>
                <td>{items.joiningDate}</td>
                <td>
                  <button onClick={()=>Delete(items.empid)}>Delete</button>
                  <button >Update</button>
                </td>
              </tr>

            ))
          }

        </tbody>
      </Table>
    </>
  )
}