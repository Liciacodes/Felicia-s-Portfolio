import React, {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { viewportOnce } from "../lib/motion";

const GLYPHS = "!<>-_\\/[]{}=+*^?#";
const DECODE_MS = 350;
const SWAP_MS = 40;

// Only the most recently decoded heading shows the cursor.
let cursorOwner = null;
const cursorListeners = new Set();
const subscribeCursor = (listener) => {
  cursorListeners.add(listener);
  return () => cursorListeners.delete(listener);
};
const getCursorOwner = () => cursorOwner;
const setCursorOwner = (id) => {
  cursorOwner = id;
  cursorListeners.forEach((listener) => listener());
};

// Characters settle left to right as progress goes from 0 to 1.
const scramble = (text, progress) =>
  text
    .split("")
    .map((char, index) =>
      char === " " || index < progress * text.length
        ? char
        : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
    )
    .join("");

export default function DecodeText({ text, className, cursor = false, play }) {
  const ref = useRef(null);
  const id = useId();
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, viewportOnce);
  const shouldPlay = play ?? inView;
  const [display, setDisplay] = useState(() =>
    (play ?? true) && !reduceMotion ? scramble(text, 0) : text
  );
  const showCursor =
    useSyncExternalStore(subscribeCursor, getCursorOwner) === id &&
    !reduceMotion;

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(text);
      return;
    }
    if (!shouldPlay) return;

    let frame;
    let start;
    let lastSwap = 0;
    const tick = (now) => {
      if (start === undefined) start = now;
      const progress = Math.min((now - start) / DECODE_MS, 1);
      if (progress === 1) {
        setDisplay(text);
        if (cursor) setCursorOwner(id);
        return;
      }
      if (now - lastSwap >= SWAP_MS) {
        lastSwap = now;
        setDisplay(scramble(text, progress));
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [shouldPlay, reduceMotion, text, cursor, id]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
      {showCursor && <span aria-hidden="true" className="cursor-blink" />}
    </span>
  );
}
