import React from 'react';
import Grid from '@material-ui/core/Grid';
function BlogDetails() {
  return (
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
        <Grid item lg={2} md={2} sm={1} xs={1} />
        <Grid item lg={7} md={8} sm={12} xs={10}>
          <div class='blog-detail-title centertext'>
            5 Standout New Etsy Shops Based in the UK
          </div>
        </Grid>
        <Grid item lg={2} md={2} sm={1} xs={1} />

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div class='blog-category centertext'>
            <a className='blog-category-item'>Featured Shops</a>
            <a className='blog-category-item'>Shopping Guides</a>
          </div>
        </Grid>

        <Grid item lg={10} md={12} sm={12} xs={12}>
          <img
            class='blog-detail-img'
            src='https://i.etsystatic.com/inv/d3eec2/3596188127/inv_830x622.3596188127_tun3a1lc.jpg'
          />
        </Grid>
        <Grid item lg={2} md={2} sm={1} xs={1} />
        <Grid item lg={2} md={2} sm={1} xs={1} />

        <Grid item lg={7} md={8} sm={12} xs={12}>
          <div class='blog-detail-author'>by Diane Vadino</div>
          <div class='blog-detail-date'>Dec 28, 2021</div>
          <div class='blog-detail-description'>
            The best Etsy makers prove that creativity always prevails. From a
            fab DIY duo to an on-trend jewellery designer, discover some of our
            top Etsy shops.
          </div>
        </Grid>
        <Grid item lg={2} md={2} sm={1} xs={1} />

        <Grid item lg={2} md={2} sm={1} xs={1} />

        <Grid item lg={7} md={8} sm={12} xs={12}>
          <img
            src='https://i.etsystatic.com/inv/5b9472/3548610096/inv_fullxfull.3548610096_h9x6t101.jpg'
            alt='...'
            class=' blog-detail-subimg'
          />
          <div class='blog-detail-description'>
            The best Etsy makers prove that creativity always prevails. From a
            fab DIY duo to an on-trend jewellery designer, discover some of our
            top Etsy shops.
          </div>
        </Grid>
        <Grid item lg={2} md={2} sm={1} xs={1} />
      </Grid>
    </div>
  );
}

export default BlogDetails;
