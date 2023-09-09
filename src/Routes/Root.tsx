import { Outlet } from "react-router-dom"

export const Root = () => {
   return (
      <>
         <h1>hello world</h1>
         <Outlet />
      </>
   )
}