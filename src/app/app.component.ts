import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bootstrap-autocomplete';
  filterText: string = '';
  items: string[] = ['Another Action',
    'Something else is here']

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://reqres.in/api/users')
      .subscribe((resp: any) => {
        this.items = resp['data'].map((i: { first_name: any; last_name: any; }) => i.first_name + i.last_name);
      });
  }
}
