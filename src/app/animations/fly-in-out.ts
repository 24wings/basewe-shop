import {
  animate,
  AnimationEntryMetadata,
  state,
  style,
  transition,
  trigger
} from "@angular/core";

// Component transition animations
export const ltrAnimation: AnimationEntryMetadata = trigger("ltrAnimation", [
  state(
    "*",
    style({
      opacity: 1,
      transform: "translateX(0)"
    })
  ),
  transition(":enter", [
    style({
      opacity: 0,
      transform: "translateX(-100%)"
    }),
    animate("0.2s ease-in")
  ]),
  transition(":leave", [
    animate(
      "0.5s ease-out",
      style({
        opacity: 0,
        transform: "translateY(100%)"
      })
    )
  ])
]);
export const bttAnimation = trigger("bttAnimation", [
  state(
    "*",
    style({
      opacity: 1,
      transform: "translateY(0)"
    })
  ),
  transition(":enter", [
    style({
      opacity: 0,
      transform: "translateY(100%)"
    }),
    animate(".5s ease-in")
  ]),
  transition(":leave", [
    animate(
      ".5s ease-out",
      style({
        opacity: 0,
        transform: "translateY(100%)"
      })
    )
  ])
]);
