// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDelete} = props
  const {id, title, balance, type} = transactionDetails
  const onDeleteBtn = () => {
    onDelete(id)
  }

  return (
    <li className="table-row">
      <p className="table-cell table-title">{title}</p>
      <p className="table-cell table-amount">Rs {balance}</p>
      <p className="table-cell">{type}</p>
      <button data-testid="delete" type="button" onClick={onDeleteBtn}>
        <img
          className="delete-btn"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
