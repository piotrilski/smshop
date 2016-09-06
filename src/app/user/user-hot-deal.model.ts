export class UserHotDealModel {
    constructor(
        public id: number,
        public categoryId: number,
        public name: string,
        public description: string,
        public price: string
    ){ }
}