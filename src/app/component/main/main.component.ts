import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  mobileStyle(color) {
    return `border-left: 5px solid ${color};
    color: rgb(51, 51, 51);
    background: #eff0f1;
    margin: 2px;`;
  }
  list = [
    {
      value: "3",
      style:
        window.innerWidth > 375
          ? "background:#2F454E"
          : this.mobileStyle("#2F454E"),
    },
    {
      value: "1",
      style:
        window.innerWidth > 375
          ? "background:#6F98A8"
          : this.mobileStyle("#6F98A8"),
    },
    {
      value: "7",
      style:
        window.innerWidth > 375
          ? "background:#2F454E"
          : this.mobileStyle("#2F454E"),
    },
    {
      value: "9",
      style:
        window.innerWidth > 375
          ? "background:#2F454E"
          : this.mobileStyle("#2F454E"),
    },
    {
      value: "2",
      style:
        window.innerWidth > 375
          ? "background:#333333"
          : this.mobileStyle("#333333"),
    },
    {
      value: "6",
      style:
        window.innerWidth > 375
          ? "background:#BFBFBF"
          : this.mobileStyle("#BFBFBF"),
    },
    {
      value: "4",
      style:
        window.innerWidth > 375
          ? "background:#2B8EAD"
          : this.mobileStyle("#2B8EAD"),
    },
    {
      value: "5",
      style:
        window.innerWidth > 375
          ? "background:#6F98A8"
          : this.mobileStyle("#6F98A8"),
    },
    {
      value: "8",
      style:
        window.innerWidth > 375
          ? "background:#72C3DC"
          : this.mobileStyle("#72C3DC"),
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  /**
   * shuffle event
   */
  shuffle() {
    this.list = this.shuffleArray(this.list);
  }
  /**
   * sort the list
   */
  sort() {
    this.list = this.list.sort(function (a: any, b: any) {
      return a.value - b.value;
    });
  }
  /**
   *
   * @param array array of list
   */
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
