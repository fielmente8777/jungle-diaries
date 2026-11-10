import React from "react";

interface SectionProps {
  sectionClassName?: string;
  children: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
  defaultPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({
  sectionClassName: className = "",
  id,
  children,
  defaultPadding = true,
  style = {},
  ...props
}) => {
  return (
    <section
      className={`max_screen_width ${defaultPadding ? "py-12 md:py-14" : ""} ${className}`}
      id={id}
      style={style}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
