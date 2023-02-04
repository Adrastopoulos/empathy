import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full p-5 bg-slate-900 bg-opacity-50 rounded-lg">
      {children}
    </div>
  );
};
