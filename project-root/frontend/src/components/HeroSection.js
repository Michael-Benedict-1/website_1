
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  height: 100vh;
  background: url('/path/to/your/image.jpg') center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const HeroText = styled.div`
  text-align: center;
  max-width: 800px;
`;

const HeroButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroText>
        <h1>Welcome to the Future of AI</h1>
        <p>Discover innovative solutions powered by artificial intelligence.</p>
        <HeroButton href="#services">Explore Our Services</HeroButton>
      </HeroText>
    </HeroContainer>
  );
}

export default HeroSection;
                    