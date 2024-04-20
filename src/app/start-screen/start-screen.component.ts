import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-start-screen",
  templateUrl: "./start-screen.component.html",
  styleUrls: ["./start-screen.component.scss"],
})
export class StartScreenComponent implements OnInit {
  constructor(private router: Router) {}

  toggleNewPage() {
    document.getElementById("firstLayer")?.classList.add("hidden");
    document.getElementById("transition")?.classList.remove("hidden");
    // this.showNewPageFlag = !this.showNewPageFlag;
    setTimeout(() => {this.router.navigate(['/menu']);}, 5000);
    
  }

  ngOnInit(): void {}
}
