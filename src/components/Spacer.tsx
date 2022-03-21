import React from 'react';

export interface SpacerProps {
  size: "sm" | "md" | "lg";
}

export const Spacer: React.FC<SpacerProps> = ({
  size = "md"
}) => {
  switch (size) {
    case "sm":
      return <div className='h-4' />;
    case "md":
      return <div className='h-8' />;
    case "lg":
      return <div className='h-16' />;
  }
}

export default Spacer;