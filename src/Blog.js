import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './blog.css';

const DATA = [
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
      <Container>
        <Grid container spacing={2}>
          {DATA.map((item, loop) => (
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div class='card-blog'>
                <img class='card-img-top' src={item.img} alt='Card image cap' />
                <div class='card-body'>
                  <h5 class='card-title'>{item.category}</h5>
                  <div class='card-name'>{item.title}</div>
                  <p class='card-text'>{item.text}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Blog;
