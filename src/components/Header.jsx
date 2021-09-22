import '../assets/css/Header.css'

function Header(props){
    return(
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    )
}

export default Header;