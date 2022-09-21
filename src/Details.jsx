import { React, Component, useContext} from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true , hasError: false, showModal: false};
  componentDidMount() {
    this.fetchData()
    .catch((e)=> {
      this.setState(Object.assign({ loading: false , hasError: true}));
    });
  }
   fetchData = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }
  toggleModal = () => {
    this.setState({showModal: !this.state.showModal});
  }
  render() {
    if (this.state.loading) {
      return <h2>loading ...</h2>;
    }
    if(this.state.hasError){
      throw new Error("aaa")
    }
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city} , {state}
          </h2>
          <button style={{backgroundColor: this.props.theme}} onClick={this.toggleModal}>Adopt {name}</button>
          <p>{description}</p>
          {
            showModal? (
              <Modal>
                <div>
                  <h1>Would you like to adopt {name} ?</h1>
                  <div className="buttons">
                    <a href="https://bit.ly/pet-adopt">YES</a>
                    <button onClick={this.toggleModal}>NO</button>
                  </div>
                </div>
              </Modal>
            ): null
          }
        </div>
      </div>
    );
  }
}

const WrapDetails = () => {
  const params = useParams();
  const [theme,setTheme] = useContext(ThemeContext)
  return (
    <ErrorBoundary>
      <Details params={params} theme={theme}/>
    </ErrorBoundary>
  );
};
export default WrapDetails;
