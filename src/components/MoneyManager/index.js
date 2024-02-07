import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
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
    historyList: [],
    balance: 0,
    income: 0,
    expenses: 0,
    title: '',
    incomeUser: '',
    type: 'INCOME',
  }

  onDelete = (id, type, incomeUser, expenses) => {
    const {historyList} = this.state
    console.log(type)

    this.setState(prevState => {
      historyList: prevState.historyList.filter(each => each.id !== id)
    })
    if (type === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income - parseInt(incomeUser),
      }))
    }
  }
  submitFormDetails = event => {
    event.preventDefault()
    const {title, incomeUser, type, balance, income, expenses} = this.state

    const newHistoryItem = {id: uuidv4(), title, incomeUser, type}

    console.log(type)
    if (type === transactionTypeOptions[0].optionId) {
      console.log(balance)
      console.log(income)
      console.log(expenses)
      console.log(incomeUser)

      this.setState(prevState => ({
        historyList: [...prevState.historyList, newHistoryItem],
        income: prevState.income + parseInt(incomeUser),
        title: '',
        incomeUser: '',
      }))
    }
    if (type === transactionTypeOptions[1].optionId) {
      this.setState(prevState => ({
        historyList: [...prevState.historyList, newHistoryItem],
        expenses: prevState.expenses + parseInt(incomeUser),
        title: '',
        incomeUser: '',
      }))
    }
  }
  changeTitle = event => {
    this.setState({title: event.target.value})
  }
  changeIncome = event => {
    this.setState({incomeUser: event.target.value})
  }
  changeType = event => {
    this.setState({type: event.target.value})
  }
  render() {
    const {
      balanceDetails,
      historyList,
      balance,
      income,
      expenses,
      title,
      incomeUser,
    } = this.state
    return (
      <div className="background-container">
        <div className="card-container-top">
          <h1 className="heading-top-section">Hi, Richard</h1>
          <p className="para-top-section">
            Welcome back to your{' '}
            <span className="para-top-span-style">Money Manager</span>
          </p>
        </div>
        {<MoneyDetails balance={balance} income={income} expenses={expenses} />}
        <div className="card-container-bottom">
          <form className="form-details-transaction">
            <h1 className="transaction-para">Add Transaction</h1>
            <div>
              <label htmlFor="title" className="label-title">
                TITLE
              </label>
              <br />
              <input
                value={title}
                type="text"
                className="input-title"
                id="title"
                placeholder="TITLE"
                onChange={this.changeTitle}
              />
            </div>
            <div className="container-amount-input">
              <label htmlFor="amount" className="label-title">
                AMOUNT
              </label>
              <br />
              <input
                value={incomeUser}
                type="text"
                className="input-title"
                id="amount"
                placeholder="AMOUNT"
                onChange={this.changeIncome}
              />
            </div>
            <div className="container-amount-input">
              <label htmlFor="type" className="label-title">
                TYPE
              </label>
              <br />
              <select
                type="text"
                className="input-select"
                id="type"
                placeholder="AMOUNT"
                onChange={this.changeType}
              >
                <option
                  defaultValue={transactionTypeOptions[0].optionId}
                  className="select-option"
                  value={transactionTypeOptions[0].optionId}
                >
                  {transactionTypeOptions[0].displayText}
                </option>
                <option
                  className="select-option"
                  value={transactionTypeOptions[1].optionId}
                >
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
            </div>
            <button className="buttn" onClick={this.submitFormDetails}>
              Add
            </button>
          </form>
          <div className="history-container">
            <h2 className="history-para">History</h2>
            <div>
              <ul className="list-container">
                <div>
                  <div className="history-list-container">
                    <p>Title</p>
                    <p>Amount</p>
                    <p>Type</p>
                    <p></p>
                  </div>
                  <hr className="horizantal-line" />
                </div>

                {historyList.map(eachItem => (
                  <TransactionItem
                    historyList={eachItem}
                    key={eachItem.id}
                    onDelete={this.onDelete}
                    transactionTypeOptions={transactionTypeOptions}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
