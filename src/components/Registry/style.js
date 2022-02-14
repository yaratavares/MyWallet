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

const BoxRegistry = styled.div`
  width: 100%;
  height: calc(100vh - 221px);
  background-color: white;
  margin-bottom: 0.8125rem;
  padding: 1.44rem 0.75rem 3rem 0.75rem;
  border-radius: 5px;

  display: grid;
  grid-template-rows: 100%;

  position: relative;

  span {
    color: #868686;
    font-size: 1.25rem;
    font-weight: 400;
    text-align: center;

    justify-self: center;
    align-self: center;
  }

  .listRegistry {
    overflow-y: auto;
  }
`;

export { BoxRegistry, Aregistration, Result };
