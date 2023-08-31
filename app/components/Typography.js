export default function Typography({ children, style }) {
  return <p className={`font-normal ${style}`}>{children}</p>;
}
