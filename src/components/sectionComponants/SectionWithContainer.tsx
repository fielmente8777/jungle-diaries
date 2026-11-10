import React from "react";
import Container from "./Container";
import Section from "./Section";

interface SectionWithContainerProps {
  sectionId?: string;
  containerId?: string;
  sectionClassName?: string;
  containerClassName?: string;
  children: React.ReactNode;
  containerStyle?: React.CSSProperties;
  sectionStyle?: React.CSSProperties;
  defaultPadding?: boolean;
  sectionProps?: React.HTMLAttributes<HTMLElement>;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

const SectionWithContainer: React.FC<SectionWithContainerProps> = ({
  sectionId = "",
  containerId = "",
  sectionClassName = "",
  containerClassName = "",
  sectionStyle = {},
  containerStyle = {},
  children,
  defaultPadding = true,
  sectionProps = {},
  containerProps = {},
}) => {
  return (
    <Section
      id={sectionId}
      sectionClassName={sectionClassName}
      style={sectionStyle}
      defaultPadding={defaultPadding}
      {...sectionProps}
    >
      <Container
        id={containerId}
        className={containerClassName}
        style={containerStyle}
        {...containerProps}
      >
        {children}
      </Container>
    </Section>
  );
};

export default SectionWithContainer;
