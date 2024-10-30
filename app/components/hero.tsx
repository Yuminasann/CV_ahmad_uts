import foto from "../profile.jpg"


function Profile() {
    return (
      <img src={foto.src} alt="Ahmad Maulana" className="fotoku"/>
    );
  }
export default function Hero() {
    return(
        <div>
        <div className="container mx-auto p2 text-center">
        <h1 className="text-black font-bold">CV Online</h1>
        <h2>Ahmad Maulana</h2>
        </div>
        <Profile />
        <p className="container mx-auto p-2 text-center ">
          Saya seorang web developer, yang hobi dengan seni grafis dan juga suka menggambar , cita-cita menjadi ahli programer dan juga menjadi ilustrator
        </p>
        </div>
        
    );

}