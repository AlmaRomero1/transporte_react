import '../styles/nosotros.css';

const NosotrosPage = (props) =>{
    return(
        <main className="holder">
        <section className="historia">
            <h2>Historia</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit accusamus voluptatibus quia eius, fugiat, vitae dolores ullam, temporibus est at nulla tempora soluta quam ratione consectetur doloremque nemo repudiandae sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rerum, ex nesciunt minima et repudiandae facere est ipsam repellat sapiente harum asperiores quos voluptatibus, ratione quidem neque consectetur in aliquid!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, deleniti magni harum explicabo sequi veniam accusantium sit perspiciatis quaerat quam a reiciendis tempora debitis tenetur repellendus, officiis nemo ea possimus!</p>
        </section>
        <section className="staff">
          <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="img/nosotros/nosotros1.jpg" alt="Juan Gomez"/>
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio vitae eligendi incidunt animi dolores reprehenderit voluptatum totam aliquam cum, sapiente tenetur suscipit officia earum amet nisi quam eum esse!</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros2.jpg" alt="Juan Gomez"/>
                    <h5>Diana Reyes</h5>
                    <h6>Gerente Comercial</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio vitae eligendi incidunt animi dolores reprehenderit voluptatum totam aliquam cum, sapiente</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros3.jpg" alt="Juan Gomez"/>
                    <h5>Roberto Zabala</h5>
                    <h6>Gerente de Sistemas</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio vitae eligendi incidunt animi dolores reprehenderit voluptatum totam aliquam cum, sapiente tenetur suscipit officia earum amet nisi quam eum esse!</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros4.jpg" alt="Juan Gomez"/>
                    <h5>Sandra Mastroloi</h5>
                    <h6>Gerente de Marketing</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio vitae eligendi incidunt animi dolores reprehenderit voluptatum totam aliquam cum</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros5.jpg" alt="Juan Gomez"/>
                    <h5>Luciano Gomez</h5>
                    <h6>Gerente de Logística</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio vitae eligendi incidunt animi dolores reprehenderit voluptatum totam aliquam cum, sapiente tenetur suscipit officia earum amet nisi quam eum esse!</p>
                </div>

            </div>
        </section>
        
    </main>
    )
}

export default NosotrosPage;