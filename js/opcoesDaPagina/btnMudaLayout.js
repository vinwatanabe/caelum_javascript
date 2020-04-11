const btn = document.querySelector('#btnMudaLayout')

function mudaTexto() {
  if(btn.textContent.trim() === 'Blocos') {
    btn.textContent = 'Linhas'
  } else {
    btn.textContent = 'Blocos'
  }
}

const mural = document.querySelector('.mural')

function mudaLayout() {
  mural.classList.toggle('mural--linha')
}

btn.addEventListener('click', mudaTexto)
btn.addEventListener('click', mudaLayout)

//remove class .no-js de elemento que estão prontos
btn.classList.remove('no-js')