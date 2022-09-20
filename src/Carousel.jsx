import { React, Component } from "react";

export default class Carousel extends Component {
    state = {
        active: 0
    }
    static defaultProps  = {
        images : [
            "http://pets-images.dev-apis.com/pets/none.jpg"
        ]
    }
    handleIndexClick = (event) => {
        console.log(this)
        this.setState({active: +event.target.dataset.index})
    }
    render(){
        const {active} = this.state;
        const {images} = this.props;
        return (
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {
                        images.map((photo,index) => {
                            return (<img 
                                onClick={this.handleIndexClick}
                            key={photo}
                            src={photo} 
                            data-index={index}
                            className={index === active? "active" : ""}
                            alt="animal thumbnail" />)
                        })
                    }
                </div>
            </div>
        )
    }
}