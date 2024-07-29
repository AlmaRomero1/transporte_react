import'../styles/contacto.css';

const ContactoPages = (props) =>{
    return(
        <main className="holder contacto">
        <div>
            <h2>Completa el formulario</h2>
            <form action="" className="formulario">
                <p>
                    <label for="">Nombre</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="">Email</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="">Teléfono</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="">Comentario</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>

        <div className="datos">
            <h2>Otras vías de comunicación</h2>
            <p>También puede contactarse a través de otros medios</p>
            <ul>
                <li><i className="fa-solid fa-location-dot"></i> :Rafael Nuñez 321</li>
                <li><i className="fa-solid fa-phone"></i> :011 2154545</li>
                <li><a href=""><i class="fa-brands fa-facebook"></i></a> :Transporte X</li>
                <li><i className="fa-brands fa-instagram"></i> :Transporte X </li>
                <li><i className="fa-brands fa-twitter"></i> :Transporte X</li>
                <li><i className="fa-solid fa-envelope"></i> :transportesx@gmail.com </li>
            </ul>
            <div className="mapa">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.7152105184573!2d-64.23576282026865!3d-31.366837158566433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329935b68e47bb%3A0x42ed7f6c1c2665fb!2zQXYuIFJhZmFlbCBOw7rDsWV6LCBDw7NyZG9iYQ!5e0!3m2!1ses!2sar!4v1716212982841!5m2!1ses!2sar" style={{border:0, width:500, height:300 }} title='mapa'></iframe>

            </div>
        </div>    
    </main>

    )
}

export default ContactoPages;