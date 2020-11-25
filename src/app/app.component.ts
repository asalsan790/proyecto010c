import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  triangulos = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      //.get("http://localhost:3000/triangulo")
      //.get("https://5fb1015059018900164463ed.mockapi.io/api/v1/triangulos")
      .get("https://restapitriangulo005.herokuapp.com/triangulo")
      .subscribe(
        result => {
          console.log(result);
          this.triangulos = result;
        },
        error => {
          console.log(error);
        }
      );
  }
}
