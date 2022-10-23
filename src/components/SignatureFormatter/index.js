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

const Phone = (e) =>
  `<div style="margin-bottom: 5px">
    <font size="1">Phone:&nbsp;<a href="tel:+14087990172" style="color:rgb(67,142,217)" target="_blank">+1 408 799 0172</a></font>
  </div>`;

const Calendly = (e) =>
  `<div style="margin-bottom: 5px">
<font size="1"><a href="${e}" style="color:rgb(67,142,217)">Schedule Meeting</a></font>
</div>`;

const Template = ({
  name,
  job,
  email,
  phone,
  calendly
}) => `<table style="font-family:sans-serif">
  <tbody>
    <tr>
      <td style="vertical-align:middle;border-right:medium solid black;padding:0px 5px">
        <a href="https://www.pangea.io/" style="color:rgb(67,142,217);font-size:15px" target="_blank">
        <img src="https://21635149.fs1.hubspotusercontent-na1.net/hubfs/21635149/Pangea%20Logo%20+%20Brandmarks/mixedcolor8-01.svg" width="60" alt="pangea_logo" title="pangea_logo">
        </a></td>
      <td style="padding:0px 5px">
        <div style="font-weight:bold">${name}</div>
        <div style="font-size:13px;margin-bottom:2px">${job}</div>
        <div style="margin-bottom:2px">
          <font size="1">Email:&nbsp;<a href="mailto:${email}" style="color:rgb(67,142,217)">${email}</a></font>
        </div>
        <div style="margin-bottom: 2px">
          <font size="1">Phone:&nbsp;<a href="tel:+${formatPhone(
            phone
          )}" style="color:rgb(67,142,217)" target="_blank">${phone}</a></font>
        </div>
        ${calendly !== "" ? Calendly(calendly) : ""}
        <div style="margin-bottom: 2px">
          <font size="1"><a href="https://www.pangea.io" style="color:rgb(67,142,217)">www.pangea.io</a></font>
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
      <EmailExample dangerouslySetInnerHTML={{ __html: Result }} />
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
