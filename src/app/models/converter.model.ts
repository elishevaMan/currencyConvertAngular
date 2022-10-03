// export interface IConverter {
//     from: string;
//     to: string;
//     amount: string;
//     result?: any;
//   }

  export class IConverter
{
    constructor(
        public from: string,
        public to: string,
        public amount: string,
        public result? :any    ) {}
        
}