import styled from "styled-components";

const PageRegistryContainer = styled.div`
  height: 100vh;
  padding: 1.5rem 1.5rem;

  form {
    width: 100%;
    margin-top: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 0.8125rem;

    input {
      width: 100%;
      height: 3.625rem;
      padding: 1.125rem 0 1.0625rem 0.9375rem;

      border: none;
      border-radius: 5px;

      color: #a328d6;
      font-size: 1.25rem;

      :focus {
        outline: none;
      }

      ::placeholder {
        color: black;
        font-size: 1.25rem;
      }
    }

    button {
      width: 100%;
      height: 2.875rem;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #a328d6;
      border: none;
      border-radius: 5px;

      color: white;
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
  .toastModifications {
    background-color: #a328d6;
    color: white;
  }

  .iconTheme {
    :hover {
      cursor: pointer;
    }
  }
`;

export default PageRegistryContainer;
