
export const Hero = () => {
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