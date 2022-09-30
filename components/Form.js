
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

export const Form = () => {
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