import { ReactNode } from "react";
import styled from "styled-components";

/** Types */
type ViewTypes = {
  children?: ReactNode;
};

const View = ({ children }: ViewTypes) => {
  return <ViewWrap>{children}</ViewWrap>;
};

/** Styles */
const ViewWrap = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

/** Exports */
export default View;
