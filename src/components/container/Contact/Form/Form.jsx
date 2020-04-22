import React, { useState } from 'react';
import axios from 'axios';
import { url } from '../../../../utils/default.json';
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

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const details = { ...values, formValue };
    // details[e.target.name] = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sendEmail = async () => {
      try {
        await axios.post(url, values);
      } catch (error) {
        console.log(error);
      }
    };
    sendEmail();

    // const data = values
  };

  const handleShowThankYou = () => {
    setThankYou(true);
  };
  const handleCloseThankYou = () => {
    setValues({
      firstname: '',
      lastname: '',
      email: '',
      message: '',
    });
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
                value={values.firstname}
                required
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
                value={values.lastname}
                required
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
                value={values.email}
                required
              />
            </div>
            <div>
              <Label>Message</Label>
            </div>
            <TextAreaWrapper>
              <Textarea
                placeholder="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                required
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
