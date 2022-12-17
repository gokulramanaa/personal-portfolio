import React from "react";

type propTypes = {};

type stateTypes = {
    value: string,
};

export default class Container extends React.Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {
            value: '',
        }
    }

    componentDidMount = () => {
        const url = 'https://stark-spire-12702.herokuapp.com/'
        fetch.apply(null, [url]).then(response => {
            return response.json();
          }).then(data => {
            this.setState({ value: data.data})
          }).catch(err => {
            console.error("Error Reading data " + err);
          });
    }

    render(): React.ReactNode {
        const { value } = this.state;
        return (
            <div>
                <div>Container body</div>
                <div>{value}</div>
            </div>
        );
    }
}