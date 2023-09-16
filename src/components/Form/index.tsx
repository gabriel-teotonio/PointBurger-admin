import { yupResolver } from "@hookform/resolvers/yup"
import { IFoodDataForm } from "../../types/FoodData"
import { Container, ErroMessage } from "./styles"
import { useForm } from "react-hook-form"
import * as yup from "yup"

interface FormProps {
   btnTitle: string
   onAction: (data: IFoodDataForm) => void
}

const foodSchema = yup.object({
   title: yup.string().required("Campo Título obrigatório, preencha"),
   price: yup
   .number()
   .transform((value, originalValue) => originalValue === "" ? null : value)
   .nullable()
   .positive("Aceita apenas valores positivos")
   .required("Campo preço obrigatório, preencha"),
   imgUrl: yup.string().required("Campo url obrigatório, preencha"),
   description: yup.string().required("Campo descrição obrigatório, preencha")
}).required()

export const Form = ({btnTitle, onAction}: FormProps) => {
   const { register, handleSubmit, formState:{errors} } = useForm<IFoodDataForm>({
      resolver: yupResolver(foodSchema)
   })

  return (
   <Container onSubmit={handleSubmit(onAction)}>
      <label htmlFor="">
         Título
         <input
            type="text" 
            placeholder="X-burger"
            {...register("title")}
            />
            <ErroMessage>{errors.title?.message}</ErroMessage>
      </label>
      <label htmlFor="">
         Preço
         <input 
            type="text" 
            placeholder="26.99" 
            {...register("price")}
            />
            <ErroMessage>{errors.price?.message}</ErroMessage>
      </label>
      <label htmlFor="">
         Url da imagem
         <input 
            type="text" 
            placeholder="http://image"
            {...register("imgUrl")}
            />
            <ErroMessage>{errors.imgUrl?.message}</ErroMessage>
      </label>
      <label htmlFor="">
         Descrição
         <textarea 
            placeholder="2 carnes de hamburger, queijo, ..." 
            rows={5}
            {...register("description")}
            >
         </textarea>
            <ErroMessage>{errors.description?.message}</ErroMessage>
      </label>
      <button type="submit">{btnTitle}</button>
   </Container>
  )
}
