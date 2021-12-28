import { Navbar, Transactions, Loader, Footer, Services, Welcome } from './components';

const App = () => {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
    </div>
      )
}

export default App
