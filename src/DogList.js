import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

class DogList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breeds: []
        }
    }

    async componentDidMount() {
        // guaranteed that your HTML is on the DOM
        let response = await axios.get('https://dog.ceo/api/breeds/list/all');
        let { data: { message } } = response;
        let breeds = Object.keys(message);
        
        this.setState({
            breeds: breeds
        })
    }
 
    render() {
        console.log(this.state)
        // let { breeds } = this.state;
        // if (!this.state) return 'LOADING';

        let breeds = this.state.breeds;
        return <div>
                {
                    breeds.map((breed, i) =>(
                        <div key={i}>
                            <Link to={`/${breed}`}>{breed}</Link>
                        </div>
                    ))
                }
            </div>
    }
}

export default DogList