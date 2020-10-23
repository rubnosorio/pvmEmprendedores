import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    news = new Rx.BehaviorSubject({});

  constructor(private http: HttpClient) { }

  getNews(category){
        return new Promise((resolve) => {
  	this.http.get('https://newsapi.org/v2/top-headlines?country=us&category='+category+'&apiKey=5cb13a51c3194007992f4ed26ef45498').subscribe((response) => {
    resolve(response);
	});
	});
  }

  setNews(news){
  	this.news.next(news);
  }

  getOneNews(){
  	return this.news;
  }
}
