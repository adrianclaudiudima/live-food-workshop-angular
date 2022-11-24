import { createReducer, on } from '@ngrx/store';
import { ShopState } from './shop-state.model';
import { ShopActions } from './shop.actions';

const shopInitialState: ShopState = {
  domain: {
    categories: [],
    products: []
  },
  requestStatus: {
    status: 'NEW'
  },
  filter: undefined
};


export const shopReducer = createReducer<ShopState>(shopInitialState,
  on(ShopActions.loadProductsAndCategories, (state) => ({
    ...state, domain: { categories: [], products: [] },
    requestStatus: { status: 'PENDING' }
  })),
  on(ShopActions.loadProductsAndCategoriesSuccess, (state, { products, categories }) => ({
    ...state, domain: { categories, products },
    requestStatus: { status: 'COMPLETED' }
  })),
  on(ShopActions.loadProductsAndCategoriesFailed, (state, { errorMessage, errorCode }) => ({
    ...state, domain: { categories: [], products: [] },
    requestStatus: { status: 'ERROR', error: { message: errorMessage, code: errorCode } }
  })),
  on(ShopActions.filterProducts, (state, { productType }) => {
    return {
      ...state,
      filter: productType
    };

  })
);
