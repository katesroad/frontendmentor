import * as React from "react";
import styled from "styled-components";
import { variant } from "styled-system";
import { red, colors, invoicesStatusColors } from "styles/colors";

export const NotificationBase = styled.div`
  max-width: 292px;
  min-width: 180px;
  width: 40vw;
  padding: 8px 16px;
  margin-bottom: 16px;
  border-left: 2px solid;
  border-radius: 4px;
  line-height: 1.5;
  color: var(--title-text-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  background-color: var(--element-background-color);
`;

const NotificationUI = styled(NotificationBase)(
  {},
  variant({
    variants: {
      danger: { bg: red.normal },
      success: { bg: invoicesStatusColors.paid.bg },
      primary: { bg: colors.primary },
    },
  })
);

export const Notification = React.memo(NotificationUI);