
import './App.css'
import Cost from './components/Cost'
import Counter from './components/Counter'
import MyForm from './components/MyForm'

function App() {
  const allCosts = [
    { id: 1, type: 'laptop', price: 1200 },
    { id: 2, type: 'mobile', price: 1000 },
    { id: 3, type: 'course', price: 900 },
  ]

  return (

    < div >
      {/* <Counter /> */}

      <MyForm />

      {
        allCosts.map(item => {
          // return <Cost key={item.id} type={item.type} price={item.price} />
          return <Cost key={item.id} data={item} />
        })
      }
    </div >
  )
}

export default App
