import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import CarsList from './components/cars-list/cars-list'
import FormAddCar from './components/form-add-car/form-add-car'
import Button from './components/button/button'
import EditCarForm from './components/edit-car-form/edit-car-form'

import { carsData } from './data'

import styles from './app.module.css'

export default function App() {
  const [cars, setCars] = useState(carsData)
  const [addCarModal, setAddCarModal] = useState(false)
  const [removeMode, setRemoveMode] = useState(false)
  const [selectedCar, setSelectedCar] = useState(null)

  const handleToggleAddCarModal = () => {
    setAddCarModal(prev => !prev)

    setRemoveMode(false)
    setSelectedCar(null)
  }

  // add new car to the list logic
  const addNewCar = (model, price, image) => {
    const newCar = {
      id: uuidv4(),
      model,
      price,
      image
    }

    console.log(newCar)

    // Add new car to the list
    setCars(prev => [...prev, newCar])

    setAddCarModal(false)
  }

  // toggle remove mode
  const handleToggleRemoveMode = () => {
    setRemoveMode(prev => !prev)

    setAddCarModal(false)
    // setSelectedCar(null)
  }

  // delete car from the list
  const deleteCar = id => {
    const newCars = cars.filter(car => car.id !== id)

    setCars(newCars)
    setSelectedCar(null)
  }

  // car select
  const handleCarSelect = car => {
    if (car?.id === selectedCar?.id) return setSelectedCar(null)

    setAddCarModal(false)
    setSelectedCar(car)
    setRemoveMode(false)
  }

  // edit car logic
  const handleEditCar = editCar => {
    const newCars = cars.map(car => {
      if (car.id === editCar.id) {
        return editCar
      }

      return car
    })

    setCars(newCars)
    setSelectedCar(null)
  }

  return (
    <div className={styles.app}>
      <CarsList
        cars={cars}
        removeMode={removeMode}
        deleteCar={deleteCar}
        onSelect={handleCarSelect}
        selectedCar={selectedCar}
      />
      <div className={styles['btns-wrapper']}>
        <Button onClick={handleToggleAddCarModal}>
          {addCarModal ? 'Close' : 'Add new car'}
        </Button>
        <Button onClick={handleToggleRemoveMode}>
          {cars.length === 0
            ? 'No cars to remove'
            : removeMode
            ? 'Exit remove mode'
            : 'Remove mode'}
        </Button>
      </div>
      {addCarModal && <FormAddCar onSubmit={addNewCar} />}

      {selectedCar && (
        <EditCarForm
          selectedCar={selectedCar}
          onCloseClick={handleCarSelect}
          onEdit={handleEditCar}
        />
      )}
    </div>
  )
}
