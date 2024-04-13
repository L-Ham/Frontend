/*eslint-disable*/
import React from "react";
/**
 * 
 * @returns {JSX.Element} Log in
 
 */
function Heading() {
  return (
    <h1 className="ibm-plex-sans-serif"
      style={{
        textAlign: "left",
        fontSize: 18,
        fontWeight: 500,
        color: "#1a1a1b",
        fontFamily: '"IBM Plex Sans",sans-serif',
      }}
      data-testid="login-heading"
    >
      Log in
    </h1>
  );
}
export { Heading };
