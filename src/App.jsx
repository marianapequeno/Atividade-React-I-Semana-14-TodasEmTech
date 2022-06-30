import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  window.document.body.style = "margin: 0";
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App