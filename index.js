import { Header } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { Form } from './components/Form.js'
import { Footer } from './components/Footer.js'

const root = document.getElementById('root')

function displayComponents() {
	root.append(Header(), Hero(), Form(), Footer())
}

displayComponents()