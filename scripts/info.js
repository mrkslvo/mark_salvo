

const profile = (head, para1, btn1) => {
    let div = document.createElement('div')
    div.className = 'right'
    div.innerHTML = `<h1>${head}</h1>
                    <p>${para1}</p>
                    <button id="btn">${btn1}</button>
    `

    return div
}

export { profile }