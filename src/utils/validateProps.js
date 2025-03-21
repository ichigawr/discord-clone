import { checkPropTypes } from "prop-types";

function validateProps(Component, props) {
  checkPropTypes(Component.propTypes, props, "prop", Component.name);
}

export default validateProps;
