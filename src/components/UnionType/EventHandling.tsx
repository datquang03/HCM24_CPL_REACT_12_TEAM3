import { useRef, useState } from "react";

type MouseEvent = {
  type: "click" | "dblclick";
};

type KeyboardEvent = {
  type: "keypress" | "keydown" | "keyup";
  key: string;
};

type AppEvent = MouseEvent | KeyboardEvent;

const EventHandling = () => {
  const [hp, setHp] = useState(100);
  const dummyButtonRef = useRef<HTMLButtonElement>(null);

  function handleEvent(event: AppEvent) {
    if (dummyButtonRef.current) {
      if (event.type === "click" || event.type === "dblclick") {
        const mouseEvent = new MouseEvent(event.type, {
          bubbles: true,
          cancelable: true,
          view: window,
        });
        dummyButtonRef.current.dispatchEvent(mouseEvent);
      } else if (
        event.type === "keypress" ||
        event.type === "keydown" ||
        event.type === "keyup"
      ) {
        const keyboardEvent = new KeyboardEvent(event.type, {
          bubbles: true,
          cancelable: true,
          key: event.key,
          view: window,
        });
        dummyButtonRef.current.dispatchEvent(keyboardEvent);
      }
    }
  }

  return (
    <div className="flex gap-2">
      <button
        className="mt-2 px-2 py-1 border border-slate-400 rounded-md"
        onClick={() => handleEvent({ type: "click" })}
      >
        Hit the Dummy
      </button>
      <button
        ref={dummyButtonRef}
        className="mt-2 px-2 py-1 border border-slate-400 rounded-md"
        onClick={() => setHp(hp - 10)}
      >
        {`Dummy: ${hp}`}
      </button>
    </div>
  );
};

export default EventHandling;
