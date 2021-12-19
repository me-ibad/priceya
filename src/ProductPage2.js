import React from 'react';
import './ProductPage2.css';

import { useEffect, useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';

function Skeletonfun() {
  return (
    <>
      <Skeleton variant='text' width={310} />
      <Skeleton variant='circle' width={60} height={60} />
      <Skeleton variant='rect' width={310} height={218} />
    </>
  );
}

function ProductPage2(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setData] = useState({});
  const [value, setValue] = React.useState(2);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [Comment, setComment] = React.useState('');
  const [title, setTitle] = React.useState('');

  const [allReviews, seallReviews] = useState([]);

  console.log(props.name);
  const xy = props.name.replaceAll('-', ' ');
  const editedText = xy.slice(0, -1);
  console.log(editedText);

  const saveReview = () => {
    seallReviews([
      ...allReviews,
      {
        date: '15 march',
        comment: Comment,
        title: title,
        uploderName: 'saeed',
        rating: value,
      },
    ]);

    setComment('');
    //// setValue()
    ////console.log(value);
  };

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
      <section className='container'>
        <div class='row justify-content-left d-flex'>
          <div class='col-4 col-sm-6 d-flex flex-column'>
            <Skeletonfun />
          </div>
          <div class='col-4 col-sm-6 d-flex flex-column'>
            <Skeletonfun />
          </div>
          <div class='col-4 col-sm-6 mt-4 d-flex flex-column'>
            <Skeletonfun />
          </div>
          <div class='col-4 col-sm-6 mt-4 d-flex flex-column'>
            <Skeletonfun />
          </div>
        </div>
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

                {allReviews.map((item, loop) => (
                  <div class='card'>
                    <div class='row text-left'>
                      <h3>{item.title}</h3>

                      <div className='row'>
                        <Rating
                          name='simple-controlled'
                          readOnly
                          value={item.rating}
                        />

                        {/* <div className='product__rating col-2 '>
                          <span class='fa fa-star star-active '></span>{' '}
                          <span class='fa fa-star star-active mx-1'></span>{' '}
                          <span class='fa fa-star star-active mx-1'></span>{' '}
                          <span class='fa fa-star star-active mx-1'></span>{' '}
                          <span class='fa fa-star star-inactive mx-1'></span>{' '}
                        </div> */}
                        <div className='product__rating col-6'>
                          <div class='review__date'>
                            <p class='text-muted mt-1'> {item.date}</p>
                          </div>
                        </div>
                      </div>

                      <p className='content'>{item.comment}</p>

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
                            <p class='text-muted'>{item.uploderName}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <Box component='fieldset' mb={2} borderColor='transparent'>
                  <button onClick={handleClickOpen} className='go__to-store'>
                    <a>Review</a>
                  </button>
                </Box>
              </div>

              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
              >
                <DialogTitle id='alert-dialog-title'>{editedText}</DialogTitle>

                <DialogContent style={{ width: 500 }}>
                  <Box component='fieldset' mb={2} borderColor='transparent'>
                    <div class='row text-left'>
                      <div className='product__rating col-1'>
                        <Avatar>H</Avatar>
                      </div>

                      <div className='product__rating col-10 name_mrg_left'>
                        <h5>Saeed</h5>
                      </div>
                    </div>
                  </Box>

                  <Box component='fieldset' mb={1} borderColor='transparent'>
                    <Rating
                      name='simple-controlled'
                      value={value}
                      defaultValue={2}
                      size='large'
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>

                  <Box component='fieldset' mb={1} borderColor='transparent'>
                    <TextField
                      fullWidth
                      id='standard-basic'
                      label='Title'
                      defaultValue={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Box>
                  <Box component='fieldset' mb={1} borderColor='transparent'>
                    <TextField
                      id='filled-secondary'
                      label='Share details your experience'
                      variant='filled'
                      fullWidth
                      margin='normal'
                      multiline={true}
                      rows={3}
                      defaultValue={Comment}
                      onChange={(e) => setComment(e.target.value)}
                      // color='secondary'
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color='primary'>
                    Cancel
                  </Button>
                  <Button onClick={saveReview} color='primary' autoFocus>
                    Post
                  </Button>
                </DialogActions>
              </Dialog>

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
