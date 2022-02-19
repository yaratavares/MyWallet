import styled from "styled-components";

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

  .loaderContent {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default BoxRegistry;
