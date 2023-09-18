import styled from "styled-components"
import { UserForm } from "../../types/User"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const Box = styled.div`
  width: 430px;
  background-color: #122623;
  color: white;
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  header{
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
      font-weight: 500;
      margin-top: .5rem;
    }
  }
  form{
    margin-top: 2rem;
    label{
      display: flex;
      flex-direction: column;
      margin-top: .5rem;
    }
    input {
         padding: .5rem;
         font-size: 1rem;
         outline: none;
         border-radius: 6px;
         background-color: transparent;
         border: #d6d6d688 1.5px solid;
         color: white;
         &:focus{
           border: #d6d6d6 1.5px solid;
        }
      }
    button{
        margin-top: 2rem;
        border: none;
        padding: .7rem;
        width: 100%;
        border-radius: 6px;
        color: white;
        text-transform: uppercase;
        font-size: 1rem;
        cursor: pointer;
        background-color: rgba(255, 158, 13, 1);
     }
    }
`

const userSchema = yup.object({
  user: yup.string().required("campo usuário é obrigatório"),
  password: yup.string().required("campo senha é obrigatório")
}).required()

export const Login = () => {

  const { register, handleSubmit, formState:{errors} } = useForm<UserForm>({
    resolver: yupResolver(userSchema)
 })

 const onSubmit = (data: UserForm) => {
  console.log(data)
 }

  return (
    <Container>
      <Box>
        <header>
          <img src="src\imgs\logo.svg" alt="logo image" />
          <h3>Entrar na conta</h3>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Usuário
            <input 
            type="text"
            placeholder="usuario@gmail.com" 
            {...register("user")}
            />
            {errors.user?.message}
          </label>
          <label>
            Senha
            <input 
            type="password" 
            placeholder="user4321"
            {...register("password")}
            />
            {errors.password?.message}
          </label>
          <button type="submit">Entrar</button>
        </form>
      </Box>
    </Container>
  )
}
