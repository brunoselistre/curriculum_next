import type { NextPage } from 'next'
import Header from '../components/Header';
import Center from '../components/Center';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';



const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-white h-screen w-screen overflow-hidden overflow-y-scroll">
      <title>Bruno Selistre</title>
      <main className="flex flex-col flex-auto">
        <Header/>
        <Center/>
      </main>

      <div className="flex">
        <Footer/>
      </div>
    </div>
  )
}

export default Home
