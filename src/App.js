import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import ContactData from './containers/Checkout/ContactData/ContactData'
import Orders from './containers/Orders/Orders'

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<BurgerBuilder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/checkout' element={<Checkout />}>
            <Route path='contact-data' element={<ContactData />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
