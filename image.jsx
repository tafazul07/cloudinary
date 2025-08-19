import React, { useState } from 'react';
import axios from 'axios';

function UploadFile() {
  const cloud_name = 'replace it with your cloud name'; 
  const preset_key = 'replace it with your preset key'; 

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');

  const handleFile = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset_key);
    axios.post(`put here your cloudinary api and your cloud name variable that we made in line 5 ${cloud_name}`, formData)
     .then(res => { 
      console.log(res);
      setUrl(res.data.secure_url);
    })
    .catch(err => console.error(err));
  };

  return (
    <div className="d-flex justify-content-center bg-dark vh-100">
      <div className="w-25 bg-white mt-5 p-5">
        <input type="file" name="image" onChange={handleFile} />
        {url && (
          <div className="mt-3">
            <p>Uploaded Image:</p>
            <img src={url} alt="Uploaded" style={{ width: '100%' }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadFile;
