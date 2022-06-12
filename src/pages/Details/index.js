import "./index.css";
import { useLocation } from "react-router-dom";

function DetailProducts() {
  const location = useLocation();
  console.log(location.state);
  const productDetails = location.state || {};
  return (
    <div className='details-container'>
      <div className='white-details-wrapper'>
        <div className='one1'>
          <span className='pro-details'>PRODUCT DETAILS</span>
        </div>
        <div className='cards-wrapper1'>
          <div className='card-container1'>
            <div className='img-container1'>
              <div>
                <img className='img1' src={productDetails.imageUrl} alt='api' />
              </div>
            </div>

            <div className='full-details-wrapper'>
              <span>
                <b> Name</b> : {productDetails.name}
              </span>
              <span>
                <b>Description :</b> {productDetails.description}
              </span>
              <span>
                {" "}
                <b>Precent off</b> :{productDetails.percentOff}
              </span>
              <span>
                <b>Original price is : </b> {productDetails.originalPrice}
              </span>
              <span>
                {" "}
                <b>Sale price is : </b> {productDetails.salePrice}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailProducts;
