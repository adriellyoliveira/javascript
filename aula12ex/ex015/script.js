function verificar() {
    let nome = document.getElementById('txtnome')
    let res = document.getElementById('res')
    let body = document.body

    res.innerHTML = ''

    let img = document.createElement('img')

    let integrante = nome.value.trim().toLowerCase()

    let enhypen = document.getElementById('enhypen')
    let txt = document.getElementById('txt')
    let cortis = document.getElementById('cortis')

    

    if (integrante == '') {
        res.innerHTML = 'Por favor, digite o nome do integrante!'
    } else if (!enhypen.checked && !txt.checked && !cortis.checked) {
        res.innerHTML = 'Por favor, selecione um grupo!'
    } else {
        if (enhypen.checked) {
            if (integrante == 'jungwon' || integrante == 'yang jungwon') {
                img.setAttribute('src', 'img/en-jungwon.png')
                img.setAttribute('alt', 'Jungwon, integrante do ENHYPEN')

                body.style.backgroundImage = "url('img/bg-enhypen.jpeg')"

                res.innerHTML = 'Integrante encontrado: JUNGWON!'
                res.appendChild(img)
            } else if (integrante == 'heeseung' || integrante == 'lee heeseung') {
                img.setAttribute('src', 'img/en-heeseung.png')
                img.setAttribute('alt', 'Heeseung, integrante do ENHYPEN')

                body.style.backgroundImage = "url('img/bg-enhypen.jpeg')"

                res.innerHTML = 'Integrante encontrado: HEESEUNG!'
                res.appendChild(img)
            } else if (integrante == 'jay' || integrante == 'jay park' || integrante == 'park jong seong') {
                img.setAttribute('src', 'img/en-jay.png')
                img.setAttribute('alt', 'Jay, integrante do ENHYPEN')
                
                body.style.backgroundImage = "url('img/bg-enhypen.jpeg')"

                res.innerHTML = 'Integrante encontrado: JAY!'
                res.appendChild(img)
            } else if (integrante == 'jake' || integrante == 'sim jaeyun') {
                img.setAttribute('src', 'img/en-jake.png')
                img.setAttribute('alt', 'Jake, integrante do ENHYPEN')

                body.style.backgroundImage = "url('img/bg-enhypen.jpeg')"

                res.innerHTML = 'Integrante encontrado: JAKE!'
                res.appendChild(img)
            } else if (integrante == 'sunghoon' || integrante == 'park sunghoon') {
                img.setAttribute('src', 'img/en-sunghoon.png')
                img.setAttribute('alt', 'Sunghoon, integrante do ENHYPEN')

                body.style.backgroundImage = "url('img/bg-enhypen.jpeg')"

                res.innerHTML = 'Integrante encontrado: SUNGHOON!'
                res.appendChild(img)
            } else if (integrante == 'sunoo' || integrante == 'kim sunoo') {
                img.setAttribute('src', 'img/en-sunoo.png')
                img.setAttribute('alt', 'Sunoo, integrante do ENHYPEN')

                body.style.backgroundImage = "url('img/bg-enhypen.jpeg')"

                res.innerHTML = 'Integrante encontrado: SUNOO!'
                res.appendChild(img)
            } else if (integrante == 'niki' || integrante == 'nishimura riki' || integrante == 'ni-ki') {
                img.setAttribute('src', 'img/en-niki.png')
                img.setAttribute('alt', 'NI-KI, integrante do ENHYPEN')

                body.style.backgroundImage = "url('img/bg-enhypen.jpeg')"

                res.innerHTML = 'Integrante encontrado: NI-KI!'
                res.appendChild(img)
            }
            
            else {
                res.innerHTML = 'Integrante não encontrado no ENHYPEN!'
            }
        }


        if (txt.checked) {
            if (integrante == 'soobin' || integrante == 'choi soobin') {
                img.setAttribute('src', 'img/txt-soobin.png')
                img.setAttribute('alt', 'Soobin, integrante do TXT')

                body.style.backgroundImage = "url('img/bg-txt.jpeg')"

                res.innerHTML = 'Integrante encontrado: SOOBIN!'
                res.appendChild(img)
            } else if (integrante == 'yeonjun' || integrante == 'choi yeonjun') {
                img.setAttribute('src', 'img/txt-yeonjun.png')
                img.setAttribute('alt', 'Yeonjun, integrante do TXT')

                body.style.backgroundImage = "url('img/bg-txt.jpeg')"

                res.innerHTML = 'Integrante encontrado: YEONJUN!'
                res.appendChild(img)
            } else if (integrante == 'beomgyu' || integrante == 'choi beomgyu') {
                img.setAttribute('src', 'img/txt-beomgyu.png')
                img.setAttribute('alt', 'Beomgyu, integrante do TXT')

                body.style.backgroundImage = "url('img/bg-txt.jpeg')"

                res.innerHTML = 'Integrante encontrado: BEOMGYU!'
                res.appendChild(img)
            } else if (integrante == 'taehyun' || integrante == 'kang taehyun') {
                img.setAttribute('src', 'img/txt-taehyun.png')
                img.setAttribute('alt', 'Taehyun, integrante do TXT')

                body.style.backgroundImage = "url('img/bg-txt.jpeg')"

                res.innerHTML = 'Integrante encontrado: TAEHYUN!'
                res.appendChild(img)
            } else if (integrante == 'hueningkai' || integrante == 'kai kamal huening' || integrante == 'kai') {
                img.setAttribute('src', 'img/txt-hueningkai.png')
                img.setAttribute('alt', 'Hueningkai, integrante do TXT')

                body.style.backgroundImage = "url('img/bg-txt.jpeg')"

                res.innerHTML = 'Integrante encontrado: HUENINGKAI!'
                res.appendChild(img)
            }
            
            else {
                res.innerHTML = 'Integrante não encontrado no TOMORROW X TOGETHER!'
            }
        }

        if (cortis.checked) {
            if (integrante == 'martin') {
                img.setAttribute('src', 'img/ct-martin.png')
                img.setAttribute('alt', 'Martin, integrante do CORTIS')

                body.style.backgroundImage = "url('img/bg-cortis.jpeg')"

                res.innerHTML = 'Integrante encontrado: MARTIN!'
                res.appendChild(img)
            } else if (integrante == 'james') {
                img.setAttribute('src', 'img/ct-james.png')
                img.setAttribute('alt', 'James, integrante do CORTIS')

                body.style.backgroundImage = "url('img/bg-cortis.jpeg')"

                res.innerHTML = 'Integrante encontrado: JAMES!'
                res.appendChild(img)
            } else if (integrante == 'juhoon') {
                img.setAttribute('src', 'img/ct-juhoon.png')
                img.setAttribute('alt', 'Juhoon, integrante do CORTIS')

                body.style.backgroundImage = "url('img/bg-cortis.jpeg')"

                res.innerHTML = 'Integrante encontrado: JUHOON!'
                res.appendChild(img)
            } else if (integrante == 'seonghyeon') {
                img.setAttribute('src', 'img/ct-seonghyeon.png')
                img.setAttribute('alt', 'Seonghyeon, integrante do CORTIS')

                body.style.backgroundImage = "url('img/bg-cortis.jpeg')"

                res.innerHTML = 'Integrante encontrado: SEONGHYEON!'
                res.appendChild(img)
            } else if (integrante == 'keonho') {
                img.setAttribute('src', 'img/ct-keonho.png')
                img.setAttribute('alt', 'Keonho, integrante do CORTIS')

                body.style.backgroundImage = "url('img/bg-cortis.jpeg')"

                res.innerHTML = 'Integrante encontrado: KEONHO!'
                res.appendChild(img)
            }
            
            else {
                res.innerHTML = 'Integrante não encontrado no CORTIS'
            }
        }
    }
}

let campoNome = document.getElementById('txtnome')

campoNome.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verificar()
    }
})