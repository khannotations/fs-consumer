export class User {
    public id: number;

    constructor(
        public firstName: string,
        public lastName: string,
        public email: string, 
        public password: string,
        public image_url: string = 'https://placekitten.com/100/100'
    ) {}
}