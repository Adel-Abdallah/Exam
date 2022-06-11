import "./index.css";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

function productContainer(props) {
  // console.log("productProps", props);
  return (
    <div className='product'>
      <div className='whiteContainer'>
        <div className='one'>
          <span className='recommended'>Recommended for you</span>
          <span>
            <Link to='/all-products'>See more</Link>
          </span>
        </div>
        <div className='cards-wrapper'>
          {props.products.map(product => (
            <div className='card-container'>
              <div className='img-container'>
                <div className='icon-wrapper'>
                  <BsHeart className='icon' />
                </div>
                <div>
                  <img className='img' src={product.imageUrl} alt='api' />
                </div>
              </div>
              <div className='spans-wrapper'>
                <span className='lighter'>
                  <b className='normal'> {product.name} </b>
                  {product.description}
                </span>
                <span className='price'>{product.salePrice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default productContainer;
