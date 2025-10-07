//This code is it has 3 box initially add button with every box which is not flexible.Flexible means it has 1 button add eeach click 1 new bix generate with add buuton if add button click the box is hided.Dynamically adding it means.

import React, { useState } from "react";
import NextMedicine from "./NextMedicine";
function Schedule() {
  const [medName1, setMedName1] = useState("");
  const [dose1, setDose1] = useState("");
  const [time1, setTime1] = useState("");
  const [taken1, setTaken1] = useState(false);

  const [medName2, setMedName2] = useState("");
  const [dose2, setDose2] = useState("");
  const [time2, setTime2] = useState("");
  const [taken2, setTaken2] = useState(false);

  // Hardcoded doctor schedule
  const doctorSchedule = [
    { time: "09:00 AM - 10:00 AM", status: "Available" },
    { time: "10:00 AM - 11:00 AM", status: "Booked" },
    { time: "11:00 AM - 12:00 PM", status: "Available" },
  ];

  const handleAddMedicine1 = () => {
    if (!medName1 || !dose1 || !time1) {
      alert("Please fill all fields for Medicine 1!");
      return;
    }
    setTaken1(false);
  };

  const handleAddMedicine2 = () => {
    if (!medName2 || !dose2 || !time2) {
      alert("Please fill all fields for Medicine 2!");
      return;
    }
    setTaken2(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Doctor & Medicine Schedule</h1>

      {/* Doctor Schedule */}
      <h2>Doctor's Schedule</h2>
      <table
        style={{ margin: "0 auto", borderCollapse: "collapse", width: "60%" }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Time</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {doctorSchedule[0].time}
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {doctorSchedule[0].status}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {doctorSchedule[1].time}
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {doctorSchedule[1].status}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {doctorSchedule[2].time}
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {doctorSchedule[2].status}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Medicine 1 */}
      <h2>Add Medicine 1</h2>
      <input
        type="text"
        placeholder="Name"
        value={medName1}
        onChange={(e) => setMedName1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dose"
        value={dose1}
        onChange={(e) => setDose1(e.target.value)}
      />
      <input
        type="time"
        value={time1}
        onChange={(e) => setTime1(e.target.value)}
      />
      <button onClick={handleAddMedicine1}>Add Medicine 1</button>

      {/* Medicine 2 */}
      <h2>Add Medicine 2</h2>
      <input
        type="text"
        placeholder="Name"
        value={medName2}
        onChange={(e) => setMedName2(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dose"
        value={dose2}
        onChange={(e) => setDose2(e.target.value)}
      />
      <input
        type="time"
        value={time2}
        onChange={(e) => setTime2(e.target.value)}
      />
      <button onClick={handleAddMedicine2}>Add Medicine 2</button>

      {/* Medicine Table */}
      <h2>Today's Medicines</h2>
      <table
        style={{
          margin: "0 auto",
          borderCollapse: "collapse",
          width: "70%",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "5px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Dose</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Time</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>
              Status
            </th>
            <th style={{ border: "1px solid black", padding: "5px" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {medName1 && (
            <tr>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                {medName1}
              </td>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                {dose1}
              </td>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                {time1}
              </td>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                {taken1 ? "Taken ✅" : "Pending ⏳"}
              </td>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                {!taken1 && (
                  <button onClick={() => setTaken1(true)}>Mark as Taken</button>
                )}
              </td>
            </tr>
          )}
          {medName2 && (
            <tr>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                {medName2}
              </td>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                {dose2}
              </td>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                {time2}
              </td>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                {taken2 ? "Taken ✅" : "Pending ⏳"}
              </td>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                {!taken2 && (
                  <button onClick={() => setTaken2(true)}>Mark as Taken</button>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;


//For Dynamical add means this feature which is flexible it means Flexible means it has 1 button add each click 1 new bix generate with add buuton if add button click the box is hided.Dynamically adding it means.
Code is below:
----------------

  import React, { useState } from "react";
import NextMedicine from "./NextMedicine";
function Schedule() {
  const [inputs, setInputs] = useState([]);
  const [medicines, setMedicines] = useState([]);

  const handleAddInputBox = () => {
    setInputs([...inputs, { name: "", dose: "" }]);
  };
  const handleInputChange = (index, field, value) => {
    const updated = [...inputs];
    updated[index][field] = value;
    setInputs(updated);
  };
  const handleAddMedicine = (index) => {
    const { name, dose } = inputs[index];
    //if input box empty error show red 
     if (name.trim() === "" || dose.trim() === "") {
      setError("Please fill up both name and dose!");
      alert("Please fill up both name and dose!");
      return; //because error show 
    }
    //when added error disappear
    setError("");
    setSuccess("Medicine Added Successfully."); //If added successfully show successmessage
    setMedicines([...medicines, { name, dose }]);
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Medicine List</h2>
      <button onClick={handleAddInputBox}>Add Medicine</button>
  //Inline CSS For error and success message show 
  //error message red error 
  <p
        style={{
          color: "red",
          fontSize: "25px",
          fontWeight: "Bold",
          fontStyle: "cursive",
        }}
      >
         ! {error} error message red exclamation
      </p>
        //successmessage green color successmessage
      <p
        style={{
          color: "green",
          fontSize: "30px",
          fontWeight: "Bold",
          fontStyle: "cursive",
        }}
      >
      ✅  {success} //successmessage green tick
      </p>
      <div>
        {inputs.map((input, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Enter Medicine Name"
              value={input.name}
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
            />
            <input
              type="text"
              placeholder="Dose"
              value={input.dose}
              onChange={(e) => handleInputChange(index, "dose", e.target.value)}
            />
            <button onClick={() => handleAddMedicine(index)}>Add</button>
          </div>
        ))}
      </div>
      {medicines.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Medicine Name</th>
              <th>Dose</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((med, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{med.name}</td>
                <td>{med.dose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default Schedule;
