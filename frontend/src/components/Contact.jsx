import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Contact = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  
    // Handle Input Change
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // Handle Form Submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setSuccess("");
  
      // if (formData.password !== formData.confirmPassword) {
      //   setError("Passwords do not match!");
      //   return;
      // }
  
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/contact/", {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        });
  
        if (response.status === 201 || response.status === 200) {
          setSuccess("Message Succesfully sent...");
          setTimeout(() => setFormData({ name: "", email: "", message: "" }), 2000);

        }
      } catch (err) {
        setError(
         
          err.response?.data?.name?.[0] ||
          err.response?.data?.email?.[0] || 
          err.response?.data?.message?.[0] || 
          "Message was not sent. Please try again."
        );
      }
    };
  return (
    <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    maxWidth: '90%',
    margin: 'auto',
}}>

    {/* Left Section (Heading and Text) */}
    <div style={{
        flex: '1 1 50%',
        textAlign: 'left',
        padding: '15px',
        backgroundColor: '#fff',
        // borderRadius: '8px',
        // boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        minHeight: '400px',
    }}>
        <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'blue',
            marginBottom: '10px',
            marginTop: '60px',
        }}>
            We Would Love To Hear From You
        </h2>
        <p style={{
            fontSize: '1.2rem',
            color: 'black',
            marginBottom: '20px',
            lineHeight: '1.5',
        }}>
            Please call or use the contact form to connect with the<br/> county team closest to you.
        </p>

        <p style={{
            fontSize: '1.2rem',
            color: 'grey',
            marginBottom: '30px',
            lineHeight: '1.5',
        }}>
            ________________________
        </p>


        <p style={{
            fontSize: '1rem',
            color: 'black',
            marginBottom: '40px',
            lineHeight: '1.5',
        }}>
            <strong>Office:</strong> P.O. Box 832-80400 Ukunda
        </p>
        <p style={{
            fontSize: '1rem',
            color: 'black',
            lineHeight: '1.5',
        }}>
            <strong>Email:</strong>  ushirikianoinitiativebo@gmail.com
        </p>
    </div>

    {/* Right Section (Form) */}
    <div style={{
        flex: '1 1 50%',
        maxWidth: '450px',
        padding: '20px',
        // border: '1px solid #e0e0e0',
        // borderRadius: '8px',
        backgroundColor: '#fff',
        // boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        minHeight: '250px',
    }}>
        {success && <p style={{ color: "green" }}>{success}</p>}
{error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="name" style={{
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    color: '#333',
                }}>Your Name</label>
                <input
                    type="text"
                    id="name"
                    value={formData.name} 
                    onChange={handleChange}
                    name="name"
                    required
                    style={{
                        width: '100%',
                        padding: '8px',
                        marginTop: '5px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        fontSize: '0.9rem',
                    }}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="email" style={{
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    color: '#333',
                }}>Your Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email} 
                    onChange={handleChange}
                    required
                    style={{
                        width: '100%',
                        padding: '8px',
                        marginTop: '5px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        fontSize: '0.9rem',
                    }}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="message" style={{
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    color: '#333',
                }}>Your Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message} 
                    onChange={handleChange}
                    rows="3"
                    required
                    style={{
                        width: '100%',
                        padding: '8px',
                        marginTop: '5px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        fontSize: '0.9rem',
                    }}
                ></textarea>
            </div>

            <button
                type="submit"
                style={{
                    backgroundColor: 'gold',
                    color: '#fff',
                    padding: '10px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    width: '100%',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#e6b800')}
onMouseOut={(e) => (e.target.style.backgroundColor = 'gold')}

            >
                Submit
            </button>
        </form>
       
    </div>
</div>
  )
}

export default Contact
