import chefIdanskiLogo from "/src/logo.jpg"

export default function Header(){
    return (
       <header>
         <img   className="logo" src={chefIdanskiLogo} alt="chef logo"/>
        <h1>Chef Idanskii...</h1>
    </header> 
    )
}