import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./Contextapi/Productcontext";
import Pagenavigation from "./Components/Pagenavigation";
import MyImage from "./Components/MyImage";
import { Container } from "./styles/Container";
import FormatPrice from "./Helper/FormatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb"
import { MdSecurity } from "react-icons/md"
import { GiCash } from "react-icons/gi"
import Star from "./Components/Star";
import AddToCard from "./Components/AddToCard";


const API = "https://api.pujakaitem.com/api/products";

function SingleProduct() {
  const { getSingleProduct, isSingleLoading, singleProduct } = 
  useProductContext();

  const { id} = useParams();

  const {
    id: prodname,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image
  } = singleProduct

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [])

  if(isSingleLoading){
    return< div className="page_loading">Loading...</div >
  }
return(
  <Wrapper>
<Pagenavigation title={name} />
        <Container className='container'>
          <div className="grid grid-two-column">
            {/* product image */}
            <div className="product_images">
              <MyImage imgs={image} />
            </div>

            {/* product data */}
            <div className="product-data">
              <h2>{name}</h2>

              {/* star conponent define */}
              <Star stars={stars} reviews={reviews} />


              <p className="product-data-price">
                Original Price: &nbsp;
                <del>
                  <FormatPrice price={price + 250000} />
                </del>
              </p>
              <p className="product-data-price product-data-real-price">
                Deal of the day: <FormatPrice price={price} />
              </p>
              <p className="desc-data">{description}</p>

              {/* Services icons */}
              <div className="product-data-warranty">
                <div className="product-warranty-data">
                  <TbTruckDelivery className='warranty-icon' />
                  <p>Free Delivery</p>
                </div>
                <div className="product-warranty-data">
                  <TbReplace className='warranty-icon' />
                  <p>30 Days Replacement</p>
                </div>
                <div className="product-warranty-data">
                  <GiCash className='warranty-icon' />
                  <p>Cash-back Warranty</p>
                </div>
                <div className="product-warranty-data">
                  <MdSecurity className='warranty-icon' />
                  <p>1 Year Warranty</p>
                </div>
              </div>

              {/* product data info */}
              <div className="product-data-info">
                <p>Available: &nbsp;
                  <span>
                    {stock > 0 ? "In Stock" : "Not Available"}
                  </span>
                </p>
                {/* <p>
                  ID: &nbsp;
                  <span>{id}</span>
                </p> */}
                <p>
                  Brand: &nbsp;
                  <span>{company}</span>
                </p>
              </div>

              <hr />

              {stock > 0 && <AddToCard product={singleProduct} />}
            </div>
          </div>
        </Container>
      </Wrapper>
    
  )
}



const Wrapper = styled.section`
  .container {
    padding: 7rem 8rem 5rem 10rem;
    ${'' /* margin: 0 20rem; */}
  }
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  
  }  
  .product_images {
    display: flex;
    align-items: center;
  }
  .desc-data {
    text-align: justify;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding: 1rem 0.5rem 0 0.5rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;