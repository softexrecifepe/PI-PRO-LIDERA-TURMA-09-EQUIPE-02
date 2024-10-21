"use client";
import { Header } from "./components/header";
import { RegisterForm } from "./components/registerForm";
import { Footer } from "./components/footer";

export default function Home(){
 
  return (
    <div>
      <Header></Header>
      <RegisterForm></RegisterForm>
      <Footer></Footer>
    </div>
  )
};