import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  thisMedia: string;
}

export const Header = ({ children, thisMedia }: Props) => {
  return <StyledHeader thisMedia={thisMedia}>{children}</StyledHeader>;
};

interface HeaderProps {
  thisMedia: string;
}
const StyledHeader = styled.div<HeaderProps>`
  width: 100%;
  height: ${(props) => {
    switch (props.thisMedia) {
      case "desktop":
        return "100px";
      case "tablet":
        return "60px";
      case "mobile":
        return "50px";
    }
  }};
  color: white;
  background-color: black;
`;
