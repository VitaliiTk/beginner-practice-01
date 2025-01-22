import { FaRegTrashAlt } from 'react-icons/fa'

import styles from './cars-list-item.module.css'

export default function CarsListItem({
  car,
  removeMode,
  deleteCar,
  onSelect,
  selectedCar
}) {
  const liStyle =
    selectedCar?.id === car.id
      ? `${styles.item} ${styles.selected}`
      : styles.item

  const handleSelectCar = e => {
    onSelect(car)
  }

  const handleDeleteCar = e => {
    e.stopPropagation()
    deleteCar(car.id)
  }

  return (
    <li className={liStyle} onClick={handleSelectCar}>
      <h3 className={styles.model}>{car.model}</h3>
      <p className={styles.price}>Price: {car.price} $</p>
      <img className={styles.image} src={car.image} alt={car.model} />

      {removeMode && (
        <button onClick={handleDeleteCar} className={styles.btn}>
          <FaRegTrashAlt />
        </button>
      )}
    </li>
  )
}
