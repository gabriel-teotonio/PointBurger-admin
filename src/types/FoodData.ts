export interface IFoodDataForm {
   title: string
   description: string
   price: number
   img: string
}
export interface IFoodData extends IFoodDataForm {
   id: string
 }