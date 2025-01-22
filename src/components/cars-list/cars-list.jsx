import CarsListItem from '../cars-list-item/cars-list-item'

import styles from './cars-list.module.css'

export default function CarsList({
  cars,
  removeMode,
  deleteCar,
  onSelect,
  selectedCar
}) {
  const carslist = cars.map(car => (
    <CarsListItem
      key={car.id}
      car={car}
      removeMode={removeMode}
      deleteCar={deleteCar}
      onSelect={onSelect}
      selectedCar={selectedCar}
    />
  ))

  return (
    <ul className={styles['car-list']}>
      <h2 className={styles.title}>Cars List</h2>
      {cars.length === 0 ? (
        <p className={styles['empty-warning']}>Cars list is empty now...</p>
      ) : (
        carslist
      )}
    </ul>
  )
}
