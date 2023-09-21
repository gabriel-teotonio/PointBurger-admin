export interface UserForm {
   email: string
   password: string
}
export interface User extends UserForm{
   email: string
   password: string
   id: string
   name: string
}