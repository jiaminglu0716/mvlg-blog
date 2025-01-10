import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function ScreenPage({ pc, mobile }) {
  const { width } = useWindowDimensions();
  const breakpoint = 768;

  return <div>{width <= breakpoint ? mobile : pc}</div>;
}
