import { React } from "react";

export default class Carousel extends React.Component {
    state = {
        active: 0
    }
    static defaultProps  = {
        images : [
            "http://pets-images.dev-apis.com/pets/none.jpg"
        ]
    }
}