import React from 'react';
import axios from 'axios';
import ProjectApi from '../api/ProjectApi';

class App extends React.Component {
  constructor(props) {
    super(props);

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    this.state = {
      spendings: [],
      categories: [],
      selectedCategory: 'jedzenie',
      amount: '',
      description: '',
      year: year,
      month: month,
      day: day,
      canAddAmount: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleAddSpendingClick = this.handleAddSpendingClick.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }
  componentDidMount() {
    ProjectApi.getCategories().then(data => {
      this.setState((prevState, props) => {
        return { categories: data };
      });
    });
    ProjectApi.getSpendings().then(data => {
      this.setState((prevState, props) => {
        return { spendings: data };
      });
    });
  }
  handleChange(e) {
    this.setState({
      selectedCategory: e.target.value
    });
  }
  handleChangeAmount(e) {
    e.preventDefault();
    const amount = parseInt(e.target.value, 10) || '';
    this.setState((prevState, props) => {
      return { amount, canAddAmount: amount !== '' };
    });
  }
  handleChangeDescription(e) {
    e.preventDefault();
    const description = e.target.value;
    this.setState((prevState, props) => {
      return { description };
    });
  }
  handleAddSpendingClick(e) {
    e.preventDefault();
    return ProjectApi.addSpending({
      year: this.state.year,
      month: this.state.month,
      day: this.state.day,
      amount: this.state.amount,
      category: this.state.selectedCategory,
      description: this.state.description
    }).then(res => {
      console.log(JSON.stringify(res, null, 2));
      this.setState((prevState, props) => {
        return { spendings: [...prevState.spendings, res]};
      });
    });
  }
  render() {
    return(
      <div className="container">
        <h2>My Budget App</h2>
        <h4>{this.state.year}/{this.state.month}</h4>
        <div className="form-inline">
          <div className="form-group">
            <select className="form-control" value={this.state.selectedCategory} onChange={this.handleChange}>
              {this.state.categories.map((category, index) =>
                <option key={index} value={category}>{category}</option>
              )}
            </select>
          </div>
          <div className="form-group">
            <label className="sr-only" for="amountInput">Amount</label>
            <input type="text" className="form-control" id="amountInput" placeholder="Enter amount here..." value={this.state.amount} onChange={this.handleChangeAmount} />
          </div>
          <div className="form-group">
            <label className="sr-only" for="descriptionInput">Description</label>
            <input type="text" className="form-control" id="descriptionInput" placeholder="Description..." value={this.state.description} onChange={this.handleChangeDescription} />
          </div>
          <button
            className="btn btn-default"
            disabled={this.state.canAddAmount ? '' : 'disabled'}
            onClick={this.handleAddSpendingClick}
          >
            Add
          </button>
        </div>
        {this.state.spendings.map(spending =>
          <div key={spending.id}>
            <p>Day: {spending.day} Category: {spending.category}: {spending.amount} - {spending.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
