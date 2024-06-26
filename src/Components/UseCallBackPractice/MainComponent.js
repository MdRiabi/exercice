import React, { useCallback, useState } from "react";
import CounterComponent from "./CounterComponent";
import ButtonComponent from "./ButtonComponent";

function MainComponent() {
  const [teachers, setTeachers] = useState(10);
  const [students, setStudents] = useState(15);

  const incrementTeachers = useCallback(() => {
    setTeachers(teachers + 5);
  },[teachers]);

  const incrementStudents = useCallback(() => {
    setStudents(students + 10);
  },[students]);

  return (
    <div>
      <h3>CallBack Practice</h3>
      <CounterComponent text="Teachers" count={teachers} />
      <ButtonComponent handleClick={incrementTeachers}>
        {" "}
        Increment Teachers
      </ButtonComponent>

      <CounterComponent text="Students" count={students} />
      <ButtonComponent handleClick={incrementStudents}>
        {" "}
        Increment Students{" "}
      </ButtonComponent>
    </div>
  );
}

export default React.memo(MainComponent);
