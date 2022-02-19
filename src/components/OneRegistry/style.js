import styled from "styled-components";

const Aregistration = styled.div`
  color: black;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr 0.5fr;

  .date {
    align-self: center;
    color: #c6c6c6;
  }

  .name {
    align-self: center;
    color: black;
    cursor: pointer;
  }

  .money {
    color: ${({ color }) => (color === "outflow" ? "#c70000" : "#03AC00")};
    align-self: center;
    text-align: right;
  }

  .delete {
    text-align: center;
    align-self: center;
    color: #c6c6c6;

    :hover {
      cursor: pointer;
    }
  }
`;

export default Aregistration;
