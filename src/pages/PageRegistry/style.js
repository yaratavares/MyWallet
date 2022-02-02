import styled from "styled-components";

const ContainerRegistry = styled.div`
  height: 100vh;
  padding: 1.5rem 1.5rem;
`;

const HeaderUser = styled.header`
  font-size: 1.625rem;
  margin-bottom: 1.375rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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

    span {
      font-size: 1.3785rem;
    }
  }
`;

export { ContainerRegistry, HeaderUser, BoxNewRegistry };
