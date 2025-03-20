import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  // selected is the value of the selected item
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
  const RadioOptions = React.Children.map(children, (child, i) => {
    return (
      React.cloneElement(<RadioOption key={i} value={child.props.value} checked={selected === child.props.value ? true : false} onChange={onChange}>{child.props.children}</RadioOption>) 
    )
  });
  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element
  return (
    <div className="RadioOption">
      <input id={value} type="radio" name={value} checked={checked} onChange={onChange}/>
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
