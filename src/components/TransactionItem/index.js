// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyList, onDelete, transactionTypeOptions} = props
  const {id, title, incomeUser, type} = historyList
  const typeText = type === "INCOME"?transactionTypeOptions[0].displayText:transactionTypeOptions[1].displayText;
  const deleteHistoryItem = () => {
    onDelete(id, type, incomeUser)
  }
  return (
    <li>
      <div className="list-items-container">
        <p>{title}</p>
        <p>{`Rs ${incomeUser}`}</p>
        <p>{typeText}</p>
        <button
          className="buttn-delete"
          data-testid="delete"
          onClick={deleteHistoryItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>

      <hr className="horizantal-line" />
    </li>
  )
}
export default TransactionItem
