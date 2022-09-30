
export const Footer = () => {
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