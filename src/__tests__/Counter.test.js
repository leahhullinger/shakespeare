import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Counter from "../components/Counter/Counter";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render and update likes counter", () => {
  // Test first render and componentDidMount
  act(() => {
    ReactDOM.render(<Counter />, container);
  });
  const button = container.querySelector("[data-testid='likesBtn']");
  const label = container.querySelector("[data-testid='likes']");
  expect(label.textContent).toBe("Likes");

  // Test second render and componentDidUpdate
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(label.textContent).toBe("Likes");
});

it("can render and update dislikes counter", () => {
  act(() => {
    ReactDOM.render(<Counter />, container);
  });
  const button = container.querySelector("[data-testid='dislikesBtn']");
  const label = container.querySelector("[data-testid='dislikes']");
  expect(label.textContent).toBe("Dislikes");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(label.textContent).toBe("Dislikes");
});
