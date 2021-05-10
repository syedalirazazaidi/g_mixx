import React from "react";
import styled from "styled-components";
import Compose from "./Button/Compose";
import { sidebarButtonItems } from "./data/SideBarButtonItems";
import VideoCamIcon from "@material-ui/icons/Videocam";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { BottomIcons } from "./data/BottomIcons";
function SideBar() {
  return (
    <Wrapper>
      <TopSectionWrapper>
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
      </TopSectionWrapper>
      <BottomBarSectionWrapper>
        <SidebarSelectionWrapper>
          <Title>Meet</Title>
          <p>
            <VideoCamIcon />
            New Meeting
          </p>
          <p>
            <KeyboardIcon />
            join Meeting
          </p>
        </SidebarSelectionWrapper>
        <SidebarSelectionWrapper>
          <Title>Hongs Out</Title>
          <p>
            <AccountCircleOutlinedIcon />
            New Meeting
          </p>
        </SidebarSelectionWrapper>

        <BottomIconsWrapper>
          {BottomIcons.map((icon) => (
            <>{icon}</>
          ))}
        </BottomIconsWrapper>
      </BottomBarSectionWrapper>
    </Wrapper>
  );
}

export default SideBar;

const Wrapper = styled.div`
  border-right: 1px solid lightgrey;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ComposeWrapper = styled.div`
  display: grid;
  place-items: start;
  padding: 10px 20px;
`;
const BottomIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: gray;
  border-top: 1px solid lightgrey;
  cursor: pointer;
  margin-top: 60px;
  .MuiSvgIcon-root {
    padding: 2px;
  }
`;
const TopSectionWrapper = styled.div``;
const SideButtonWrapper = styled.div``;

const BottomBarSectionWrapper = styled.div`
  margin-bottom: 10px;
`;

const SidebarSelectionWrapper = styled.div`
  border-top: 1px solid lightgrey;
  p {
    color: gray;
    display: grid;
    grid-template-columns: 40px auto;
    padding: 5px 25px;
  }
`;
const Title = styled.h4`
  padding-left: 25px;
  margin-bottom: 3px;
  margin-top: 8px;
`;

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
