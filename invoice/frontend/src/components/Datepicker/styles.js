import styled from "styled-components";
import { ButtonBase, FormControl } from "components/lib";
import ReactDatepicker from "react-datepicker";
require("react-datepicker/dist/react-datepicker.css");

export const DatepickerCompo = styled(ReactDatepicker)`
  width: 100%;
  padding: 8px 16px;
  height: 48px;
  border: 1px solid;
  border-color: var(--input-border-color);
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  color: var(--input-text-color);
  background-color: var(--input-background-color);
  &:disabled {
    width: auto;
    border: 0;
    background-color: transparent;
  }
  &:focus {
    border: 1px solid var(--color-primary);
  }
`;

export const Button = styled(ButtonBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  height: 48px;
  min-width: 48px;
  border: 1px solid;
  border-color: var(--input-border-color);
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  color: var(--input-text-color);
  background-color: var(--input-background-color);
  &:disabled {
    width: auto;
    border: 0;
    background-color: transparent;
  }
  &:focus {
    border: 1px solid var(--color-primary);
  }
`;

export const DateValue = styled.span`
  margin-top: 2px;
  margin-left: 16px;
`;

export const DatepickerWrapper = styled(FormControl)`
  .react-datepicker-popper {
    background: red;
  }
`;
