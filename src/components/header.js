// function Header({title, color}){
//     return <h1 style={{color:color ? color : "white"}}>{title ? title : "No hay nada"}</h1>
//   }

const Header = ({title, color}) => {
    return <h1 style={{color:color ? color : "white"}}>{title ? title : "No hay nada"}</h1>
}

export default Header;