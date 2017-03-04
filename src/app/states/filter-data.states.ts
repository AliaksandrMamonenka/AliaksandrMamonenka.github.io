import { FilterData } from './filter-data.interface';

export const initialFilterDataState: FilterData = {
  captcha: "Alex1",
  cityCounts: 50,
  tempType: "1",
  visibleElements: {
    direction: true,
    pressure: true,
    speed: true
  }
};
