import React from "react";
function AnyLabel(prop) {
  if (prop.tag == "strong") {
    return <strong>{prop.children}</strong>;
  } else if (props.tag == "em") {
    return <em>{prop.children}</em>;
  } else {
    return <label>{prop.children}</label>;
  }
}
export default AnyLabel;
