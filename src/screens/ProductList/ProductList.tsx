import React from 'react';
import { ProductCard, Pagination } from '../../components';
import { PRODUCT_LIST } from '../../AppConstants';
import { usePaginator } from '../../hooks/usePaginator';
import { connect } from '../../store';
import { ROUTES } from '../../AppConfig';
import './ProductList.scss';
import { fakestoreUrlReplaceFix } from '../../utilities';

interface IProductListProps {
  history: any;
  productList: any;
  match: any;
}

export const ProductList = connect()(({ history, productList, match }: IProductListProps) => {
  productList = productList || [];
  const newProductList = [...productList, ...productList, ...productList, ...productList];

  const { totalPages, currentRecords, setCurrentPage } = usePaginator(newProductList, 5);

  return (
    <>
      <div className='product-list-container'>
        <div className='title text-center'>
          {match?.params?.category || PRODUCT_LIST.SCREEN_TITLE}
        </div>

        <div className='list'>
          {currentRecords.map(({ title, image, price, id }: any, index: number) => (
            <div
              key={`${index}-${title}`}
              className='list-item item-center'
              onClick={() => history.push(ROUTES.PRODUCT_DETAILS(id))}
            >
              <ProductCard image={fakestoreUrlReplaceFix(image)} name={title} price={price} />
            </div>
          ))}
        </div>
      </div>

      <div className='pagination-container'>
        <Pagination
          totalPages={totalPages + 1}
          onPageSelected={(page: any) => setCurrentPage(page)}
        />
      </div>
    </>
  );
});
