import Header from "./component/Header";
import Footer from "./component/Footer";
import Product from "./component/product";






function App(props) {
    const { notes} = props;

   
    return (
        <div >

            <Header />

           <Product notes={notes}/>

            <Footer />
        </div>
    );
}

export default App;