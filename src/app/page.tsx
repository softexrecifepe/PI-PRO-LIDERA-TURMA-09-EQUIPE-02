"use client";
import mockup from './resources/leadershipMockup.png';
import { RegisterForm } from "./components/registerForm";
import { PageContent } from "./components/pageContent";

export default function Home(){
 
  return (
    <div>
      <PageContent titleText='Teste de avaliação de liderança' imageSrc={mockup.src}
       textContent="Seja bem-vindo ao nosso teste de avaliação de liderança! Com apenas 18 questões, nosso teste tem como finalidade definir seu nível 
       de liderança. Cadastre-se para começar a responder!"/>
      <RegisterForm/>
    </div>
  )
};