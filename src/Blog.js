import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './blog.css';
import Link from '@material-ui/core/Link';

const DATA = [
  {
    img: 'https://i.etsystatic.com/inv/a76e1b/3536059246/inv_830x622.3536059246_64wb6rm9.jpg',
    title: '15 Gorgeous, On-Sale ',
    category: 'Shopping Guides',
    text: 'Start the year on a bright note with local, handmade designs from the Boxing Day Sales Event.',
  },
  {
    img: 'https://i.etsystatic.com/inv/a76e1b/3536059246/inv_830x622.3536059246_64wb6rm9.jpg',
    title: 'First Item',
    category: 'First Item',
    text: 'ferwerwr',
  },
  {
    img: 'https://i.etsystatic.com/inv/a76e1b/3536059246/inv_830x622.3536059246_64wb6rm9.jpg',
    title: 'First Item',
    category: 'First Item',
    text: 'ferwerwr',
  },
];
function Blog() {
  return (
    <div>
      <div class='blog-container'>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <h1 class='blpagehead'>Etsy Journal</h1>
            <h4 class='blpagesubhead'>
              Explore ideas and inspiration for creative living
            </h4>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div class='inputsearch'>
              {' '}
              <input
                type='text'
                placeholder='Search Blog'
                name='search'
                class='searchinput'
              />
              <button type='submit' class='btn-searchblog'>
                <i class='fa fa-search'></i>
              </button>
            </div>
          </Grid>
        </Grid>
        <div class='new1' />

        <Grid container spacing={2}>
          <Grid item lg={5} md={6} sm={12} xs={12}>
            <div class='headerleft'>
              <h5 class='centertext textdecoration'>
                Featured Shops | Shopping Guides
              </h5>
              <h1 class='centertext textdecoration'>
                5 Standout New Etsy Shops Based in the UK
              </h1>
              <h4 class='centertext textdecoration'>
                The best Etsy makers prove that creativity always prevails. From
                a fab DIY duo to an on-trend jewellery designer, discover some
                of our top Etsy shops.
              </h4>
            </div>
            <div class='divcenter'>
              <a href='/blogdetails' className='centertext btn-readon'>
                Read on
              </a>
            </div>
          </Grid>
          <Grid item lg={1} md={6} sm={12} xs={12} />
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img
              src='https://i.etsystatic.com/inv/d3eec2/3596188127/inv_830x622.3596188127_tun3a1lc.jpg'
              alt='...'
              class='imgbloghead'
            />
          </Grid>
        </Grid>
        <br />
        <br />

        <Grid container spacing={2}>
          {DATA.map((item, loop) => (
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <div class='card-blog'>
                <Link href='/blogdetails' class=''>
                  <img
                    class='card-img-top'
                    src={item.img}
                    alt='Card image cap'
                  />
                </Link>
                <div class='card-body'>
                  <h5 class='card-title'>{item.category}</h5>
                  <div class='card-name'>{item.title}</div>
                  <p class='card-text'>{item.text}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Blog;
