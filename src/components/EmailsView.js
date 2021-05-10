import React from "react";

import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import RefreshIcon from "@material-ui/icons/Refresh";

import MoreVertIcon from "@material-ui/icons/MoreVert";

import IconButton from "@material-ui/core/IconButton";

function EmailsView() {
  return (
    <Wrapper>
      <TopWrapper>
        <Checkbox />
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </TopWrapper>
      <EmailContainer></EmailContainer>
    </Wrapper>
  );
}

export default EmailsView;
const Wrapper = styled.div``;

const TopWrapper = styled.div``;

const EmailContainer = styled.div``;
