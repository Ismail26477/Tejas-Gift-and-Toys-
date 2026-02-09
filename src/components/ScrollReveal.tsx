import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const ScrollReveal = ({ children, className = "", delay = 0 }: Props) => {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
