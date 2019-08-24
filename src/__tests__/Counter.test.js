import React from "react";
import Counter from "../components/Counter/Counter";
import { create } from "react-test-renderer";

describe("Counter Component", () => {
  const component = create(<Counter />);
  const instance = component.root;
  const button = instance.findAllByType("button");

  test("shows the number of like clicks", () => {
    expect(button.length).toBe(2);
    const likeBtn = button[0];
    likeBtn.props.onClick();
    expect(likeBtn.props.children).toBe("Likes 1");
    likeBtn.props.onClick();
    expect(likeBtn.props.children).toBe("Likes 2");
  });

  test("shows the number of dislike clicks", () => {
    expect(button.length).toBe(2);
    const dislikeBtn = button[1];
    dislikeBtn.props.onClick();
    expect(dislikeBtn.props.children).toBe("Dislikes 1");
    dislikeBtn.props.onClick();
    expect(dislikeBtn.props.children).toBe("Dislikes 2");
  });
});
