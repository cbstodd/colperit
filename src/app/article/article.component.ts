import { Component, Input } from '@angular/core';
import { Article } from './article';

@Component({
    selector: 'cit-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent {

    @Input() article:Article;

    upvote() {
        this.article.addVote();
    }

    downvote() {
        this.article.minusVote();
    }


}
