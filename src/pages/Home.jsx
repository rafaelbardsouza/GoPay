import '../styles/Home.css'
import logo from '/goPay.png';

export default function Home() {
    return(
        <div className='home'>
            <p>name da silva</p>
            <img src={logo} alt="logo" />
            <h1 className='money'>1000,00R$</h1>
            <button>Adicionar Dinheiro</button>
            <button>Realizar Transferencia</button>
            <button>Consultar Balanço</button>
            <button>Sair</button>
        </div>
    )
}