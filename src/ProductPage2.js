import React from 'react';
import './ProductPage2.css';

import { useEffect, useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

function ProductPage2(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setData] = useState({});
  const [value, setValue] = React.useState(2);

  console.log(props.name);
  const xy = props.name.replaceAll('-', ' ');
  const editedText = xy.slice(0, -1);
  console.log(editedText);

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: editedText,
        first: props.key1,
        second: props.key2,
      }),
    };
    fetch('https://www.priceya.pixelgradient.com/get_product', requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data['image_url']);
        setData(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>LOADING</p>
      </section>
    );
  } else {
    return (
      <div className='row product__page'>
        <div className='col-8 product__column'>
          <div class='d-flex justify-content-between align-items-center'>
            <h4 className='product__page--h4'>{editedText}</h4>
          </div>
          <div className='product__rating'></div>
          <div className='row'>
            <div class='col product__image--PP'>
              {' '}
              <img
                src={productData['image_url']}
                id='main_product_image'
                width='320'
              />{' '}
            </div>
            <div class='col'>
              <h4>Color: Mint Green</h4>
              <div class='dropdown'>
                <button
                  class='dropdown__capacity dropdown-toggle'
                  type='button'
                  id='dropdownMenu2'
                  data-mdb-toggle='dropdown'
                  aria-expanded='false'
                >
                  Capacity: 128GB
                </button>
                <ul class='dropdown-menu' aria-labelledby='dropdownMenu2'>
                  <li>
                    <button class='dropdown-item' type='button'>
                      64GB
                    </button>
                  </li>
                  <li>
                    <button class='dropdown-item' type='button'>
                      128GB
                    </button>
                  </li>
                  <li>
                    <button class='dropdown-item' type='button'>
                      256GB
                    </button>
                  </li>
                </ul>
              </div>
              <ul className='product__facts'>
                <li>
                  <p>{productData.p1}</p>
                </li>
                <li>
                  <p>{productData.p2}</p>
                </li>
                <li>
                  <p>{productData.p3}</p>
                </li>
                <li>
                  <p>{productData.p4}</p>
                </li>
                <li>
                  <p>{productData.p5}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='description__container'>
            <div class='d-flex justify-content-between align-items-center'>
              <h4 className='product__page--h4'>Product Details</h4>
            </div>
            <h5>
              Apple · iPhone · iPhone 11 · iOS · 6.1 inches screen · Facial
              Recognition · Fingerprint Scanner · 12 MP Front Camera · 12 MP
              Rear Camera · Smartphone
            </h5>
            {console.log(productData)}
            <p>{productData.description}</p>
          </div>
          <div class='d-flex justify-content-between align-items-center'></div>
          <div class='container-fluid'>
            <div class='row'>
              <div class=''>
                <div class=''>
                  <div class='row justify-content-left d-flex'>
                    <div class='col-2 d-flex flex-column'>
                      <div class=''>
                        <h4>Reviews</h4>
                        <h1 class='ratingReview'>4.0</h1>
                        {/* <p class=''>out of 5</p> */}
                      </div>
                      <div>
                        {' '}
                        <span class='fa fa-star star-active'></span>{' '}
                        <span class='fa fa-star star-active '></span>{' '}
                        <span class='fa fa-star star-active '></span>{' '}
                        <span class='fa fa-star star-active '></span>{' '}
                        <span class='fa fa-star star-inactive '></span>{' '}
                      </div>
                      <p class='text-muted'>256 reviews</p>
                    </div>
                    <div class='col-md-10'>
                      <div class='rating-bar0 justify-content-center'>
                        <table class='text-left'>
                          <tr>
                            <td class='rating-label'>5 star</td>
                            <td class='rating-bar'>
                              <div class='bar-container'>
                                <div class='bar-5'></div>
                              </div>
                            </td>
                            <td class='text-right'>123</td>
                          </tr>
                          <tr>
                            <td class='rating-label'>4 star</td>
                            <td class='rating-bar'>
                              <div class='bar-container'>
                                <div class='bar-4'></div>
                              </div>
                            </td>
                            <td class='text-right'>23</td>
                          </tr>
                          <tr>
                            <td class='rating-label'>3 star</td>
                            <td class='rating-bar'>
                              <div class='bar-container'>
                                <div class='bar-3'></div>
                              </div>
                            </td>
                            <td class='text-right'>10</td>
                          </tr>
                          <tr>
                            <td class='rating-label'>2 star</td>
                            <td class='rating-bar'>
                              <div class='bar-container'>
                                <div class='bar-2'></div>
                              </div>
                            </td>
                            <td class='text-right'>3</td>
                          </tr>
                          <tr>
                            <td class='rating-label'>1 star</td>
                            <td class='rating-bar'>
                              <div class='bar-container'>
                                <div class='bar-1'></div>
                              </div>
                            </td>
                            <td class='text-right'>0</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='card'>
                  <div class='row text-left'>
                    <h3>Switch from ios to app</h3>

                    <div className='row'>
                      <div className='product__rating col-2 '>
                        <span class='fa fa-star star-active '></span>{' '}
                        <span class='fa fa-star star-active mx-1'></span>{' '}
                        <span class='fa fa-star star-active mx-1'></span>{' '}
                        <span class='fa fa-star star-active mx-1'></span>{' '}
                        <span class='fa fa-star star-inactive mx-1'></span>{' '}
                      </div>
                      <div className='product__rating col-6'>
                        <div class='review__date'>
                          <p class='text-muted mt-1'>2 March, 2021</p>
                        </div>
                      </div>
                    </div>

                    <p className='content'>
                      After using this phone every day for nearly a year and a
                      half I’ve come to form my own take on this device. At
                      first glance the Iphone 11 is a large yet slim looking
                      device, much larger than my previous phone the Iphone 8.
                      At first, I thought this would allow the phone to be more
                      vulnerable to getting damaged when dropped although even
                      when in a basic case with no screen protector the phone as
                      survived every drop. For its larger size the phone is
                      light weight and able to fit comfortably in my clothes
                      pockets. A positive to this phone is that it is larger, I
                      am a little bit on the taller side so the phone is able to
                      fit comfortably in my hands, it’s nice to watch videos on
                      and I had no problem adjusting quickly from the smaller
                      size of the Iphone 8 to the size of the Iphone 11
                    </p>

                    <div className='row'>
                      {/* <div className='product__rating col-2'>
                        <span class='fa fa-star star-active mx-1'></span>{' '}
                        <span class='fa fa-star star-active mx-1'></span>{' '}
                        <span class='fa fa-star star-active mx-1'></span>{' '}
                        <span class='fa fa-star star-active mx-1'></span>{' '}
                        <span class='fa fa-star star-inactive mx-1'></span>{' '}
                      </div> */}
                      <div className='product__rating col-2'>
                        <div class='review__date'>
                          <p class='text-muted'>Crown Town</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Box component='fieldset' mb={2} borderColor='transparent'>
                  <Rating
                    name='simple-controlled'
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>

                <textarea
                  placeholder='Enter review'
                  id='w3review'
                  name='w3review'
                  rows='4'
                  cols='100'
                />
                <Box component='fieldset' mb={2} borderColor='transparent'>
                  <button className='go__to-store'>
                    <a>Review</a>
                  </button>
                </Box>
              </div>
              <div>
                <table>
                  <tr className='table__row'>
                    {/* 		Item price	Total price */}
                    <th className='table__heading text-muted'>Sold by</th>
                    <th className='table__heading text-muted'>
                      Details & category
                    </th>
                    <th className='table__heading text-muted'>Item Price</th>
                    <th className='table__heading text-muted'>Total Price</th>
                    <th className='table__heading text-muted blank__heading'></th>
                  </tr>
                  {Object.keys(productData['price_list']).map((value) => {
                    const sellerName = Object.keys(
                      productData['price_list'][value]
                    )[0];
                    const offer_price =
                      productData['price_list'][value][sellerName];
                    const url = productData['seller_urls'][value][sellerName];
                    // console.log(productData['price_list'][value][sellerName])
                    return (
                      <tr className='table__row'>
                        <td className='table__item seller__name--table'>
                          {Object.keys(productData['price_list'][value])[0]}
                        </td>
                        <td className='table__item'>Free delivery</td>
                        <td className='table__item'>${offer_price}</td>
                        <td className='table__item'>${offer_price}</td>
                        <td className='table__item'>
                          <button className='go__to-store'>
                            <a href={url}>Go to Store</a>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div class='buying_options'>
            <h4>Buying options</h4>
          </div>

          {Object.keys(productData['price_list']).map((value) => {
            if (value < 4) {
              const sellerName = Object.keys(
                productData['price_list'][value]
              )[0];
              const offer_price = productData['price_list'][value][sellerName];
              const url = productData['seller_urls'][value][sellerName];
              return (
                <div className='row buying__block'>
                  <div className='col'>
                    <h5 className='buying__options-price'>${offer_price}</h5>
                    <p className='buying__options-delivery'>Free Delivery</p>
                    <h5 className='buying__options-seller'>
                      {Object.keys(productData['price_list'][value])[0]}
                    </h5>
                  </div>
                  <div className='col'>
                    {console.log(Object.keys(productData['seller_urls']['0']))}
                    <button className='go__to-store'>
                      <a href={url}>Go to Store</a>
                    </button>
                  </div>
                </div>
              );
            } else {
            }
          })}

          <div>
            <h4 className='buying_options-compare'>
              Compare prices from 5+shops
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage2;
