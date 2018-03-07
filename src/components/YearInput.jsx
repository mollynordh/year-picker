import React from "react";

function YearInput({ value, openPanel, selected, clear, placeholder }) {
  const selectedClass = selected ? "imput-wrapper-selected" : "";

  function clearHandler(e) {
    clear();
  }

  return (
    <div className={`input-wrapper ${selectedClass}`}>
      <input
        className="year-input"
        value={value}
        onClick={openPanel}
        placeholder={placeholder}
        readOnly
      />
      <i
        name="times"
        className="input-icon input-icon-calendar fa fa-calendar"
      />
<<<<<<< HEAD
      <i
        name="calendar"
        className="input-icon input-icon-close fa fa-times"
        onClick={clearHandler}
      />
</div>
=======
    </div>
>>>>>>> 756db8d5629bfb8ff380dbbe28ab3caa349313b3
  );
}

export default YearInput;
