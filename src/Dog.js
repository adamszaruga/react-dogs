import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Dog extends Component {

    state = { img: "" }

    async componentDidMount() {
        let response = await axios.get(`https://dog.ceo/api/breed/${this.props.match.params.dog}/images/random`)
        this.setState({
            img: response.data.message
        })
    }
    render() {
        return (
            <div>
                {this.props.match.params.dog}
                <img src={this.state.img} />
            </div>
        )
    }
}

export default withRouter(Dog);