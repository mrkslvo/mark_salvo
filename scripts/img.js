const picture = (pic) => {
    let div = document.createElement('div')
    div.className = "img"
    div.innerHTML = `<img class="pic" src="${pic}">`

    return div
}

export { picture }