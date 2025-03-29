import { Controller } from "@hotwired/stimulus"
import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from '../components/Counter'


export default class extends Controller {
  connect() {
    console.log("HomeController connected")

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Counter />
      </React.StrictMode>
    )
  }
}
