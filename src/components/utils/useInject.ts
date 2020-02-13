import { useStore } from './StoreProvider';
import { StoreModel } from '../../stores/store';

export type MapStore<T> = (store: StoreModel) => T;

const useInject = <T>(mapStore: MapStore<T>) => {
  const store = useStore();
  return mapStore(store);
};

export default useInject;
