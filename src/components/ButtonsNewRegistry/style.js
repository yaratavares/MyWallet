import styled from "styled-components";

const BoxNewRegistry = styled.div`
  border-radius: 5px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9375rem;

  div {
    width: 100%;
    height: 7.125rem;
    padding: 0.66rem 0.6rem;
    background-color: #a328d6;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    :hover {
      cursor: pointer;
    }

    span {
      font-size: 1.3785rem;
    }
  }
`;

export { BoxNewRegistry };
