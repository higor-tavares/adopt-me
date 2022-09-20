import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default class ErrorBoundary extends React.Component {
  state = { hasError: false , redirect: false};

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log("ErrorBoundary caught an error", error, info);
  }
  componentDidUpdate(){
    if(this.state.hasError){
        setTimeout(()=> this.setState({redirect:true}), 5000)
    }
  }
  render() {
    if(this.state.redirect){
        return <Navigate to="/"/>
    }
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here </Link>
          to back to the home page or wait five seconds
        </h2>
      );
    }
    return this.props.children;
  }
}
