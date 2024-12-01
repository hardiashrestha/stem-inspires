import React, { useState } from 'react';
import './JoinUs.css'; 


const JoinUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+1', 
    linkedIn: '',
    position: '',
    interestReason: '',
    educationLevel: '',
    workExperience: '',
    remoteExperience: '',
    remoteDescription: '',
    workAtBookHubReason: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName) errors.fullName = 'Full Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.phone) errors.phone = 'Phone Number is required';
    if (!formData.position) errors.position = 'Position is required';
    if (!formData.interestReason || formData.interestReason.split(' ').length > 120) {
      errors.interestReason = 'Please provide a valid reason (max 120 words)';
    }
    if (!formData.educationLevel) errors.educationLevel = 'Education Level is required';
    if (!formData.remoteExperience) errors.remoteExperience = 'Remote Experience is required';
    if (!formData.workAtBookHubReason || formData.workAtBookHubReason.split(' ').length > 120) {
      errors.workAtBookHubReason = 'Please provide a valid reason (max 120 words)';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            access_key: 'ea6d9746-ff80-486c-a89d-09e8d1290dc5', 
            fullName: formData.fullName,
            email: formData.email,
            phone: `${formData.countryCode} ${formData.phone}`,
            linkedIn: formData.linkedIn,
            position: formData.position,
            interestReason: formData.interestReason,
            educationLevel: formData.educationLevel,
            workExperience: formData.workExperience,
            remoteExperience: formData.remoteExperience,
            remoteDescription: formData.remoteDescription,
            workAtBookHubReason: formData.workAtBookHubReason
          })
        });
        
        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            countryCode: '+1',
            linkedIn: '',
            position: '',
            interestReason: '',
            educationLevel: '',
            workExperience: '',
            remoteExperience: '',
            remoteDescription: '',
            workAtBookHubReason: ''
          });
          setFormErrors({});
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        setSubmitError('Error sending message. Please try again later.');
        console.error(error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="joinus-container" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
      <div className="joinus-form-container" style={{ width: '80%', maxWidth: '600px' }}>
        <h1>Join Us</h1>
        <h3>We’d love to have you on our team!</h3>
        <form onSubmit={handleSubmit} className="joinus-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              style={{ width: '100%' }} 
            />
            {formErrors.fullName && <p className="error">{formErrors.fullName}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%' }} 
            />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <div style={{ display: 'flex' }}>
              <select name="countryCode" value={formData.countryCode} onChange={handleChange} style={{ marginRight: '10px' }}>
                
                <option value="+1">USA (+1)</option>
                <option value="+44">UK (+44)</option>
                <option value="+91">India (+91)</option>
                
              </select>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Your phone number"
                style={{ width: '100%' }} 
              />
            </div>
            {formErrors.phone && <p className="error">{formErrors.phone}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="linkedIn">LinkedIn Profile Link (Optional)</label>
            <input
              type="url"
              id="linkedIn"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourprofile"
              style={{ width: '100%' }} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">Which position are you applying for?</label>
            <select id="position" name="position" value={formData.position} onChange={handleChange} required style={{ width: '100%' }}>
              
              <option value="">Select a position</option>
              <option value="A">Position A</option>
              <option value="B">Position B</option>
              <option value="C">Position C</option>
              
            </select>
            {formErrors.position && <p className="error">{formErrors.position}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="interestReason">Why are you interested in this position? (100-120 words)</label>
            <textarea
              id="interestReason"
              name="interestReason"
              value={formData.interestReason}
              onChange={handleChange}
              maxLength={300} 
              required
              style={{ width: '100%', height:'80px' }} 
            />
             {<p>{`${(formData.interestReason.match(/\S+/g) || []).length} / 120 words`}</p>}
             {formErrors.interestReason && (
               <p className="error">{formErrors.interestReason}</p>
             )}
           </div>

           
           <div className='form-group'>
             <label htmlFor='educationLevel'>Highest Level of Education</label>
             <select 
               id='educationLevel' 
               name='educationLevel' 
               value={formData.educationLevel} 
               onChange={handleChange} 
               required 
               style={{ width:'100%' }}
             >
               
               <option value="">Select your education level</option>
               <option value='A'>Education Level A</option>
               <option value='B'>Education Level B</option>
               <option value='C'>Education Level C</option>
               
               <option value='Other'>Other</option>              
             </select>

             
             { formData.educationLevel === "Other" && (
               <>
                 <input 
                   type='text' 
                   placeholder='Please specify' 
                   onChange={(e) => setFormData({...formData, educationLevelOther:e.target.value})} 
                   style={{ width:'100%' }}
                 />
               </>
             )}
             
             {formErrors.educationLevel && (
               <p className='error'>{formErrors.educationLevel}</p>
             )}
           </div>

           
           <div className='form-group'>
             <label htmlFor='workExperience'>Relevant Work Experience (Optional)</label>
             <textarea 
               id='workExperience' 
               name='workExperience' 
               value={formData.workExperience} 
               onChange={handleChange} 
               placeholder='List your previous roles, responsibilities, and duration' 
               style={{ width:'100%', height:'80px' }}
             />
           </div>

           
           <div className='form-group'>
             <label htmlFor='remoteExperience'>Have you worked in a remote team environment before?</label>
             <select 
               id='remoteExperience' 
               name='remoteExperience' 
               value={formData.remoteExperience} 
               onChange={handleChange} 
               required 
               style={{ width:'100%' }}
             >
               
               <option value=''>Select an option</option>
               <option value='Yes'>Yes</option>
               <option value='No'>No</option>
             </select>

             
             { formData.remoteExperience === "Yes" && (
               <>
                 <textarea 
                   id='remoteDescription' 
                   name='remoteDescription' 
                   value={formData.remoteDescription} 
                   onChange={handleChange} 
                   placeholder='Describe your experience (at least 100 words)' 
                   style={{ width:'100%', height:'80px' }}
                 />
                 
               </>
             )}
           </div>

           
           <div className='form-group'>
             <label htmlFor='workAtBookHubReason'>Why do you want to work at STEM-Inspires? (100-120 words)</label>
             <textarea 
               id='workAtBookHubReason' 
               name='workAtBookHubReason' 
               value={formData.workAtBookHubReason} 
               onChange={handleChange} 
               maxLength={300} 
               required 
               style={{ width:'100%', height:'80px' }}
             />
             
             {( formErrors.workAtBookHubReason ) && (
                 <>
                  {<p className='error'>{ formErrors.workAtBookHubReason }</p>}
                 </>
             )}

           </div>

           
           <button type='submit' className='submit-button'>Send Application</button>

           {submitSuccess && (<p style={{ color:'green' }}>Thanks! Your application has been submitted.</p>)}

           {submitError && (<p className='error'>{submitError}</p>)}

         </form>

       </div>  
     </div>  
   );
};

export default JoinUs;