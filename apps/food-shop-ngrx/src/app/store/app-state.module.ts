import { ActionReducerMap } from '@ngrx/store';
import { ShopState } from '../modules/shop/store/shop-state.model';
import { shopReducer } from '../modules/shop/store/shop.reducer';

export interface ApplicationState {
  shopState: ShopState;
  cartState: any;
  favoriteState: any;
}

export const foodShopActionReducerMap: ActionReducerMap<ApplicationState> = {
  shopState: shopReducer,
  cartState: (state) => {
    return { ...state };
  },
  favoriteState: (state) => {
    return { ...state };
  }
};

