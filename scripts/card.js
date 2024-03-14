

const cards = (head1,images,para, btn) => {
    let div = document.createElement('div')
    div.className = 'cards'
    div.innerHTML = `<h1>${head1}</h1>
                    <div class="boxes">
                        <div class="box">
                            <img src="${images}" >
                            <p>${para}</p>
                            <button>${btn}</button>
                        </div>

                        <div class="box">
                            <img src="${images}" >
                            <p>${para}</p>
                            <button>${btn}</button>
                        </div>

                        <div class="box">
                            <img src="${images}" >
                            <p>${para}</p>
                            <button>${btn}</button>
                        </div>

                    </div>`

    return div
}

export { cards }