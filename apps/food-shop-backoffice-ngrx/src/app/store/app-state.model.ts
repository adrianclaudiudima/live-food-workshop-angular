import { DomainEntity, Order, PaginationConfig } from '@food-shop-architecture-workshop/core/model';
import { ActionReducerMap } from '@ngrx/store';
import { statsReducer } from './stats/stats.reducer';
import { Sort } from '@angular/material/sort';
import { ordersPaginatedReducer } from './orders/orders-paginated.reducer';

export interface ApplicationState {
  stats: OrdersStats;
  ordersPaginated: OrdersPaginatedState;
}


export interface OrdersPaginatedState {
  orders: DomainEntity<Order[]>;
  pagination: PaginationConfig;
  sort: Sort;
}


export interface OrdersStats extends DomainEntity<Order[]> {

}

export const appRootReducer: ActionReducerMap<ApplicationState> = {
  stats: statsReducer,
  ordersPaginated: ordersPaginatedReducer
};
