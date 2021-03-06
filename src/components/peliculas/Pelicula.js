import { Redirect, useParams } from "react-router";
import { data } from "../../data/data";

export const Pelicula = ({ history }) => {

    const { nombreURL } = useParams();

    const pelicula = data.find( dato => ( dato.nombreURL === nombreURL ));

    if( !pelicula ){
        return <Redirect to="/" />;
    }

    const handleBack = () => {
        history.push("/");
    }

    return (
        <section className="contenedor animacionFade">
            <div className="pelicula__titulo">
                <button onClick={ handleBack }>Volver</button>
                <h2>{ pelicula.nombreTitulo }</h2>
            </div>

            <div className="pelicula__contenedor">
                <iframe title={ pelicula.nombreURL } src={ pelicula.url } frameBorder="1" scrolling="no" allowFullScreen sandbox="allow-scripts" referrerPolicy="strict-origin"></iframe>
            </div>
        </section>
    )
}
