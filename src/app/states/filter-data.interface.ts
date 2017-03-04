export interface FilterData {
  captcha: string;
  cityCounts: number;
  tempType: string;
  visibleElements: {
    direction: boolean;
    pressure: boolean;
    speed: boolean;
  };
}