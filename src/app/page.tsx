import { Header } from "./components/header";
import { RegisterForm } from "./components/registerForm";

export default function Home(){
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  )
};