// Write your code here
// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {expenses, income} = props
  return (
    <div className="money-details">
      <div className="balance-card">
        <div>
          <img
            className="transaction-logo"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
        </div>
        <div className="transaction-details">
          <p className="transaction-header">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {income - expenses}
          </p>
        </div>
      </div>
      <div className="income-card">
        <div>
          <img
            className="transaction-logo"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
        </div>
        <div className="transaction-details">
          <p className="transaction-header">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses-card">
        <div>
          <img
            className="transaction-logo"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
        </div>
        <div className="transaction-details">
          <p className="transaction-header">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
/* import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  state = {
    income: 0,
    expenses: 0,
  }

  componentDidmount() {
    const {transactionsList, transactionTypeOptions} = this.props
  }

  render() {
    const {income, expenses} = this.state
    return (
      <div className="money-details">
        <div className="balance-card">
          <div>
            <img
              className="transaction-logo"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
            />
          </div>
          <div className="transaction-details">
            <p className="transaction-header">Your Balance</p>
            <p className="amount" data-testid="balanceAmount">
              Rs {income - expenses}
            </p>
          </div>
        </div>
        <div className="income-card">
          <div>
            <img
              className="transaction-logo"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
            />
          </div>
          <div className="transaction-details">
            <p className="transaction-header">Your Income</p>
            <p className="amount" data-testid="incomeAmount">
              Rs {income}
            </p>
          </div>
        </div>
        <div className="expenses-card">
          <div>
            <img
              className="transaction-logo"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
            />
          </div>
          <div className="transaction-details">
            <p className="transaction-header">Your Expenses</p>
            <p className="amount" data-testid="expensesAmount">
              Rs {expenses}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
*/
