import styled from "styled-components";

export const StyledBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #535353;
`;

export const Title = styled.h2`
margin: 0;
  align-self: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #535353;
`;

export const SubTitle = styled.h3`
  align-self: center;
  width: 70vw;
  font-size: 1.5rem;
  font-weight: 500;
  color: #283840;
`;

export const Container = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  min-height: 100vh;
  min-width: 60vw;
  max-width: 65vw;
  padding: 5rem;
  background-color: #f9f6f1;
  border-left: 4px solid #556c88;
  border-right: 4px solid #556c88;

  @media (min-width: 320px) and  (max-width: 767px) {}
  padding: 3rem;
`;

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 2rem;
  width: 50vw;
  padding: 1.2rem 2rem;
  margin-bottom: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  color: inherit;
  border: 2px solid #556c88;

  &:hover,
  &:focus {
    width: 60vw;
    font-size: 1.1rem;
    font-weight: 500;
    transition: background-color 0.8s ease, font-size 0.8s ease,
      font-weight 0.8s ease, width 0.8s ease;
    background-color: #ece2d0;
  }
`;

export const YoutubeFrame = styled.div`
  width: 100%;
  max-width: 800px;
`;

export const IFrame = styled.iframe`
  border-radius: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

export const Heading = styled.p`
  margin-left: -4.5rem;
  font-size: 1rem;
  font-weight: 500;
  max-width: 50vw;
`;

export const Button = styled.button`
  text-decoration: none;
  height: 2rem;
  width: 12.5rem;
  cursor: pointer;
  border-radius: 20px;
`;
