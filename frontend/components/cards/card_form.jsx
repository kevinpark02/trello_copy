import React from 'react';

class CardForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.card;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createCard(this.state)
    }

    render() {
        const card = this.state;

        return (
            <div className="card-form-cont">
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        value={card.name}
                        placeholder="Enter a card name..."
                        onChange={this.update('name')}/>
                    <input type="submit" value="Add Card"/>
                </form>
            </div>
        )
    }
}

export default CardForm;