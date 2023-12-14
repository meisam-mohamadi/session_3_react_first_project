
import { useId, useState } from 'react'
import './App.css'
import Cost from './components/Cost'
import Counter from './components/Counter'
import MyForm from './components/MyForm'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const id = useId()
  console.log(`use id ---> ${id}`)

  const [allCosts, setAllCost] = useState([
    // { id: 1, type: 'laptop', price: 1200 },
    // { id: 2, type: 'mobile', price: 1000 },
    // { id: 3, type: 'course', price: 900 },
  ])

  const addItemToList = (item) => {
    // allCosts.push(item)
    item.id = uuidv4();
    console.log(item)
    setAllCost([...allCosts, item])
  }

  return (

    < div >
      {/* <Counter /> */}

      <MyForm aaa={addItemToList} />

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
