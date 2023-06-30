import React from "react";
import styled from "styled-components";

interface Props {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & Props;

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = true,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <StyledBtn
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      {...props}
      BtnProps={{ mode, size, backgroundColor }}
    >
      {label}
    </StyledBtn>
  );
};

interface BtnProps {
  mode: string;
  size: string;
  backgroundColor?: string;
}
const StyledBtn = styled.button<{ BtnProps: BtnProps }>`
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  font-size: 1rem;

  width: ${(props) => {
    switch (props.BtnProps.size) {
      case "small":
        return "80px";
      case "medium":
        return "120px";
      case "large":
        return "180px";
    }
  }};
  height: ${(props) => {
    switch (props.BtnProps.size) {
      case "small":
        return "40px";
      case "medium":
        return "50px";
      case "large":
        return "60px";
    }
  }};

  background-color: ${(props) => {
    switch (props.BtnProps.mode) {
      case "storybook-button--primary":
        return "#eeeeee";
      case "storybook-button--secondary":
        return "white";
    }
  }};
  box-shadow: ${(props) => {
    switch (props.BtnProps.mode) {
      case "storybook-button--primary":
        return "inset 0px 0px 10px 2px #000000";
      case "storybook-button--secondary":
        return "inset 0px 0px 0px 2px #000000";
    }
  }};

  &:hover {
    filter: brightness(0.8);
  }
`;
