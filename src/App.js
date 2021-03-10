import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import RickMorty from './assets/rm.webp';
import bg3 from './assets/bg3.jpeg';

function App() {
  return <>
    <Header />
    <Layout urlBg={RickMorty} colorBg={'#211431'} title='Rick' descr='Fun'/>
    <Layout colorBg={'#03292b'}/>
    <Layout urlBg={bg3} colorBg={'rgb(79 6 103)'}/>
    <Footer />
  </>;
}

export default App;
