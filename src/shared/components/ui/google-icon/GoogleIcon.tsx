import { siGoogle } from "simple-icons";

export function GoogleIcon({ size = 25, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className="mr-2"
    >
      <path d={siGoogle.path} />
    </svg>
  );
}
