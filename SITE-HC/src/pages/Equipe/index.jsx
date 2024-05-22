
function Equipe() {
    return (

    <div className="bg-equipe-bg h-screen w-full">
        <div className="font-modak flex justify-center items-center h-60 mt-5 ">
            <h1 className="text-7xl text-green-700 bg-blend-multiply">A equipe é composta por: </h1>
        </div>
        <div className="flex justify-center gap-10  ">
            <div className="bg-white h-90 rounded-lg shadow-md pt-16 hover:bg-slate-100 transition hover:scale-110 object-cover">
                <img src= "src\assets\fotos\enzzo.jpeg"
                className="w-40 h-40 rounded-full mx-auto object-cover"
                alt="user" />
                <div className="text-center my-10 mx-5 font-Anta">
                    <p className="text-gray-900 font-bold text-xl mb-2">
                        Enzzo Monteiro Barros Silva
                    </p>

                    <p className="text-gray-900">
                        <span className="font-semibold">Email = </span>enzzo.50000@gmail.com
                    </p>

                    <p className="text-gray-900">
                        <span className="font-medium">Turma: </span> 1ESPA - PAULISTA
                    </p>

                </div>
            </div>

            <div className="bg-white h-90 rounded-lg shadow-md pt-16 hover:bg-slate-100 transition hover:scale-110 object-cover">
                <img src= "src\assets\fotos\fotoluis.jpeg"
                className="w-40 h-40 rounded-full mx-auto"
                alt="user" />
                <div className="text-center my-10 mx-5 font-Anta">
                    <p className="text-gray-900 font-bold text-xl mb-2">
                        Luís Alberto Rocha Filho 
                    </p>

                    <p className="text-gray-900">
                        <span className="font-semibold">Email = </span>luisalberto-rocha@hotmail.com
                    </p>

                    <p className="text-gray-900">
                        <span className="font-medium">Turma: </span> 1ESPA - PAULISTA
                    </p>

                </div>
            </div>

            <div className="bg-white h-90 rounded-lg shadow-md pt-16 hover:bg-slate-100 transition hover:scale-110">
                <img src= "src\assets\fotos\rafa.jpeg"
                className="w-40 h-40 rounded-full mx-auto object-fill "
                alt="user" />
                <div className="text-center my-10 mx-5 font-Anta">
                    <p className="text-gray-900 font-bold text-xl mb-2">
                        Rafael Alves do Nascimento
                    </p>

                    <p className="text-gray-900">
                        <span className="font-semibold">Email = </span>dagalera.dev@gmail.com
                    </p>

                    <p className="text-gray-900">
                        <span className="font-medium">Turma: </span> 1ESPA - PAULISTA
                    </p>

                </div>
            </div>

            <div className="bg-white h-90 rounded-lg shadow-md pt-16 hover:bg-slate-100 transition hover:scale-110">
                <img src= "src\assets\fotos\taiki.jpeg"
                className="w-40 h-40 rounded-full mx-auto object-cover"
                alt="user" />
                <div className="text-center my-10 mx-5 font-Anta">
                    <p className="text-gray-900 font-bold text-xl mb-2">
                        Vinicius Taiki
                    </p>

                    <p className="text-gray-900">
                        <span className="font-semibold">Email = </span>taiki.code@gmail.com
                    </p>

                    <p className="text-gray-900">
                        <span className="font-medium">Turma: </span> 1ESPA - PAULISTA
                    </p>

                </div>
            </div>
        </div>
    </div>

    );
}

export default Equipe;