function Home() {
    return (

      <>
        <div className="ml-32  m-auto mt-20 bg-white  h-96">
          <div className="flex justify-between w-3/4 m">

            <div>
              
              <h1 className= "font-modak text-5xl mb-30 w-" >Seja-bem vindo(a) a equipe dos Amigos da Saúde!</h1>
              <p className="font-abezee text-2xl mt-10">Aqui você poderá</p>

              <div className="flex m-0">

                <img className=" left-2/4 absolute top-52" src="src\assets\Design_sem_nome-removebg-preview.png" alt="" />

              </div>
              

            </div>
            
       
          </div>
         
          
        </div>
        <div className="flex bg-home-bg w-full h-screen">
          <div className="w-3/4 m-auto mt-20">
            <h1 className="font-modak text-8xl">CRIE SEU PERSONAGEM!</h1>
          </div>
        </div>
        </>
      );
}

export default Home;