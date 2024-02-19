import React from "react";

interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <div className="bg-opacity-20 bg-yellow-300 flex flex-col items-center w-full h-screen p-4">
      <div className="w-full max-w-md"> 
        {children}
      </div>
    </div>
  );
};