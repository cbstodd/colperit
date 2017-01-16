import { Component } from '@angular/core';
import { Article } from './article/article';

@Component({
  selector: 'cit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ColperIt';

    articles:Article[];

    constructor() {
        this.articles = [
            new Article(
                "The Angular 2 Screencast",
                "The easiest way to learn Angular2!",
                10
            ),
            new Article(
                "Learn Ruby on Rails",
                "Course on Udemy on Ruby on Rails testing and Action Cable"
            ),
            new Article(
                "Learn TypeScript",
                "Using books and video tutorials to learn TypeScript and ES6",
                4
            )

        ]
    }


}
