import React, { useState } from "react";
import SignatureFormatter from "./components/SignatureFormatter";
import styled from "@emotion/styled";
import "./styles.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 760px;
  width: 100%;
  display: block;
`;

const Logo = styled.div`
  color: #fff;
  svg {
    height: 100%;
    fill: #fff;
  }
  height: 50px;
  display: inline-block;
`;

const UserEditor = styled.div`
  display: flex;
  flex-direction: column;

  font-family: "Calibre";
  font-weight: 400;
  font-size: 1rem;
  color: #32323c;
  line-height: 1.5625rem;

  margin: 2rem;
`;

const Header = styled.h1`
  margin: 2rem;
  padding: 0;
  font-family: "National 2 Narrow";
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  line-height: 2.25rem;
  font-size: 2.5rem;
`;

const Header2 = styled.h2`
  margin: 2rem 2rem 0.5rem;
  padding: 0;
  font-family: "National 2 Narrow";
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  line-height: 2.1875rem;
  font-size: 1.5rem;
`;

const InputWrapper = styled.div`
  margin: 1rem 0;
`;

const InputLabel = styled.label`
  color: #ffffff;
  display: inline-block;
  margin-top: 0.5rem;
  margin-right: 2rem;
  margin-bottom: 0.5rem;
  width: 200px;
  font-size: 1.125rem;
`;

const InputElement = styled.input`
  border: 1px solid #fff;
  font-size: 1.125rem;
  width: 100%;
  max-width: 455px;
  color: #fff;
  box-sizing: border-box;
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  padding: 12px 14px 12px;
  &:focus {
    outline: none;
  }
`;

const userData = {
  name: "Mohammed Fahsi",
  job: "Front-end Developer",
  availability: "Every weekday apart from wednesday",
  phone: "+31650473462"
};

export default function App() {
  const [user, setUser] = useState(userData);

  const userInfoChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <Wrapper>
      <Container>
        <Header>
          <Logo>
            <svg viewBox="0 0 181.43 156.83" xmlns="http://www.w3.org/2000/svg">
              <path d="m172.16 61.57-11.9-20.29h-16l8.45-14.34-11.91-20.28h-23.9l-6.9 13.44-7-13.44h-23.9l-7.77 13.25-8-13.25h-23.9l-11.9 20.28 8.47 14.34h-16l-11.93 20.29 12.1 20.53h15.31l-8.21 14 12.1 20.53h15.63l-8 13.55 12.1 20.54h23.7l7.24-12.23 7.23 12.23h23.71l12.09-20.54-8-13.55h15.66l12.27-20.54-8.21-14h15.32zm-35.82-38.49a4.44 4.44 0 1 1 -3.54-5.19 4.44 4.44 0 0 1 3.54 5.19z" />
            </svg>
          </Logo>
          Greenberry signature generator
        </Header>
        <UserEditor>
          <InputWrapper>
            <InputLabel>Voornaam & Achternaam*</InputLabel>
            <InputElement
              name="name"
              onChange={userInfoChange}
              value={user.name}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel>Job title*</InputLabel>
            <InputElement
              name="job"
              onChange={userInfoChange}
              value={user.job}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel>Beschikbaarheid</InputLabel>
            <InputElement
              name="availability"
              onChange={userInfoChange}
              value={user.availability}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel>Prive telefoon</InputLabel>
            <InputElement
              name="phone"
              onChange={userInfoChange}
              value={user.phone}
            />
          </InputWrapper>
        </UserEditor>
        <Header2>Resultaat</Header2>
        <SignatureFormatter user={user} />
      </Container>
    </Wrapper>
  );
}
