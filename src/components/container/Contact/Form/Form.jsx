import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;
const StyleForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactFormHeading = styled.div`
  padding: 3rem;
`;
const ContactForm = () => (
  <ContactContainer>
    <ContactFormHeading>
      <h1>Get In Touch</h1>
    </ContactFormHeading>

    <form action="/" method="POST">
      <StyleForm>
        <div>
          <label>Name</label>
          <input />
        </div>
        <div>
          <label>Email</label>
          <input />
        </div>
        <div>
          <label>Message</label>
          <textarea />
        </div>
      </StyleForm>
    </form>
  </ContactContainer>
);

export default ContactForm;
