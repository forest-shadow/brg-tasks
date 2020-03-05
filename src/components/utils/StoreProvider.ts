import { useContext, createContext } from 'react';

import { StoreModel } from '../../stores/store';
import { initialStore } from '../../stores/createStore';

export const StoreContext = createContext<StoreModel>(initialStore);
const StoreProvider = StoreContext.Provider;

export const useStore = () => useContext(StoreContext);
export default StoreProvider;
