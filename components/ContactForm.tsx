'use client'

import { useState } from 'react';
import Button from './Button';
import Image from 'next/image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendGTMEvent } from '@next/third-parties/google'


interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {

  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData(e.currentTarget);

  const formValues: FormValues = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    message: formData.get('message') as string,
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    });

    if (response.status === 200) {
       // Success!
       toast.success('Your message has been sent successfully!', {
        position: 'top-right',
        autoClose: 2000, });// Duration for the toast message (in milliseconds)
        sendGTMEvent({ event: 'buttonClicked', value: 'form submitted' })
    } else {
      // Handle the error
      toast.error('Something went wrong. Please try again!', {
        position: 'top-right',
        autoClose: 2000,
      });

   if (!validateEmail(formValues.email)) {
    toast.error('Invalid email. Please check and try again!', {
      position: 'top-right',
      autoClose: 2000,
    });
    return;
  }
      
      
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  } finally {
    setLoading(false);
  }
    // Reset the form fields by updating the state to empty values
    setValues({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
};

  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <div>
    <div className="mx-auto max-w-screen-md text-center mb-6 lg:mb-10">
          <h2 className="mb-4 tracking-tight bold-40 text-gray-50 lg:bold-52">Get in touch with us</h2>
          <p className=" font-light regular-24 text-gray-50 p-2">At Codviser, we're passionate about turning your ideas into digital realities. With a dedicated team of experts, we're committed to creating innovative solutions tailored to your unique needs. Whether you're a startup or an established business, we're here to help you thrive in the digital world. Contact us today </p>
      </div>
      <div className="flex flex-col md:flex-row items-center">
     
    <form onSubmit={handleSubmit} className="md:max-w-[500px] w-full p-4 md:p-0 mx-auto text-gray-50  flex-1 mb-20">
      <div className="mb-4 ">
        <label htmlFor="name" className="block mb-2 bold-20">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          className="w-full bg-gray-800 px-3 py-2 leading-tight text-gray-50  rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 bold-20">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
          className="w-full bg-gray-800 px-3 py-2 leading-tight text-gray-50  rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2 bold-20">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          required
          className="w-full bg-gray-800 px-3 py-2 leading-tight text-gray-50  rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 bold-20">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          required
          rows={5}
          maxLength={100} 
          className="w-full bg-gray-800 px-3 py-2 leading-tight text-gray-50  rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
      </div>
      <Button
      type='submit'
      title={loading ? 'Submitting...' : 'Submit'}
      variant='btn_dark_green_outline'
      full
      
      />
    </form>
    <Image
        src="/man-1.png"
        alt="man pointing right"
        width={550}
        height={400}
        className=" object-cover mr-20"
      />
</div>
    </div>
  );
}

export default ContactForm