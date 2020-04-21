import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  ContactContainer,
  StyleForm,
  ContactFormHeading,
  Input,
  Label,
  TextAreaWrapper,
  Textarea,
  SendBtn,
  Button,
} from '../../../../utils/styles';
import Modal from '../../../shared/Modal';

const ContactForm = () => {
  const [thankYou, setThankYou] = useState(false);
  const [formValue, setFormValue] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const details = { ...formValue };
    details[e.target.name] = e.target.value;
    setFormValue(details);
  };

  useEffect(() => {
    const sendEmail = async () => {
      await axios.post('http://localhost:9000/contact', formValue);
    };
    sendEmail();
    console.log('inside use effect', formValue);
  }, [formValue]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('This is the form data', formValue);
  };

  const handleShowThankYou = () => {
    setThankYou(true);
  };
  const handleCloseThankYou = () => {
    setThankYou(false);
  };
  return (
    <section>
      <ContactContainer>
        {thankYou ? (
          <Modal display={thankYou} closeThankYou={handleCloseThankYou} />
        ) : null}
        <ContactFormHeading>
          <h1>Get In Touch</h1>
        </ContactFormHeading>
        <form
          action="/contact"
          method="POST"
          style={{ width: '400px', marginBottom: 80 }}
          onSubmit={handleSubmit}
        >
          <StyleForm>
            <div>
              <Label>
                First Name<span className="required"> *</span>
              </Label>
              <Input
                autoFocus
                type="text"
                name="firstname"
                placeholder="First Name"
                onChange={handleChange}
                value={formValue.firstname}
              />
            </div>
            <div>
              <Label>
                Last Name<span className="required"> *</span>
              </Label>
              <Input
                autoFocus
                type="text"
                name="lastname"
                placeholder="Last Name"
                onChange={handleChange}
                value={formValue.lastname}
              />
            </div>

            <div>
              <Label>
                Email<span className="required"> *</span>
              </Label>
              <Input
                autoFocus
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formValue.email}
              />
            </div>
            <div>
              <Label>Message</Label>
            </div>
            <TextAreaWrapper>
              <Textarea
                placeholder="Message"
                name="message"
                value={formValue.message}
                onChange={handleChange}
              />
            </TextAreaWrapper>
          </StyleForm>
          <Button>
            <SendBtn type="submit" onClick={handleShowThankYou}>
              SEND
            </SendBtn>
          </Button>
        </form>
      </ContactContainer>
    </section>
  );
};

export default ContactForm;
