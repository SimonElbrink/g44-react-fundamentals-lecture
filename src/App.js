import Product from "./Product";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  const productInformation = [
    {
      title: "Old Vintage Camera",
      description: "None functioning camera, nice to look at anyway",
      price: 500,
      picture_URL: "https://images.pexels.com/photos/821738/pexels-photo-821738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Camera Lens",
      description: "Nikon Camera Lens",
      price: 6000,
      picture_URL: "https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {

      title: "Watch",
      description: "Wonderful Michael Kors Watch",
      price: 15000,
      picture_URL: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }

  ];

  const [products, setProducts] = useState(productInformation);

  const [showData, setShowData] = useState(false);

  useEffect(()=>{
    console.log("Effect Triggered!")
  },[showData]);

  const editProduct = () => {

    setProducts([...products],products[0].price = 9000);
    
    console.log("Price Has Changed!");

    console.log(products);

  }

  const handleShowData = () => {

    console.log("Show Function Triggerd!")

    setShowData(true);
  }

  const handleHideData = () => {

    console.log("Hide Function Triggerd!")

    setShowData(false);
  }

  return (
    <div className="App container">

      <button className="btn btn-warning m-2" onClick={editProduct}>
        Change Product Data
      </button>

      <button className="btn btn-success m-2" onClick={handleShowData}>
        Show Data
      </button>

      <button className="btn btn-danger m-2" onClick={handleHideData}>
        Hide Data
      </button>

      <div className="card-group">

        {
         
          showData && products.map((productData) => {

            return (
              <Product data={productData} />
            )
          })
        }


      </div>

    </div>
  );
}

export default App;
