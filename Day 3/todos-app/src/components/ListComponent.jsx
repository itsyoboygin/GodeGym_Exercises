import React, { Component } from 'react';

class ListComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: [],
            item: '',
            isItemAdded: false
        };
    }

    handleChange = (e) => {
        this.setState({
        item: e.target.value,
        isItemAdded: true
        });
    };

    handleAddItem = (e) => {
        e.preventDefault();

        if (this.state.item.trim()) {
        this.setState({
            list: [...this.state.list, this.state.item.trim()],
            item: '',
            isItemAdded: false
        });
        }
    };

    render() {
        return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={this.handleAddItem}>
                <input value={this.state.item} onChange={this.handleChange} placeholder="Add a task" />
                <button type="submit">Add</button>
            </form>

            <ul>
            {this.state.list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
        );
    }
}

export default ListComponent;