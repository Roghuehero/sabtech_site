import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Container = styled.div`
  width: 80%;
  margin: auto;
  overflow: hidden;
  padding: 20px 0;
`;

const Section = styled.section`
  padding: 40px 0;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #333; /* Dark color for better contrast */
`;

const Textarea = styled.textarea`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #333; /* Dark color for better contrast */
`;

const Button = styled.button`
  background: #ff6f61;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #e65c50;
  }
`;

const Contact = () => {
  return (
    <>
      <Header />
      <Container>
        <Section id="contact">
          <h2 className="primary-color">Contact Us</h2>
          <p>Have a question or need a custom solution? Reach out to us!</p>
          <Form action="submit_form.php" method="post">
            <Input type="text" name="name" placeholder="Your Name" required />
            <Input type="email" name="email" placeholder="Your Email" required />
            <Textarea name="message" placeholder="Your Message" required></Textarea>
            <Button type="submit">Send Message</Button>
          </Form>
        </Section>
      </Container>
    </>
  );
};

export default Contact;