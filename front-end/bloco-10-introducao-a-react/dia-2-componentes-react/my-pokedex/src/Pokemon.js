import React from "react";

class Pokemon extends React.Component {
    render() {
        const { pokemon: { name, type, averageWeight, image }} = this.props;
        /*
          Fizemos um map no nosso array de pokemons
     que vai renderizar o componente Pokemon para cada item do array.
     Então, recebemos a props "pokemon" que é um objeto do array de pokemons
     Nesses objetos temos informações como name, type e etc, então
     desestruturamos essas informações e renderizamos em uma tag HTML,
     no caso, utilizamos um <p>.
        */
        return (
            <div>
                <div className="pokemon">
                    <div>
                        <p>{name}</p>
                        <p>{type}</p>
                        <p>
                            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
                        </p>
                        <img src={image} alt={`${name} sprite`} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Pokemon;