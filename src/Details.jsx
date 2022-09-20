import { React, Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
class Details extends Component {
  state = { loading: true , hasError: false};

  componentDidMount() {
    this.fetchData()
    .catch((e)=> {
      this.setState(Object.assign({ loading: false , hasError: true}));
    });
  }
   fetchData = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/petsuu?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }
  render() {
    if (this.state.loading) {
      return <h2>loading ...</h2>;
    }
    if(this.state.hasError){
      throw new Error("aaa")
    }
    const { animal, breed, city, state, description, name, images } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city} , {state}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrapDetails = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  );
};
export default WrapDetails;
