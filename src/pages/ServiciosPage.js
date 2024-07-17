import '../styles/servicios.css';

const ServiciosPage = (props) =>{
    return(
        <main className="holder">
        <h2>Servicios</h2>
        <div className="servicio">
            <img src="img/servicios/aereo.jpg" alt="avion"/>
            <div className="info">
                <h4>Transporte Aéreo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem ut qui molestias quasi possimus enim impedit ipsam expedita veritatis ad incidunt sapiente, architecto cumque ipsa amet commodi velit debitis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, et! Nemo iusto et nesciunt nihil reprehenderit unde obcaecati ipsum. Facere, omnis. Quia asperiores voluptate ipsum quis officia, cum facilis velit!</p>
            </div>
        </div>
        <div className="servicio">
            <img src="img/servicios/terrestre.jpg" alt="camion"/>
            <div className="info">
                <h4>Transporte Terrestre</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem ut qui molestias quasi possimus enim impedit ipsam expedita veritatis ad incidunt sapiente, architecto cumque ipsa amet commodi velit debitis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ullam aspernatur esse, officia necessitatibus tempora? Accusantium consequuntur quia autem, natus quo, qui quas dolorum, facilis possimus velit nam illum delectus?</p>
            </div>
        </div>
        <div className="servicio">
            <img src="img/servicios/maritimo.jpg" alt="barco"/>
            <div className="info">
                <h4>Transporte Marítimo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem ut qui molestias quasi possimus enim impedit ipsam expedita veritatis ad incidunt sapiente, architecto cumque ipsa amet commodi velit debitis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis perspiciatis saepe, blanditiis quia tempora tempore aut soluta, tenetur architecto rerum, ipsam rem vitae impedit hic minus a eaque sunt et?</p>
            </div>
        </div>
        <div className="servicio">
            <img src="img/servicios/ferroviario.jpg" alt="tren"/>
            <div className="info">
                <h4>Transporte Ferroviario</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem ut qui molestias quasi possimus enim impedit ipsam expedita veritatis ad incidunt sapiente, architecto cumque ipsa amet commodi velit debitis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, obcaecati porro temporibus harum quaerat est omnis neque dolorum sed! Quasi quod obcaecati nisi amet! Facere vitae sapiente totam voluptatibus consequuntur.</p>
            </div>
        </div>

        
    </main>
    )
}

export default ServiciosPage;