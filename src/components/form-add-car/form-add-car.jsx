import { useState } from 'react'

import styles from './form-add-car.module.css'

export default function FormAddCar({ onSubmit }) {
  const [model, setModel] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (!model || !price || !image) {
      alert('Please fill all fields')
      return
    }

    onSubmit(model, price, image)

    setModel('')
    setPrice('')
    setImage('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add new car</h2>
      <input
        value={model}
        onChange={e => setModel(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="car name"
      />
      <input
        value={price}
        onChange={e => setPrice(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="price"
      />
      <input
        value={image}
        onChange={e => setImage(e.target.value)}
        className={styles.input}
        type="url"
        placeholder="image url"
      />

      <button className={styles.btn} type="submit">
        Add car
      </button>
    </form>
  )
}
