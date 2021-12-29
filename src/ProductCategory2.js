import React from 'react';
import ProductCard from './ProductCard';
import './ProductCategory.css';
import { useEffect, useState, useRef } from 'react';
import { Button } from '@material-ui/core';
import FilterSubList from './FilterSubList';
import { categoryData } from './data';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Filters from './Filters';

function ProductCategory2(props) {
  const history = useHistory();
  const routeChange = (pathparam) => {
    let path = '/' + pathparam;
    console.log(pathparam);
    history.push(path);
  };

  const [aName, setAName] = useState('Type');
  const [aChecked, setAChecked] = useState(true);
  const [aValue, setAValue] = useState('Macbook');

  const [isLoading, setIsLoading] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loadedBrands, setLoadedBrands] = useState([]);

  const [productCount, setProductCount] = useState(30);
  const [productCount2, setProductCount2] = useState();

  const [brandCount, setBrandCount] = useState(20);
  const [brandFilters, setBrandFilters] = useState([]);

  const [screenSizesFilters, setScreenSizesFilters] = useState([]);
  const [screenSizes, setScreenSizes] = useState([]);
  const [screenSizesCount, setScreenSizesCount] = useState(20);

  const [resolutionsFilters, setResolutionsFilters] = useState([]);
  const [resolutions, setResolutions] = useState([]);
  const [resolutionsCount, setResolutionsCount] = useState(20);

  const [screenTypeFilters, setScreenTypeFilters] = useState([]);
  const [screenType, setScreenType] = useState([]);
  const [screenTypeCount, setScreenTypeCount] = useState(20);

  const [osFilters, setOSFilters] = useState([]);
  const [os, setOS] = useState([]);

  const [priceFilters, setPriceFilters] = useState([]);
  const [price, setPrice] = useState([]);

  const [broadbandGenerationFilters, setBroadbandGenerationFilters] = useState(
    []
  );
  const [broadbandGeneration, setBroadbandGeneration] = useState([]);

  const [headphoneTypeFilters, setHeadphoneTypeFilters] = useState([]);
  const [headphoneTypes, setheadphoneTypes] = useState([]);

  const [typeFilters, setTypeFilters] = useState([]);
  const [type, setType] = useState([]);

  const [storageFilters, setStorageFilters] = useState([]);
  const [storage, setStorage] = useState([]);

  const allCategoryData = categoryData;

  const [sortType, setSortType] = useState('Sort by A-Z');
  const [value, setValue] = React.useState([0, 10]);

  const [removedNavFilters, setRemovedNavFilters] = useState([]);

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    let filteredPriceList = [];
    loadedProducts.map((product) => {
      console.log(value[0]);
      console.log(value[1]);
      if (
        product.price_low >= value[0] * 100 &&
        product.price_low <= value[1] * 100
      ) {
        console.log(product.price_low);
        filteredPriceList.push(product);
      }
    });
    console.log(filteredPriceList);
    setFilteredProducts(filteredPriceList);
  };

  function incrementCount() {
    setProductCount(productCount + 30);
    console.log(filteredProducts.length);
    console.log(productCount);
  }
  function incrementCountBrand() {
    setBrandCount(brandCount + 20);
  }

  function intersectFor2(a, b) {
    return a.filter((value) => b.includes(value));
  }
  function intersectFor3(a, b, c) {
    return a.filter((value) => b.includes(value) && c.includes(value));
  }
  function intersectFor4(a, b, c, d) {
    return a.filter(
      (value) => b.includes(value) && c.includes(value) && d.includes(value)
    );
  }
  function intersectFor5(a, b, c, d, e) {
    return a.filter(
      (value) =>
        b.includes(value) &&
        c.includes(value) &&
        d.includes(value) &&
        e.includes(value)
    );
  }
  function intersectFor6(a, b, c, d, e, f) {
    return a.filter(
      (value) =>
        b.includes(value) &&
        c.includes(value) &&
        d.includes(value) &&
        e.includes(value) &&
        f.includes(value)
    );
  }
  function intersectFor7(a, b, c, d, e, f, g) {
    return a.filter(
      (value) =>
        b.includes(value) &&
        c.includes(value) &&
        d.includes(value) &&
        e.includes(value) &&
        f.includes(value) &&
        g.includes(value)
    );
  }

  function checkURL() {
    let filteredBrandList = [];
    let filteredList = [];
    let selectedBrands = brandFilters;
    // if(target.name == "Brand"){
    let newList = [];
    selectedBrands.push('Bosch');
    setProductCount(loadedProducts.length);

    if (selectedBrands.length > 0) {
      loadedProducts.map((product) => {
        if (selectedBrands.includes(product.brand_name)) {
          filteredBrandList.push(product);
        }
      });
      filteredList.push(filteredBrandList);
    }

    if (filteredList.length == 0) {
      newList = loadedProducts;
    }

    if (filteredList.length == 1) {
      newList = filteredList[0];
    }
    console.log(newList);
    setProductCount(loadedProducts.length);
    setBrandFilters(selectedBrands);
    setFilteredProducts(newList);
  }

  function navFilters(type, value) {
    var type = 'Type';
    var value = 'Macbook';
    var newList = [];
    console.log(filteredProducts);

    filteredProducts.map((product) => {
      if (product.type == value) {
        newList.push(product);
      }
    });
    setFilteredProducts(newList);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(props.fetchURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let all_brands = [];
        const products = [];
        const brandList = [];
        const screenSizeList = [];
        const resolutionList = [];
        const screenTypeList = [];
        const OSList = [];
        const broadbandGenerationList = [];
        const headphoneTypeList = [];
        const typeList = [];
        const storageList = [];

        for (const key in data) {
          let seller = '';
          let price1 = '';
          let price2 = '';
          if (data[key]['headphone_type']) {
            if (!headphoneTypeList.includes(data[key]['headphone_type'])) {
              headphoneTypeList.push(data[key]['headphone_type']);
            }
          }
          if (data[key]['type']) {
            if (!typeList.includes(data[key]['type'])) {
              typeList.push(data[key]['type']);
            }
          }
          if (data[key]['storage']) {
            if (!storageList.includes(data[key]['storage'])) {
              storageList.push(data[key]['storage']);
            }
          }
          if (data[key]['screen_size']) {
            if (!screenSizeList.includes(data[key]['screen_size'])) {
              screenSizeList.push(data[key]['screen_size']);
            }
          }
          if (data[key]['resolution']) {
            if (!resolutionList.includes(data[key]['resolution'])) {
              resolutionList.push(data[key]['resolution']);
            }
          }
          if (data[key]['screen_type']) {
            if (!screenTypeList.includes(data[key]['screen_type'])) {
              screenTypeList.push(data[key]['screen_type']);
            }
          }
          for (const k in data[key]['price_list'][0]) {
            seller = k;
          }
          if (data[key]['price_list'].length > 1) {
            seller = seller + ' and more';
            for (const k in data[key]['price_list']) {
              all_brands.push(data[key]['price_list'][k]);
            }
          }
          if (data[key]['OS']) {
            if (!OSList.includes(data[key]['OS'])) {
              OSList.push(data[key]['OS']);
            }
          }
          if (data[key]['BG']) {
            if (!broadbandGenerationList.includes(data[key]['BG'])) {
              broadbandGenerationList.push(data[key]['BG']);
            }
          }

          if (!brandList.includes(data[key]['brand_name'])) {
            brandList.push(data[key]['brand_name']);
          }

          const product = {
            id: key,
            price_list: data[key],
            seller_name: seller,
            url: data[key]['image_url'],
            price_low: data[key]['price_low'],
            price_high: data[key]['price_high'],
            brandname: data[key]['brand_name'],
            ...data[key],
          };
          const { nameX } = (props.location && props.location.state) || {};

          {
            checkLengths('bg') ? (
              <ul className='filters__sublist '>
                <h4 className='filter__title'>Broadband Generation</h4>
                <l1 className='filter__items'>
                  {' '}
                  <input
                    className='checkbox'
                    value='5G'
                    name='Broadband Generation'
                    type='checkbox'
                  />
                  5G
                </l1>
                <l1 className='filter__items'>
                  {' '}
                  <input
                    className='checkbox'
                    value='4G'
                    name='Broadband Generation'
                    type='checkbox'
                  />
                  4G
                </l1>
              </ul>
            ) : (
              console.log('PAss')
            );
          }
          products.push(product);
        }
        //console.log(brandList);
        setOS(OSList);
        setType(typeList);
        setStorage(storageList);
        setBroadbandGeneration(broadbandGenerationList);
        setScreenSizes(screenSizeList);
        setScreenType(screenTypeList);
        setResolutions(resolutionList);
        setLoadedBrands(brandList);
        setheadphoneTypes(headphoneTypeList);
        setLoadedProducts(products);
        setFilteredProducts(products);

        return true;
      })
      .then((vovo) => {
        setIsLoading(false);
      });
  }, []);
  var mainCategory = props.first;
  function checkParentCategories() {
    console.log(props.fetchURL);
    var xsd = props.fetchURL.replace(
      'https://www.priceya.pixelgradient.com',
      '/categories'
    );
    var k = xsd.split('/');

    console.log(k[3]);
    if (k[3] == 'tvs') {
      return allCategoryData['TVs'];
    } else {
      for (var category in allCategoryData) {
        if (allCategoryData[category].includes(k[3])) {
          console.log(category);
          console.log(allCategoryData[category]);
          return allCategoryData[category];
        } else {
          return [];
        }
      }
    }
  }

  const sortProducts = (sortT) => {
    console.log(sortT);
    if (sortT == 'lowtoHigh') {
      setSortType('Price: Low to High');
    } else if (sortT == 'hightoLow') {
      setSortType('Price: High to Low');
    } else if (sortT == 'popularity') {
      setSortType('Popularity');
    } else if (sortT == 'a-z') {
      setSortType('Sort by A-Z');
    }

    if (sortT == 'lowtoHigh') {
      filteredProducts.sort((a, b) => (a.price_low > b.price_low ? 1 : -1));
      if (productCount == 40) {
        setProductCount(30);
      } else {
        setProductCount(40);
      }
    } else if (sortT == 'hightoLow') {
      console.log('High to low');
      filteredProducts.sort((a, b) => (a.price_low < b.price_low ? 1 : -1));
      if (productCount == 40) {
        setProductCount(30);
      } else {
        setProductCount(40);
      }
    }
  };

  const listInnerRef = useRef();
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        console.log('Reached bottom');
      }
    }
  };

  function setProductCountOnScroll() {
    setProductCount(productCount + 30);
  }

  function checkLengths(filterName) {
    if (removedNavFilters.includes(filterName)) {
      return false;
    }
    if (filterName === 'brands') {
      if (loadedBrands.length > 0) {
        return true;
      } else {
        return false;
      }
    } else if (filterName === 'screenTypes') {
      if (screenType.length > 0) {
        console.log('SCREEN TYPES: ' + screenType.length);
        return true;
      } else {
        return false;
      }
    } else if (filterName === 'screenSizes') {
      if (screenSizes.length > 0) {
        return true;
      } else {
        return false;
      }
    } else if (filterName === 'resolution') {
      if (resolutions.length > 0) {
        return true;
      } else {
        return false;
      }
    } else if (filterName === 'os') {
      if (os.length > 0) {
        return true;
      } else {
        return false;
      }
    } else if (filterName === 'bg') {
      if (broadbandGeneration.length > 0) {
        return true;
      } else {
        return false;
      }
    } else if (filterName === 'headphoneTypes') {
      if (headphoneTypes.length > 0) {
        console.log('SCREEN TYPES: ' + headphoneTypes.length);
        return true;
      } else {
        return false;
      }
    } else if (filterName === 'Type') {
      if (type.length > 0) {
        console.log('SCREEN TYPES: ' + headphoneTypes.length);
        return true;
      } else {
        return false;
      }
    } else if (filterName === 'Storage') {
      if (storage.length > 0) {
        console.log('SCREEN TYPES: ' + storage.length);
        return true;
      } else {
        return false;
      }
    }
  }
  if (isLoading) {
    return (
      <section>
        <p>LOADING</p>
      </section>
    );
  } else {
    return (
      <>
        <div className='App'>
          <div class='wrapper'>
            <div className='row'>
              <div className='row'>
                <div className='filters__list col-2 tags__category'>
                  <Link to={'/'}>
                    <a className='tags__text2'>
                      Home /{' '}
                      {
                        props.fetchURL
                          .replace(
                            'https://www.priceya.pixelgradient.com',
                            '/categories'
                          )
                          .split('/')[2]
                      }{' '}
                      /{' '}
                      {
                        props.fetchURL
                          .replace(
                            'https://www.priceya.pixelgradient.com',
                            '/categories'
                          )
                          .split('/')[3]
                      }
                    </a>
                  </Link>
                </div>
              </div>
              <div className='row'>
                <div className='filters__list col-10'>
                  <a className='tags__text tags__heading'>
                    {
                      props.fetchURL
                        .replace(
                          'https://www.priceya.pixelgradient.com',
                          '/categories'
                        )
                        .split('/')[3]
                    }
                  </a>
                </div>
              </div>
              <div className='row'>
                <div className='filters__list section__description'>
                  <a className='tags__text'>
                    Upgrade your computers or tablets with our big range online
                    and instore. Our computers and tablets include all the big
                    brands, which means top technology, brilliant designs, and
                    stunning features. If you’re a gamer, a student, or want to
                    upgrade your home office, our computers and tablets are
                    perfect. Find the best range of laptops in Australia online
                    or in store at The Good Guys. You’ll get a good deal on
                    leading computer brands for home or back to school use,
                    including Microsoft, HP, Lenovo, Dell, and Acer.
                  </a>
                </div>
              </div>
              <div className='row'>
                <div className='filters__list col-2'>
                  <a className='tags__text tags__heading'>{props.second}</a>
                </div>
              </div>
              <div className='row tags__filters--row'>
                <div className='filters__list col-2 tags__category'>
                  <a className='tags__text tags__heading2'>FILTERS</a>
                </div>
                <div className='sorting__col col'>
                  <DropdownButton
                    className='sorting__dropdown'
                    id='dropdown-basic-button'
                    title={sortType}
                  >
                    <Dropdown.Item
                      className='sorting__dropdown--item'
                      onClick={() => sortProducts('a-z')}
                    >
                      Sort by A-Z
                    </Dropdown.Item>
                    <Dropdown.Item
                      className='sorting__dropdown--item'
                      onClick={() => sortProducts('lowtoHigh')}
                    >
                      Price: Low to High
                    </Dropdown.Item>
                    <Dropdown.Item
                      className='sorting__dropdown--item'
                      onClick={() => sortProducts('hightoLow')}
                    >
                      Price: High to Low
                    </Dropdown.Item>
                    <Dropdown.Item
                      className='sorting__dropdown--item'
                      onClick={() => sortProducts('Popularity')}
                    >
                      Popularity
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </div>

            <div className='fixedElement'>
              <div class='sidebar'>
                <div class='sidebar-wrapper'>
                  <ul className='filters__list col-2'>
                    <ul className='filters__sublist'>
                      <h4 className='filter__title'>Categories</h4>
                      {checkParentCategories().map((cate) => {
                        return (
                          <Link to={'/categories/' + mainCategory + '/' + cate}>
                            <l1
                              className='filter__items'
                              onClick={() =>
                                routeChange(
                                  'categories/' + mainCategory + '/' + cate
                                )
                              }
                            >
                              {' '}
                              <a
                                className='category__PC'
                                value='Upto6'
                                name='Price'
                                type='checkbox'
                              />
                              {cate.replaceAll('-', ' ')}
                            </l1>
                          </Link>
                        );
                      })}
                    </ul>

                    {/* {checkParentCategories()} */}
                    <ul className='filters__sublist '>
                      <h4 className='filter__title'>Price</h4>
                      <l1 className='filter__items'>
                        {' '}
                        <input
                          className='checkbox'
                          value='Upto6'
                          name='Price'
                          type='checkbox'
                        />
                        Up to $600
                      </l1>
                      <l1 className='filter__items'>
                        {' '}
                        <input
                          className='checkbox'
                          value='6to12'
                          name='Price'
                          type='checkbox'
                        />
                        $600-$1200
                      </l1>
                      <l1 className='filter__items'>
                        {' '}
                        <input
                          className='checkbox'
                          value='morethan12'
                          name='Price'
                          type='checkbox'
                        />
                        More than $1200
                      </l1>

                      <div>
                        <Slider
                          value={value}
                          className='price__slider'
                          onChange={rangeSelector}
                          valueLabelDisplay='auto'
                        />
                        <div className='row'>
                          <div className='col'>
                            <input
                              className='min__max--input'
                              placeholder={value[0] * 100}
                              onChange
                            ></input>
                          </div>
                          <div className='col'>
                            <input
                              className='min__max--input'
                              placeholder={value[1] * 100}
                              onChange
                            ></input>
                          </div>
                        </div>
                      </div>

                      {/* <Button onClick={props.incrementCount}>View More</Button>  */}
                    </ul>
                    {/* {console.log(loadedProducts)} */}
                    {checkLengths('bg') ? (
                      <ul className='filters__sublist '>
                        <h4 className='filter__title'>Broadband Generation</h4>
                        <l1 className='filter__items'>
                          {' '}
                          <input
                            className='checkbox'
                            value='5G'
                            name='Broadband Generation'
                            type='checkbox'
                          />
                          5G
                        </l1>
                        <l1 className='filter__items'>
                          {' '}
                          <input
                            className='checkbox'
                            value='4G'
                            name='Broadband Generation'
                            type='checkbox'
                          />
                          4G
                        </l1>
                      </ul>
                    ) : (
                      console.log('PAss')
                    )}

                    {/* "saeed" */}

                    {checkLengths('brands') ? (
                      <FilterSubList
                        heading='Brand'
                        filterList={loadedBrands}
                        count={brandCount}
                        incrementCount={incrementCountBrand}
                      />
                    ) : (
                      console.log('PAss')
                    )}
                    {checkLengths('screenTypes') ? (
                      <FilterSubList
                        heading='Screen Type'
                        filterList={screenType}
                        count={screenTypeCount}
                        incrementCount={incrementCountBrand}
                      />
                    ) : (
                      console.log('PAss')
                    )}
                    {checkLengths('screenSizes') ? (
                      <FilterSubList
                        heading='Screen Size'
                        filterList={screenSizes}
                        count={screenSizesCount}
                        incrementCount={incrementCountBrand}
                      />
                    ) : (
                      console.log('PAss')
                    )}
                    {checkLengths('resolution') ? (
                      <FilterSubList
                        heading='Resolution'
                        filterList={resolutions}
                        count={screenTypeCount}
                        incrementCount={incrementCountBrand}
                      />
                    ) : (
                      console.log('PAss')
                    )}
                    {checkLengths('os') ? (
                      <FilterSubList
                        heading='Operating System'
                        filterList={os}
                        count={resolutionsCount}
                        incrementCount={incrementCountBrand}
                      />
                    ) : (
                      console.log('PAss')
                    )}
                    {checkLengths('headphoneTypes') ? (
                      <FilterSubList
                        heading='Headphone Type'
                        filterList={headphoneTypes}
                        count={screenTypeCount}
                        incrementCount={incrementCountBrand}
                      />
                    ) : (
                      console.log('PAss')
                    )}
                    {checkLengths('Type') ? (
                      <FilterSubList
                        heading='Type'
                        filterList={type}
                        count={screenTypeCount}
                        incrementCount={incrementCountBrand}
                      />
                    ) : (
                      console.log('PAss')
                    )}
                    {checkLengths('Storage') ? (
                      <FilterSubList
                        heading='Storage'
                        filterList={storage}
                        count={screenTypeCount}
                        incrementCount={incrementCountBrand}
                      />
                    ) : (
                      console.log('PAss')
                    )}
                    {console.log('HANDLE CHANGE 2 after this')}

                    {console.log(filteredProducts)}
                  </ul>
                </div>
              </div>
              <div class='main-panel'>
                {/* NAV BAR */}
                <div class=''>
                  <div className=''>
                    <div className='product__category-container justify-content-left row'>
                      {filteredProducts
                        .slice(0, productCount)
                        .map((product) => {
                          return (
                            <ProductCard
                              productURL={product.url}
                              productTitle={product.id}
                              seller_name={product.seller_name}
                              productPrice1={product.price_low}
                              productPrice2={product.price_high}
                              productObj={product}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom_container'>
          {/* <Filters loadedBrands={{ title: 'Brand', list: loadedBrands }} /> */}

          <Filters
            list={[
              loadedBrands,
              screenType,
              screenSizes,
              resolutions,
              os,
              headphoneTypes,
              type,
              storage,
            ]}
            heading={[
              'Brand',
              'screenTypes',
              'screenSizes',
              'resolutions',
              'os',
              'headphoneTypes',
              'type',
              'storage',
            ]}
          />
          <button className='btn-shotby'>Shot By</button>
          <button
            className='btn-filter btn-upmove'
            onClick={() => window.scrollTo(0, 0)}
          >
            <i class='fa fa-chevron-up'></i>
          </button>
        </div>
      </>
    );
  }
}

export default ProductCategory2;
