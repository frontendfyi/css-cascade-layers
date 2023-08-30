import "./index.css";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

function App() {
  const [days, setDays] = useState<Date[] | undefined>([]);

  return (
    <main>
      <h1>CSS Cascade Layers</h1>

      <button className="btn">BEEP</button>
      <button className="btn ml-12" disabled>
        BEEP
      </button>

      <article className="rich-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
        <p className="large">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
      </article>

      <DayPicker
        id="example"
        numberOfMonths={2}
        mode="multiple"
        selected={days}
        onSelect={setDays}
        showWeekNumber
        showOutsideDays
        fromYear={2010}
        toYear={2030}
      />
    </main>
  );
}

export default App;
