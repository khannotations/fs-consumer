export class Property {
    constructor(
        public id: number,
        public name: string,
        public image_url: string,
        public description: string,
        public price: number,
        public location: string
    ) { }
}