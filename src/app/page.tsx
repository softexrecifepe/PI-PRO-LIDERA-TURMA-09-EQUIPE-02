"use client";
import mockup from './resources/leadershipMockup.png';
import { RegisterForm } from "./components/registerForm";
import { PageContent } from "./components/pageContent";

export default function Home(){
 
  return (
    <div>
      <PageContent titleText='Teste de avaliação de liderança' imageSrc={mockup.src}
       textContent="Bem-vindo ao nosso teste de avaliação de liderança! Composto por 18 questões estratégicas, ele foi desenvolvido para identificar e nivelar seu perfil de liderança. 
       Cadastre-se para iniciar sua avaliação."/>
      <RegisterForm/>
    </div>
  )
};