import { useState } from 'react'
import styles from './edit-car-form.module.css'

export default function EditCarForm({ selectedCar, onCloseClick, onEdit }) {
  const [model, setModel] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const handleEditCar = e => {
    e.preventDefault()

    const carEdit = {
      ...selectedCar,
      model: model || selectedCar.model,
      price: price || selectedCar.price,
      image: image || selectedCar.image
    }

    onEdit(carEdit)
  }

  const handleCloseEditForm = e => {
    e.preventDefault()
    onCloseClick(null)
  }

  return (
    <form className={styles.form} onSubmit={handleEditCar}>
      <h2>{selectedCar.model}</h2>
      <input
        value={model}
        className={styles.input}
        type="text"
        placeholder={selectedCar.model}
        onChange={e => setModel(e.target.value)}
      />
      <input
        value={price}
        onChange={e => setPrice(e.target.value)}
        className={styles.input}
        type="text"
        placeholder={selectedCar.price}
      />
      <input
        value={image}
        onChange={e => setImage(e.target.value)}
        className={styles.input}
        type="url"
        placeholder={selectedCar.image}
      />
      <button className={styles.btn} type="submit">
        Edit car
      </button>
      <button
        onClick={handleCloseEditForm}
        className={styles.btn + ' ' + styles.close}
      >
        Close
      </button>
    </form>
  )
}
