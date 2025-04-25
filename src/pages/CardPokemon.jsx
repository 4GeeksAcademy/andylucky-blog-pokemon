
import star from "../assets/img/star.png"
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const CardPokemon = (props) => {
    const { store, dispatch } = useGlobalReducer();


    const handlerfav = () => {

        console.log("click hadelerfav");
        store.pokemons?.map(poke => {
            const id = poke.url.split("/")[6]
            if (id === props.theId) {
                console.log("has elegido al pokemon: " + poke.name)
                dispatch({
                    type: "set_poketselected",
                    payload: {poke}  
                })

            }
        });
    }

    return (
        <div className="col-sm-5 col-md-5 col-lg-2 col-xl-2" >

            <div className="card" >
                <img className="card-img-top" src={props.imgUrl} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: "48px" }} >{props.titulo}: {props.name}</h5>
                    <div className="d-flex d-flex justify-content-around">

                        <Link to={`/detalles/${props.theId}`} className="btn btn-primary">Learn more</Link>

                        <img onClick={handlerfav} className="favorito" src={star} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )

}


