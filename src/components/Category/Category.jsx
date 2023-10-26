import './Category.css'
import PropTypes from 'prop-types';

import icone1 from "/assets/entrada.png";
import icone2 from "/assets/massa.png";
import icone3 from "/assets/carne.png";
import icone4 from "/assets/bebidas.png";
import icone5 from "/assets/salada.png";
import icone6 from "/assets/sobremesa.png";

const Category = ({ handleFiltro, botaoClicado }) => (
    <section className="secao-categorias">
        <div className="container-botoes">

            <button className={botaoClicado === "Entradas" ? "acenderBtn" : "apagarBtn"}
                onClick={() => handleFiltro("Entradas")}>
                <img src={icone1} alt="ícone" width={20} height={20} />Entradas
            </button>

            <button className={botaoClicado === "Massas" ? "acenderBtn" : "apagarBtn"}
                onClick={() => handleFiltro("Massas")}>
                <img src={icone2} alt="ícone" width={20} height={20}/>Massas
            </button>

            <button className={botaoClicado === "Carnes" ? "acenderBtn" : "apagarBtn"}
                onClick={() => handleFiltro("Carnes")}>
                <img src={icone3} alt="ícone" width={20} height={20}/>Carnes
            </button>
            <button className={botaoClicado === "Bebidas" ? "acenderBtn" : "apagarBtn"}
                onClick={() => handleFiltro("Bebidas")}>
                <img src={icone4} alt="ícone" width={20} height={20}/>Bebidas
            </button>
            <button className={botaoClicado === "Saladas" ? "acenderBtn" : "apagarBtn"}
                onClick={() => handleFiltro("Saladas")}>
                <img src={icone5} alt="ícone" width={20} height={20}/>Saladas
            </button>
            <button className={botaoClicado === "Sobremesas" ? "acenderBtn" : "apagarBtn"}
                onClick={() => handleFiltro("Sobremesas")}>
                <img src={icone6} alt="ícone" width={20} height={20}/>Sobremesas
            </button>

        </div>
    </section>
)


Category.propTypes = {
    botaoClicado: PropTypes.string,
    handleFiltro: PropTypes.func
}

export default Category