import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionsList: [],
    title: '',
    amount: '',
    expenses: 0,
    income: 0,
    activeOptionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({activeOptionId: event.target.value})
  }

  onDelete = id => {
    const {transactionsList} = this.state
    const filteredList = transactionsList.filter(each => each.id !== id)
    const deleteItem = transactionsList.filter(each => each.id === id)

    if (deleteItem[0].type === transactionTypeOptions[0].displayText) {
      this.setState(prevState => ({
        income: prevState.income - deleteItem[0].balance,
        transactionsList: filteredList,
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses - deleteItem[0].balance,
        transactionsList: filteredList,
      }))
    }
    console.log(deleteItem)
    console.log(deleteItem[0].balance)
  }

  onSubmit = event => {
    event.preventDefault()
    const {title, amount, activeOptionId} = this.state
    let type
    if (activeOptionId === transactionTypeOptions[0].optionId) {
      type = transactionTypeOptions[0].displayText
    } else {
      type = transactionTypeOptions[1].displayText
    }
    const newTransaction = {
      id: uuidv4(),
      title,
      balance: parseInt(amount),
      type,
    }
    if (newTransaction.type === transactionTypeOptions[0].displayText) {
      this.setState(prevState => ({
        income: prevState.income + newTransaction.balance,
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses + newTransaction.balance,
      }))
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
      activeOptionId: transactionTypeOptions[0].optionId,
    }))
  }

  renderInputForm = () => {
    const {title, amount, activeOptionId} = this.state
    return (
      <>
        <form className="input-form" onSubmit={this.onSubmit}>
          <h1 className="section-heading">Add Transaction</h1>
          <label htmlFor="title">TITLE</label>
          <input
            id="title"
            type="text"
            value={title}
            placeholder="TITLE"
            onChange={this.onChangeTitle}
          />
          <label htmlFor="amount">AMOUNT</label>
          <input
            id="amount"
            type="text"
            value={amount}
            placeholder="AMOUNT"
            onChange={this.onChangeAmount}
          />
          <label htmlFor="type">TYPE</label>
          <select id="type" value={activeOptionId} onChange={this.onChangeType}>
            {transactionTypeOptions.map(each => (
              <option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </select>
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>
      </>
    )
  }

  renderMoneyDetails = () => {
    const {income, expenses} = this.state
    return (
      <MoneyDetails
        income={income}
        expenses={expenses}
        transactionTypeOptions={transactionTypeOptions}
      />
    )
  }

  renderTransactionHistory = () => {
    const {transactionsList} = this.state
    return (
      <>
        <h1 className="section-heading">History</h1>
        <ul className="history-table">
          <li className="history-table-header">
            <p className="table-cell table-title">Title</p>
            <p className="table-cell table-amount">Amount</p>
            <p className="table-cell table-type">Type</p>
          </li>
          {transactionsList.map(each => (
            <TransactionItem
              key={each.id}
              transactionDetails={each}
              onDelete={this.onDelete}
            />
          ))}
        </ul>
      </>
    )
  }

  render() {
    return (
      <div className="bg">
        <div className="greeting-section">
          <p className="greeting-heading">Hi, Richard</p>
          <p className="greeting-para">
            Welcome back to your
            <span className="greeting-span"> Money Manager</span>
          </p>
        </div>
        <div className="money-details-section">{this.renderMoneyDetails()}</div>
        <div className="transaction-history-section">
          <div className="input-container">{this.renderInputForm()}</div>
          <div className="history-container">
            {this.renderTransactionHistory()}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
