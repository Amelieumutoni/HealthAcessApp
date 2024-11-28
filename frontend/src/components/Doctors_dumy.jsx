// src/components/Doctors_dumy.jsx
import React, { useState } from "react";

const Doctors_dumy = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const doctors = [
    { id: 1, name: "Dr. John Smith", specialization: "Cardiologist", experience: "10 years" },
    { id: 2, name: "Dr. Alice Johnson", specialization: "Dermatologist", experience: "8 years" },
    { id: 3, name: "Dr. Michael Lee", specialization: "Neurologist", experience: "15 years" },
    { id: 4, name: "Dr. Emily Davis", specialization: "Pediatrician", experience: "12 years" },
    { id: 5, name: "Dr. Sarah Brown", specialization: "Orthopedic Surgeon", experience: "7 years" },
  ];

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setIsFormVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with ${selectedDoctor.name}`);
    setIsFormVisible(false);
    setSelectedDoctor(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      {!isFormVisible ? (
        <>
          <h2>List of Doctors</h2>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "20px",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "10px" }}>Name</th>
                <th style={{ border: "1px solid #ddd", padding: "10px" }}>Specialization</th>
                <th style={{ border: "1px solid #ddd", padding: "10px" }}>Experience</th>
                <th style={{ border: "1px solid #ddd", padding: "10px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td style={{ border: "1px solid #ddd", padding: "10px" }}>{doctor.name}</td>
                  <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                    {doctor.specialization}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                    {doctor.experience}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                    <button
                      onClick={() => handleBookAppointment(doctor)}
                      style={{
                        padding: "8px 12px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Book Appointment
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
          <h2>Book an Appointment</h2>
          <p>Doctor: {selectedDoctor.name}</p>
          <div style={{ marginBottom: "15px" }}>
            <label>
              Your Name:
              <input
                type="text"
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>
              Date:
              <input
                type="date"
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                }}
              />
            </label>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Confirm Appointment
          </button>
        </form>
      )}
    </div>
  );
};

export default Doctors_dumy;
