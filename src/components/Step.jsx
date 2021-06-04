import React from "react";

function Step(props) {
  const { children, ...rest } = props;

  return (
    <div className="step" {...mapPropsToData(rest)}>
      {children}
    </div>
  );
}

export default Step;

const mapPropsToData = (props) => {
  const data = {};
  const dashString = (word) =>
    word
      .split(/(?=[A-Z])/)
      .map((str) => str.toLowerCase())
      .join("-");
  Object.keys(props).forEach((key) => {
    data[`data-${dashString(key)}`] = props[key];
  });
  return data;
};
