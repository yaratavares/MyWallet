import styled from "styled-components";

const Result = styled.div`
  p {
    color: black;
    font-size: 1.0625rem;
    font-weight: 700;

    position: absolute;
    left: 0.75rem;
    bottom: 0.625rem;
  }

  .money {
    color: ${({ color }) => (color < 0 ? "#C70000" : "#03ac00")};
    font-size: 1.0625rem;

    position: absolute;
    right: 0.75rem;
    bottom: 0.625rem;
  }
`;

export default Result;
