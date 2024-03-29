import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { shape, string } from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0rem;
`;

const EmailResult = styled.textarea`
  padding: 2rem;
  margin-bottom: 3rem;
`;

const EmailExample = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: #fff;
`;

const formatPhone = (phone) => {
  return phone.replace(/\s/g, "");
};

const Calendly = (e) =>
  `<div style="color:black;line-height:20px;font-size:10px;">
<font size="1"><a href="${e}" style="color:rgb(67,142,217)">Schedule Meeting</a></font>
</div>`;

const Logo = (e) =>
  `<img src="https://21635149.fs1.hubspotusercontent-na1.net/hubfs/21635149/pangea-email-logo.png" width="90" alt="pangea_logo" title="pangea_logo">`;

const LogoAnimate = (e) =>
  `<img src="https://21635149.fs1.hubspotusercontent-na1.net/hubfs/21635149/spinning-logo.gif" width="90" alt="pangea_logo" title="pangea_logo">`;

const Template = ({
  name,
  job,
  email,
  phone,
  calendly,
  animate
}) => `<table style="font-family:sans-serif">
  <tbody>
    <tr>
      <td style="vertical-align:middle;border-right:medium solid black;padding:0px 5px">
        <a href="https://www.pangea.io/" style="color:rgb(67,142,217);font-size:15px" target="_blank">
        ${animate === true ? LogoAnimate() : Logo()}
        </a></td>
      <td style="padding:0px 5px">
        <div style="font-weight:bold;color:black;">${name}</div>
        <div style="font-size:13px;margin-bottom:2px;color:black;">${job}</div>
        <div style="color:black;line-height:20px;font-size:10px;">
          Email:&nbsp;<a href="mailto:${email}" style="color:rgb(67,142,217)">${email}</a>
        </div>
        <div style="color:black;line-height:20px;font-size:10px;">
          Phone:&nbsp;<a href="tel:${formatPhone(
            phone
          )}" style="color:rgb(67,142,217)" target="_blank">${phone}</a>
        </div>
        ${calendly !== "" ? Calendly(calendly) : ""}
        <div style="color:black;line-height:20px;font-size:10px;">
          <a href="https://www.pangea.io" style="color:rgb(67,142,217)">www.pangea.io</a>
        </div>
      </td>
    </tr>
  </tbody>
</table>`;

const SignatureFormatter = ({ user }) => {
  const [userInfo, setUserInfo] = useState(user);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  const Result = Template(userInfo);

  return (
    <Wrapper>
      <h4>Copy this if you are using Gmail</h4>
      <EmailExample dangerouslySetInnerHTML={{ __html: Result }} />
      <h4>Copy this if you are using Outlook</h4>
      <EmailResult readonly rows="30" value={Result} />
    </Wrapper>
  );
};

SignatureFormatter.propTypes = {
  user: shape({
    name: string.isRequired,
    job: string.isRequired,
    availability: string,
    phone: string
  }).isRequired
};

export default SignatureFormatter;
