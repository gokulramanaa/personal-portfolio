import React from "react";

type propTypes = {};

type stateTypes = {
    value: string,
};

export default class About extends React.Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {
            value: '',
        }
    }

    render(): React.ReactNode {
        const { value } = this.state;
        return (
            <div>
                <div>About About</div>
            </div>
        );
    }
}