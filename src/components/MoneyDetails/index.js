// Write your code here
import './index.css'

const MoneyDetails = props => {
  // const {balanceDetails} = props
  const {balance, income, expenses} = props
  return (
    <div className="card-container-middle">
      <div className="small-card-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image-wallet"
        />
        <div>
          <p className="ballance-para-card" >Your Balance</p>
          <p className="ballance-ruppes" data-testid="balanceAmount">{`Rs ${income - expenses}`}</p>
        </div>
      </div>
      <div className="small-card-container-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image-wallet"
        />
        <div>
          <p className="ballance-para-card" >Your Income</p>
          <p className="ballance-ruppes" data-testid ="incomeAmount">{`Rs ${income}`}</p>
        </div>
      </div>
      <div className="small-card-container-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image-wallet"
        />
        <div>
          <p className="ballance-para-card">Your Expenses</p>
          <p className="ballance-ruppes" data-testid="expensesAmount">{`Rs ${expenses}`}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
