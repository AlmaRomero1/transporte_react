import '../styles/home.css';

const HomePage = (props) => {
    return(
        <main className="holder">
        <div className="homeimg">
            <img src="img/home/img01.jpg" alt="avión"/>
        </div>
        <div className="columnas">
            <div className="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod laborum incidunt natus nisi atque. Quo et neque nemo aut impedit necessitatibus excepturi suscipit voluptatum, ratione voluptate quia molestias sed.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae blanditiis qui consectetur doloremque, ratione distinctio reprehenderit? Perferendis accusantium, sapiente labore voluptatibus quidem modi harum. Animi aliquam possimus ipsum adipisci minus?</p>
            </div> 
            <div className="testimonios">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className="cita">Simplemente excelente</span>
                    <span className="autor">Juan Gómez - Zapatos.com</span>
                </div>
            </div>
        </div>
    </main>
    )
}

export default HomePage;