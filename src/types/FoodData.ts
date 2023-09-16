export interface IFoodDataForm {
   title: string
   description: string
   price: number
   imgUrl: string
}
export interface IFoodData extends IFoodDataForm {
   id: string
 }