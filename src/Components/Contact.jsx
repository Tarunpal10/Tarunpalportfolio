import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Style/Contact.css'
import Footer from './Footer';
import { Button, Card, CardContent, Grid, TextField } from '@mui/material';

const Contact = () => {

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6xx3b9u', 'template_o5rxedi', form.current, {
        publicKey: 'Qm3xFcw6aee0DHQ7U',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
    
      ) 
      e.target.reset()
      
    }
   

  return (
    <div className='main-contact'>
      <div className="contact-heading">
          <h1>Contact Me </h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55991.06914704147!2d77.57279285189483!3d28.706339316350153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c8e805851396d%3A0xefc5478b43db1239!2sPilkhuwa%2C%20Uttar%20Pradesh%20245304!5e0!3m2!1sen!2sin!4v1722017042774!5m2!1sen!2sin" width="900" height="300"    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="contact-heading2">
       
        <form ref={form} onSubmit={sendEmail} className='formreset'>
       <Card className='card-contact'>
        <CardContent>
          <Grid container spacing={1}> 
            <Grid xs={12} sm={6} item>
              <TextField label="First-name" name='User_name' placeholder='First Name' variant='outlined' fullWidth required/>
             </Grid>
             <Grid xs={12} sm={6} item>
              <TextField label="Last-name" name='User_name' placeholder='Enter Last Name' variant='outlined' fullWidth required/>
             </Grid>
             <Grid item xs={12}>
             <TextField type='email'  label="Email" name='user_email' placeholder='Enter Email' variant='outlined' fullWidth required/>
             </Grid>
             <Grid item xs={12}>
             
             <TextField type='number'  label="Phone" name='user_no' placeholder='Enter Phone Number' variant='outlined' fullWidth required/>
             </Grid>
             <Grid item xs={12}>
             <TextField multiline rows={4} name='message'  label="message" placeholder='Enter Message'  variant='outlined' fullWidth width={200} required/>
             </Grid>
             <Grid xs={12} item>
              <Button fullWidth variant='contained' type='submit' value='send' color="primary">Submit</Button>
             </Grid>
          </Grid>
        </CardContent>
       </Card>
       
       </form>
   
     
      </div>
  <Footer/>
        
    </div>
  );

  

}

export default Contact

