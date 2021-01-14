import "./App.css";
import { useState } from "react";
import Axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import ReactExport from "react-export-excel";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;




function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newName, setNewName] = useState(0);
  const [newAge, setNewAge] = useState(1);
  const [newCountry, setNewCountry] = useState(2);
  const [newPosition, setNewPosition] = useState(3);
  const [newWage, setNewWage] = useState(4);

  const [employeeList, setEmployeeList] = useState([]);

  //////////////////////////////////////////////////////
  const data = [
    //{ firstname: newName, age: newAge, country: setCountry, position: setPosition, wage: setWage }
    employeeList.map((p, index) => {
      return <tr key={index}>
        <td>
          {p.id}
        </td>
        <td >{p.name}</td>
        <td >{p.age}</td>
        <td >{p.country}</td>
        <td >{p.position}</td>
        <td >{p.wage}</td>
      </tr>
    })
  ];
  const camelCase = (str) =>  {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  };
  const filterColumns = (data) => {
    // Get column names
    const columns = Object.keys(data[0]);

    const filterColsByKey = columns.filter(c => c !== 'firstname');


    return filterColsByKey // OR return columns
  };



  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/update", { name: newName, age: newAge, country: newCountry, position: newPosition, wage: newWage, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  name: newName,
                  country: newCountry,
                  age: newAge,
                  position: newPosition,
                  wage: newWage,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    
    <div className="App">

      <ExcelFile filename="test">
        <ExcelSheet data={data} name="Test">
                    {
                      //employeeList itt lesz a hiba
                        filterColumns(data).map((col)=> {
                            return <ExcelColumn label={camelCase(col)} value={col}/>
                        })
                    }
                </ExcelSheet>
      </ExcelFile>
      <table id="table-to-xls">
            </table>
            



      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Wage (Ft/month):</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div className="employees">
        <button onClick={getEmployees}>Show Employees</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Age: {val.age}</h3>
                <h3>Country: {val.country}</h3>
                <h3>Position: {val.position}</h3>
                <h3>Wage: {val.wage}</h3>
              </div>
              <div>
              <input
                  type="text"
                  placeholder="Modify Name"
                  onChange={(event) => {
                    setNewName(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Modify Age"
                  onChange={(event) => {
                    setNewAge(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Modify Country"
                  onChange={(event) => {
                    setNewCountry(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Modify Position"
                  onChange={(event) => {
                    setNewPosition(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Modify wage"
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}
                />
                
                <button
                  onClick={() => {
                    updateEmployeeWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
