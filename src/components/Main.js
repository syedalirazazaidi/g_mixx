import React from "react";
import styled from "styled-components";
import EmailsView from "./EmailsView";
import SideBar from "./SideBar";
import SideIcon from "./SideIcon";

function Main() {
  return (
    <Wrapper>
      <SideBar />
      <EmailsView />
      <SideIcon />
    </Wrapper>
  );
}

export default Main;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 50px;
`;
