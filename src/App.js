import Basket from './components/Basket'
import Header from './components/Header'
import Main from './components/Main'

function App () {
  return (
    <div>
      <Header />
      <div className='row'>
        <Main />
        <Basket />
      </div>
    </div>
  )
}

export default App
