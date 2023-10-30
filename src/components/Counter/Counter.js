import React from 'react';
import '../../sass/components/button-holder.scss';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    increaseCounter = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
    }

    decreaseCounter = () => {
        this.setState(prevState => ({
            counter: prevState.counter - 1
        }));
    }

    render() {
        const sectionTitle = React.createElement('h2', null, 'Ticket 1: Counter');
        const buttonIncreaseElement = React.createElement('button', { className: 'increase-button btn btn-primary', 'data-testid': 'increment-btn', onClick: this.increaseCounter }, 'Increase button');
        const buttonDescreaseElement = React.createElement('button', { className: 'decrease-button btn btn-secondary', 'data-testid': 'decrement-btn', onClick: this.decreaseCounter }, 'Decrease button');
        const valueElement = React.createElement('p', { className: 'value', 'data-testid': 'counter-value' }, this.state.counter);

        return React.createElement('div', { className: 'button-holder text-center' }, sectionTitle, valueElement, buttonIncreaseElement, buttonDescreaseElement);
    }
}

export default Counter;
