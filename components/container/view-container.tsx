import RadiusContainer from "../common/radius-container";

export default function ViewContainer({ children, ...props }) {
  return (
    <RadiusContainer className="max-w-3xl sm:px-5 py-2" {...props}>
      {children}
    </RadiusContainer>
  );
}
