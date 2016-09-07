export class ProductModel {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public currency: string,
        public description: string,
        public categoryId: number 
    ) { }
}