import { Component } from "react";
import PropTypes from 'prop-types';

//Responsável por criar o modelo que será exibido na tela


class Pokemon extends Component {
    render () {
      const { pokemon: { name, type, averageWeight, image  } } = this.props;
        return (
            <section className="pokeModel">
                <div className="pokemon">
                    <div>
                        <h3>{name}</h3>
                        <p>{type}</p>
                        <p>{`Average Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                    </div>
                        <img src={image} alt={`{name} sprite`}/>
                </div>
            </section>
        );
    }
    
};

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            measurementUnit: PropTypes.string,
            value: PropTypes.string,
        }),
        image: PropTypes.string,
    }).isRequired,
};

export default Pokemon;