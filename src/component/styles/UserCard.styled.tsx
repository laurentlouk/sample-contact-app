import styled, { keyframes } from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 20px;
  max-width: 300px;
  gap: 35px;

  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    img {
      transform: scale(1.05);
    }

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const Avatar = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 100%;
  margin-right: 16px;
  border: 4px solid ${({ theme }) => theme.colors.cardBackground};
  border-color: ${({ theme }) => theme.colors.primary};

  padding: 8px;

  transition: all 0.3s ease-in-out;
`;

export const UserName = styled.h2`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const Username = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

// Skeleton loading animation
const shimmer = keyframes`
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`;

export const SkeletonAvatar = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 100%;
  background: ${({ theme }) => theme.colors.skeletonGradient};
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite;
`;

export const SkeletonText = styled.div`
  height: 20px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.skeletonGradient};
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite;
  margin-top: 8px;
`;
