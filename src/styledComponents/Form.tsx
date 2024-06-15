import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;

export const Label = styled.label`
  margin-bottom: -0.7rem;
  font-weight: 600;
`;

export const Input = styled.input`
  height: 2rem;
  width: 32rem;
  border-radius: 1rem;
`;

export const TextArea = styled.textarea`
  height: 16rem;
  width: 30.5rem;
  padding: 1rem;
  border-radius: 1.2rem;
`;

export const Submit = styled.button`
  align-self: flex-end;
  height: 2rem;
  width: 16rem;
  border-radius: 0.8rem;
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 2rem;
  padding: 0.8rem;
  background-color: #c0c0c0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus {
    width: 16.5rem;
    font-size: 1.1rem;
    font-weight: 500;
    transition: background-color 0.8s ease, font-size 0.8s ease,
      font-weight 0.8s ease, width 0.8s ease;
    background-color: #dcdcdc;
  }
`;
