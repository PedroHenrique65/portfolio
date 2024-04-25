// virar as páginas ao clicar no botão próximo ou anterior

const pageTurnBtn = document.querySelectorAll('.prox-anterior-btn')

pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute('data-pages')
    const pageTurn = document.getElementById(pageTurnId)

    if (pageTurn.classList.contains('turn')) {
      pageTurn.classList.remove('turn')
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index
      }, 500)
    } else {
      pageTurn.classList.add('turn')
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index
      }, 500)
    }
  }
})

//botão entre em contato comigo quando clicar

const pages = document.querySelectorAll('.pag-livro.pag-direita')
const contactMeBtn = document.querySelector('.btn.contate-me')

contactMeBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add('turn')

      setTimeout(() => {
        page.style.zIndex = 20 + index
      }, 500)
    }, (index + 1) * 200 + 100)
  })
}

// criar função de índice reverso

let totalPages = pages.length
let pageNumber = 0

function reverseIndex() {
  pageNumber--

  if (pageNumber < 0) {
    pageNumber = totalPages - 1
  }
}

// botão de perfil atrás ao clicar
const backProfileBtn = document.querySelector('.back-profile')
backProfileBtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex()

      pages[pageNumber].classList.remove('turn')

      setTimeout(() => {
        reverseIndex()
        pages[pageNumber].style.zIndex = 10 + index
      }, 500)
    }, (index + 1) * 200 + 100)
  })
}

//animação de abertura
const coverRight = document.querySelector('.cover.cover-right')
const pageLeft = document.querySelector('.pag-livro.pag-esquerda')

//animação de abertura (animação da capa direita)

setTimeout(() => {
  coverRight.classList.add('turn')
}, 2100)

setTimeout(() => {
  coverRight.style.zIndex = -1
}, 2800)

//animação de abertura (capa esquerda ou animação da página de perfil)

setTimeout(() => {
  pageLeft.style.zIndex = 20
}, 3200)

//animação de abertura (animação de todas as páginas à direita)

pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex()

    pages[pageNumber].classList.remove('turn')

    setTimeout(() => {
      reverseIndex()
      pages[pageNumber].style.zIndex = 10 + index
    }, 500)
  }, (index + 1) * 200 + 2100)
})
