function Title(props: TitleProps){
  console.log(props.text);
  console.log(props.name);
  return <h1 className="text-2xl font-bold">Meu Título</h1>
}
type TitleProps ={
  text?: string;
  name?: string;
};
export default function Home(){
  return (
    <div>
      <Title text="Olá" name="Jucier"/>
    </div>
  )
};