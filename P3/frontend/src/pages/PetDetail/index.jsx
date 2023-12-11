import React, { useState, useEffect } from 'react';
import './style.css';
import PetImage from './PetImage';
import PetDetailsTable from './PetDetailsTable';
import PetDescription from './PetDescription';
import AdoptButton from './AdoptButton';
import { useParams, useNavigate } from 'react-router-dom';

const PetDetails = () => {
  const [petData, setPetData] = useState({});
  const { petId } = useParams();
  const navigate = useNavigate();

  const handleAdoptClick = () => {
    navigate(`/application/form/${petId}/`);
  };
  

  useEffect(() => {
    const authToken = localStorage.getItem('access_token');
    // TODO: get the pet dynamically
    const url = `http://localhost:8000/pet/${petId}/?search=`;


    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log("the data", data);
      if (data.length > 0) {
        // Assuming the first element in the array is the pet object you want
        setPetData(data[0]);
    }})
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
  }, [petId]);

  return (
    <div className="main-pet-detail">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 padding">
            <h2 id="pet-name">{petData.name}</h2>
            <h3 id="date">Submission Deadline: {petData.deadline}</h3>
          </div>

          
          <PetDetailsTable details={petData} />
          <PetImage images={petData.pet_image_1} />
          <PetDescription title="Description" content={petData.description} />
          <PetDescription title="Medical History" content={petData.medicalHistory} />
          <AdoptButton status={petData.status} onAdopt={handleAdoptClick} />
        </div>
      </div>
    </div>
  );
}

export default PetDetails;
