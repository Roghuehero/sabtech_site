import React from 'react';
import { Link } from 'react-router-dom';
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
  position: relative;
`;

const Service = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9); /* Semi-transparent background for better text visibility */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    color: #333; /* Dark color for better contrast */
  }

  p {
    color: #666; /* Slightly lighter color for paragraph text */
  }
`;

const Button = styled(Link)`
  display: inline-block;
  background: #ff6f61;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  transition: background 0.3s;

  &:hover {
    background: #e65c50;
  }
`;

const Testimonial = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9); /* Semi-transparent background for better text visibility */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  p {
    color: #333; /* Dark color for better contrast */
  }
`;

const Footer = styled.footer`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  margin-top: 40px;
`;

const BackgroundShape = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: translate(-50%, -50%);
`;

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Section id="services">
          <h2 className="primary-color">Our Services</h2>
          <Service>
            <h3>DevOps Solutions</h3>
            <p>Streamline your development and operations with our cutting-edge DevOps solutions.</p>
          </Service>
          <Service>
            <h3>AI Integration</h3>
            <p>Enhance your systems with artificial intelligence for smarter, more efficient operations.</p>
          </Service>
          <Service>
            <h3>Freelancing Projects</h3>
            <p>Hire top talent for your projects and get the job done with expertise and precision.</p>
          </Service>
          <BackgroundShape top="20%" left="10%" />
          <BackgroundShape top="50%" left="80%" />
          <BackgroundShape top="80%" left="30%" />
        </Section>

        <Section id="about">
          <h2 className="secondary-color">About Us</h2>
          <p>Sabtech is a leading provider of DevOps solutions integrated with AI technologies. Our team of experts is dedicated to delivering high-quality services and freelancing projects to help your business thrive in the digital age.</p>
          <BackgroundShape top="30%" left="70%" />
          <BackgroundShape top="70%" left="20%" />
        </Section>

        <Section id="testimonials">
          <h2 className="primary-color">Testimonials</h2>
          <Testimonial>
            <p>"Sabtech transformed our development process with their DevOps solutions. Highly recommend!" - Joseph</p>
          </Testimonial>
          <Testimonial>
            <p>"Their AI integration services are top-notch. Our operations are now more efficient than ever." - Clark Henry</p>
          </Testimonial>
          <BackgroundShape top="40%" left="90%" />
          <BackgroundShape top="60%" left="10%" />
        </Section>

        <Button to="/contact">Get in Touch</Button>
      </Container>

      <Footer>
        <p>&copy; 2024 Sabtech. All rights reserved.</p>
      </Footer>
    </>
  );
};

export default Home;