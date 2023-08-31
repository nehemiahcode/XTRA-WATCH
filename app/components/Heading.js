export default function Heading({ children, style }) {
  return <h1 className={`${style} dark:text-white text-black`}>{children}</h1>;
}
