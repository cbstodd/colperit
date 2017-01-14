export class Article {

    constructor(public title:string,
                public description:string,
                public votes?:number) {
        this.votes = votes || 0;
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
