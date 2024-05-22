import imagens from "../assets/enzzofoto.jpg"
import seta from "../assets/seta.png"

function Equipe() {
    return (

    <>
        <div className="font-modak flex justify-center items-center h-60 ">
            <h1 className="text-7xl text-green-700">A equipe é composta por: </h1>
        </div>
        <div className="flex justify-center gap-7">
            <div className="bg-white h-90 rounded-lg shadow-md pt-16 hover:bg-slate-100 transition hover:scale-110">
                <img src={imagens}
                className="w-40 h-40 rounded-full mx-auto"
                alt="user" />
                <div className="text-center my-10 mx-5">
                    <p className="text-gray-900 font-bold text-xl mb-2">
                        Enzzo Monteiro
                    </p>

                    <p className="text-gray-900">
                        <span className="font-semibold">Email = </span>enzzo.50000@gmail.com
                    </p>

                    <p className="text-gray-900">
                        <span className="font-medium">Turma: </span> 1ESPA - PAULISTA
                    </p>

                </div>
            </div>

            <div className="bg-white h-90 rounded-lg shadow-md pt-16  hover:bg-slate-100 transition hover:scale-110">
                <img src={imagens}
                className="w-40 h-40 rounded-full mx-auto"
                alt="user" />
                <div className="text-center my-10 mx-5">
                    <p className="text-gray-900 font-bold text-xl mb-2">
                        Enzzo Monteiro
                    </p>

                    <p className="text-gray-900">
                        <span className="font-semibold">Email = </span>enzzo.50000@gmail.com
                    </p>

                    <p className="text-gray-900">
                        <span className="font-medium">Turma: </span> 1ESPA - PAULISTA
                    </p>

                </div>
            </div>

            <div className="bg-white h-90 rounded-lg shadow-md pt-16  hover:bg-slate-100 transition hover:scale-110">
                <img src={imagens}
                className="w-40 h-40 rounded-full mx-auto"
                alt="user" />
                <div className="text-center my-10 mx-5">
                    <p className="text-gray-900 font-bold text-xl mb-2">
                        Enzzo Monteiro
                    </p>

                    <p className="text-gray-900">
                        <span className="font-semibold">Email = </span>enzzo.50000@gmail.com
                    </p>

                    <p className="text-gray-900">
                        <span className="font-medium">Turma: </span> 1ESPA - PAULISTA
                    </p>

                </div>
            </div>

            <div className="bg-white h-90 rounded-lg shadow-md pt-16  hover:bg-slate-100 transition hover:scale-110">
                <img src={imagens}
                className="w-40 h-40 rounded-full mx-auto"
                alt="user" />
                <div className="text-center my-10 mx-5">
                    <p className="text-gray-900 font-bold text-xl mb-2">
                        Enzzo Monteiro
                    </p>

                    <p className="text-gray-900">
                        <span className="font-semibold">Email = </span>enzzo.50000@gmail.com
                    </p>

                    <p className="text-gray-900">
                        <span className="font-medium">Turma: </span> 1ESPA - PAULISTA
                    </p>

                </div>
            </div>
        </div>
        <div>
            <div></div>
            <div></div>
        </div>
    </>

    );
}

export default Equipe;