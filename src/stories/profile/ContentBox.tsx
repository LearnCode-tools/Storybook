import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode | string;
  content: "content" | "msgbox";
}

export const ContentBox = ({
  children = "TEST CONTENT",
  content = "content",
}: Props) => {
  return (
    <StyledBox content={content} id="test">
      <p>{children}</p>
      <a href="#test">some links</a>
    </StyledBox>
  );
};

interface boxProps {
  content: string;
}

const StyledBox = styled.div<boxProps>`
  margin: 30px 0;
  padding: 30px;
  background-color: #000000;
  border-radius: 10px;
  border: 2px solid #333333;
  color: white;
  & a {
    transition: 0.2s;
    text-decoration: none;
    color: #818181;
    &:hover {
      color: white;
    }
  }
  font-weight: ${(props) => {
    switch (props.content) {
      case "content":
        return "normal";
      case "msgbox":
        return "bold";
    }
  }};
`;
