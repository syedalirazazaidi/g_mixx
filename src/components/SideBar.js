import React from "react";
import styled from "styled-components";
import Compose from "./Button/Compose";
import { sidebarButtonItems } from "./data/SideBarButtonItems";

function SideBar() {
  return (
    <Wrapper>
      <ComposeWrapper>
        <Compose />
      </ComposeWrapper>
      <SideButtonWrapper>
        {sidebarButtonItems.map((btn) => (
          <SideBarButtonItem>
            {btn.icon}
            {btn.text}
          </SideBarButtonItem>
        ))}
      </SideButtonWrapper>
      <MeetWrapper></MeetWrapper>
      <HangOutWrapper></HangOutWrapper>
      <bottomIconsWrapper></bottomIconsWrapper>
    </Wrapper>
  );
}

export default SideBar;

const Wrapper = styled.div`
  border-right: 1px solid lightgrey;
  height: 100vh;
`;

const ComposeWrapper = styled.div`
  display: grid;
  place-items: start;
  padding: 10px 20px;
`;

const SideButtonWrapper = styled.div``;

const MeetWrapper = styled.div``;

const HangOutWrapper = styled.div``;
const SideBarButtonItem = styled.div`
  display: grid;
  grid-template-columns: 14% auto;
  color: gray;
  cursor: pointer;
  padding: 5px 25px;
  border-radius: 0 100px 100px 0;
  margin-right: 8px;
  :hover {
    background-color: #f5f7f7;
  }
`;

const bottomIconsWrapper = styled.div``;
