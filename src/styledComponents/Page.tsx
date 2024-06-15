import styled from "styled-components";

export const StyledBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: grey;
`;

export const SubTitle = styled.h3`
  width: 70vw;
  font-size: 1rem;
  font-weight: 500;
  color: #3b3b3b;
`;

export const Container = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  min-height: 100vh;
`;

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 2rem;
  width: 65vw;
  padding: 1.2rem 2rem;
  background-color: #c0c0c0;
  border-radius: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  color: inherit;

  &:hover,
  &:focus {
    width: 70vw;
    font-size: 1.1rem;
    font-weight: 500;
    transition: background-color 0.8s ease, font-size 0.8s ease,
      font-weight 0.8s ease, width 0.8s ease;
    background-color: #dcdcdc;
  }
`;

export const YoutubeFrame = styled.div`
  width: 100%;
  max-width: 800px;
`;

export const IFrame = styled.iframe`
  width: 42.9375rem;
  height: 23.644375rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

export const Heading = styled.p`
  margin-left: -4.5rem;
  font-size: 1rem;
  font-weight: 500;
  max-width: 50vw;
  margin-top: -1.5rem;
`;
