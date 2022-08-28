import Car from '../types/car';
import Model from '../types/model';
import Brand from '../types/brand';
import CarJoined from '../types/car-joined';

type CarsCollectionProps = {
  cars: Car[],
  brands: Brand[],
  models: Model[],
};

class CarsCollection {
<<<<<<< HEAD
  constructor(private props: CarsCollectionProps) { }

  private joinCar = ({ modelId, ...car }: Car) => {
    const { brands, models } = this.props;

=======
  private props: CarsCollectionProps;

  constructor(props: CarsCollectionProps) {
    this.props = props;
  }

  private joinCar = ({ modelId, ...car }: Car) => {
    const { brands, models } = this.props;
>>>>>>> 39770f9105ecff6a19b29694c1c91a943be36349
    const carModel = models.find((model) => model.id === modelId);
    const carBrand = brands.find((brand) => brand.id === carModel?.brandId);

    return {
      ...car,
<<<<<<< HEAD
      brand: (carBrand && carBrand?.title) ?? 'unknown',
      model: (carModel && carModel?.title) ?? 'unknown',
=======
      brand: (carBrand && carBrand.title) ?? 'unknown',
      model: (carModel && carModel.title) ?? 'unknown',
>>>>>>> 39770f9105ecff6a19b29694c1c91a943be36349
    };
  };

  public get all(): CarJoined[] {
    return this.props.cars.map(this.joinCar);
  }
<<<<<<< HEAD

  public getByBrandId = (brandId: string): CarJoined[] => {
    const { cars, models } = this.props;

    const brandModelsIds = models
      .filter((model) => model.brandId === brandId)
      .map((model) => model.id);

    const brandCars = cars
      .filter((car) => brandModelsIds.includes(car.modelId))
      .map(this.joinCar);

    return brandCars;
  };

  public deleteCarById = (carId: string): void => {
    this.props.cars = this.props.cars.filter((car) => car.id !== carId);
  };
=======
>>>>>>> 39770f9105ecff6a19b29694c1c91a943be36349
}

export default CarsCollection;
