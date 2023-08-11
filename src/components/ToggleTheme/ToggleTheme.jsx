import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";

const ToggleTheme = () => {
  const [isLight, setIsLight] = useState(true);
  const iconStyle = {
    color: isLight ? "" : "var(--star-twinkle-color)",
    cursor: "pointer",
  };
  const handleClick = () => {
    setIsLight((prevState) => !prevState);
  };
  return (
    <MdOutlineLightMode
      onClick={() => setIsLight((prevState) => !prevState)}
      style={iconStyle}
    />
  );
};
export default ToggleTheme;
