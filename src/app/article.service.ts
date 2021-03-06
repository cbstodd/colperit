import { Injectable } from '@angular/core';
import { Article } from './article/article';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../environments/environment';


@Injectable()
export class ArticleService {

    constructor(private http:Http) {
    }

    public getArticles():Promise<Article[]> {
        let params = new URLSearchParams();
        params.set('apiKey', environment.newsApiKey);
        params.set('source', 'reddit-r-all');

        return this.http
            .get(`${environment.baseUrl}/v1/articles`, {
                search: params
            })
            .toPromise()
            .then(resp => resp.json())
            .then(json => json.articles)
            .then(articles => {
                return articles
                    .map(article => Article.fromJSON(article));
            })
            .catch(err => {
                console.log("We got an error", err);
            });


    }

}
