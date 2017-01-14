import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article';

@Component({
    selector: 'cit-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

    article:Article;
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
                "Using books and video tutorials to learn TypeScript and ES6"
            )

        ]
    }



    upvote() {
        this.article.addVote();
    }

    downvote() {
        this.article.minusVote();
    }


    ngOnInit() {
    }

}
