import React, { useEffect } from "react";
import "impress.js";

function Impress(props) {
  const { children } = props;
  useEffect(() => {
    const app = impress();
    app.init();
    const handleCancel = (e) => {
      if(e.keyCode === 27) {
          app.goto(0);
      }
    }
    window.addEventListener("keyup", handleCancel)

    return () => {
      window.removeEventListener("keyup", handleCancel);
    }
  }, []);
  return (
    <div
      id="impress"
      data-transition-duration="600"
      data-width="1100"
      data-height="650"
      data-perspective="1000"
    >
      {children}
    </div>
  );
}

export default Impress;