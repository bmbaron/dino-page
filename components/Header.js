
export const Header = () => {
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