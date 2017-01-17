interface ArticleJSON {
    author:string;
    title:string;
    description:string;
    url:string;
    urlToImage:string;
    publishedAt:string;
    votes:number;
}


export class Article {
    public publishedAt:Date;

    // Article.fromJSON();
    static fromJSON(json:ArticleJSON):Article {
        let article = Object.create(Article.prototype);
        return Object.assign(article, json, {
            votes: json.votes ? json.votes : 0,
            imageUrl: json.urlToImage ? json.urlToImage : 'http://www.placehold.it/100x125',
            publishedAt: json.publishedAt ?
                new Date(json.publishedAt) :
                new Date()
        });
    }

    constructor(public imageUrl:string,
                public title:string,
                public description:string,
                public url:string,
                public votes?:number) {
        this.votes = votes || 0;
        this.publishedAt = new Date();
    }

    public date():Date {
        return new Date();
    }

    public addVote():void {
        this.votes = this.votes + 1;
    };

    public minusVote():void {
        this.votes = this.votes - 1;

    };

}
