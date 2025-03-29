import { Controller } from "@hotwired/stimulus"
import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from '../components/Counter'


export default class extends Controller {
  connect() {
    console.log("HomeController connected")
    
    this.applyGlowEffect()

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Counter />
      </React.StrictMode>
    )
  }

  applyGlowEffect() {
    document.addEventListener("DOMContentLoaded", () => {
      const captures = document.querySelectorAll(".glow-capture")

      captures.forEach((capture) => {
        const overlay = capture.querySelector(".glow-overlay")
    
        capture.addEventListener("mousemove", (event) => {
          const x = event.pageX - capture.offsetLeft
          const y = event.pageY - capture.offsetTop
    
          overlay.style.setProperty("--glow-x", `${x}px`)
          overlay.style.setProperty("--glow-y", `${y}px`)
          overlay.style.setProperty("--glow-opacity", "1")
        })
    
        capture.addEventListener("mouseleave", () => {
          overlay.style.setProperty("--glow-opacity", "0")
        })
      })
    })
  }
}
