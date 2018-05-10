import { Component, OnInit, HostBinding, Input } from "@angular/core";
import { ltrAnimation, bttAnimation } from "../../animations/fly-in-out";

@Component({
  selector: "app-transition",
  templateUrl: "./transition.component.html",
  styleUrls: ["./transition.component.css"],
  animations: [ltrAnimation, bttAnimation]
})
export class TransitionComponent implements OnInit {
  @HostBinding('@ltrAnimation') ltrAnimati = "ltr";
  @HostBinding("style.display") display = "block";
  @HostBinding("style.width") width = "100vw";

  // @HostBinding('style.position') position = 'absolute';

  constructor() { }

  ngOnInit() { }
}
