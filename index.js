const root = document.getElementById('root')

const Header = () => {
	const headerCont = document.createElement('div')
	headerCont.className = 'header'

	const headerTitle = document.createElement('h3')
	headerTitle.textContent = 'Dinosite'

	const headerLink = document.createElement('a')
	headerLink.textContent = 'link to something'
	headerLink.href = '/'

	headerCont.append(headerTitle, headerLink)
	return headerCont
}

const Hero = () => {
	const heroCont = document.createElement('div')
	heroCont.className = 'hero'

	const heroTitle = document.createElement('h1')
	heroTitle.textContent = 'Check it out'

	const heroContent = document.createElement('p')
	heroContent.textContent = 'Tochisaurus Sinornithoides Nankangia Chuanjiesaurus Elosaurus Anserimimus Machairasaurus Bannykus Asylosaurus Amphicoelias Elmisaurus Platypelta Yurgovuchia Gualicho Chaoyangsaurus Paralititan Bayannurosaurus Gondwanatitan Pleuropeltus Troodon Belodon Dyslocosaurus Convolosaurus Convolosaurus Gobiceratops Ratchasimasaurus Mamenchisaurus Panguraptor Epanterias Itemirus.'
	const heroIcons = document.createElement('div')
	heroIcons.className = 'hero-icons'

	const icon1 = document.createElement('img')
	icon1.src = 'https://cdn-icons-png.flaticon.com/512/2604/2604845.png'
	icon1.alt = 'icon1'

	const icon2 = document.createElement('img')
	icon2.src = 'https://cdn-icons-png.flaticon.com/512/2604/2604821.png'
	icon2.alt = 'icon2'
	heroIcons.append(icon1, icon2)

	const icon3 = document.createElement('img')
	icon3.src = 'https://cdn-icons-png.flaticon.com/512/2604/2604737.png'
	icon3.alt = 'icon3'

	heroIcons.append(icon1, icon2, icon3)

	heroCont.append(heroTitle, heroContent, heroIcons)
	
	return heroCont
}

function submitForm(event) {
	event.preventDefault()
	const name = document.getElementById('name').value
	const age = document.getElementById('age').value
	const subject = `Hello from ${name}, ${age} years old`

	const dinosaur = document.getElementById('dinosaur').value
	const question = document.getElementById('question').value
	const body = `My favorite dinosaur is ${dinosaur}. I would like to know: ${question}`
	location.href=
		`mailto:benjamin.m.baron@gmail.com
		?subject=${subject}&body=${body}`
}

const Form = () => {
	const form = document.createElement('form')
	form.className = 'form'
	form.onsubmit = e => submitForm(e)

	const formTitle = document.createElement('h2')
	formTitle.textContent = 'Contact Us'

	const nameAndAge = document.createElement('div')
	nameAndAge.className = 'input-name-age'

	const name = document.createElement('input')
	name.type = 'text'
	name.className = 'input-name'
	name.id = 'name'
	name.placeholder = 'your name'

	const age = document.createElement('input')
	age.type = 'number'
	age.className = 'input-age'
	age.id = 'age'
	age.placeholder = 'your age'

	nameAndAge.append(name, age)

	const dinosaur = document.createElement('input')
	dinosaur.type = 'text'
	dinosaur.className = 'input-dinosaur'
	dinosaur.id = 'dinosaur'
	dinosaur.placeholder = 'your favorite dinosaur'
	dinosaur.required = true

	const question = document.createElement('textarea')
	question.className = 'textarea'
	question.id = 'question'
	question.placeholder = 'your question about dinosaurs'

	const formSubmit = document.createElement('button')
	formSubmit.className = 'form-submit'
	formSubmit.textContent = 'submit'
	formSubmit.onclick = 'submit'

	form.append(formTitle, nameAndAge, dinosaur, question, formSubmit)
	return form
}

const Footer = () => {
	const footerCont = document.createElement('div')
	footerCont.className = 'footer'

	const footerTitle = document.createElement('h3')
	let date = new Date()
	footerTitle.textContent = `Copyright Dinosite ${date.getFullYear()}`

	const footerLink = document.createElement('a')
	footerLink.textContent = 'link to something else'
	footerLink.href = '/'

	footerCont.append(footerTitle, footerLink)
	return footerCont
}


const components = [Header(), Hero(), Form(), Footer()]

function displayComponents() {
	components.forEach((item) => {
		root.appendChild(item)
	})
}

displayComponents()