import PropTypes from "prop-types";
import { WrapperButton } from "./style";
export function DHMButton({ text, ...props }) {
  return (
    <>
      <WrapperButton {...props}>{text}</WrapperButton>
    </>
  );
}

DHMButton.propTypes = {
  text: PropTypes.string
};

DHMButton.defaultProps = {
  text: "hehe"
};
