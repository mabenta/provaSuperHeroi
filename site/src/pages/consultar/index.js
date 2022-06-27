import { Link } from "react-router-dom"
import { useState,useEffect} from "react"
import { ver } from "../../api/Mulher";

export default function Contact() {
    
    const [heroi, setHeroi] = useState([]);

    async function verTudo(){
        const resp = await ver();
        setHeroi(resp);
    }

    useEffect(() => {
        verTudo();
    }, [])
    
    return (
        <div>

    <table>
        <thead>
            <td>Nome</td>
            <td>Poder</td>
            <td>Voa?</td>
        </thead>
        <tbody>

    {heroi.map(item =>
        <tr>
            
            <td>{item.nome}</td>
            <td>{item.poder}</td>
            <td>{item.voa}</td>
            
        </tr>     
)}
    </tbody>
    </table>

            <Link to='/'>Menu</Link>
        </div>
    )
}

           