import React from 'react';
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

const ContactForm = () => (
  <section>
    <ContactContainer>
      <ContactFormHeading>
        <h1>Get In Touch</h1>
      </ContactFormHeading>
      <form
        action=""
        method="POST"
        style={{ width: '400px', marginBottom: 20 }}
      >
        <StyleForm>
          <div>
            <Label>
              First Name<span className="required"> *</span>
            </Label>
            <Input type="text" name="firstname" placeholder="First Name" />
          </div>
          <div>
            <Label>
              Last Name<span className="required"> *</span>
            </Label>
            <Input type="text" name="lastname" placeholder="Last Name" />
          </div>

          <div>
            <Label>
              Email<span className="required"> *</span>
            </Label>
            <Input type="email" name="email" placeholder="Email" />
          </div>
          <div>
            <Label>Message</Label>
          </div>
          <TextAreaWrapper>
            <Textarea placeholder="Message" name="message" />
          </TextAreaWrapper>
        </StyleForm>
        <Button>
          <SendBtn type="submit">SEND</SendBtn>
        </Button>
      </form>
    </ContactContainer>
  </section>
);

export default ContactForm;
