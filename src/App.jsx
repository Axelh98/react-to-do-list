import "./style.css"

export default function App() {
  return  (  
  <div>
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="">New Item</label>
        <input type="text" id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>
  </div>
  )
}