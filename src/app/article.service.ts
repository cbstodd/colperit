import { Injectable } from '@angular/core';
import { Article } from './article/article';

@Injectable()
export class ArticleService {

    constructor() {
    }

    public getArticles():Promise<Article[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    new Article(
                        "http://lorempixel.com/100/125/technics",
                        "The Angular 2 Screencast",
                        "The easiest way to learn Angular2!",
                        10
                    ),
                    new Article(
                        "http://lorempixel.com/100/125/technics",
                        "Learn Ruby on Rails",
                        "Course on Udemy on Ruby on Rails testing and Action Cable"
                    ),
                    new Article(
                        "http://lorempixel.com/100/125/technics",
                        "Learn TypeScript",
                        "Using books and video tutorials to learn TypeScript and ES6",
                        4
                    )

                ])
            }, 1000)
        });

    }

}
