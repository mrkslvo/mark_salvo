import { cards } from "./card.js"
import { picture } from "./img.js"
import { profile } from "./info.js"


const obj1 = {
    header1 : "This is my profile",
    para1   : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis veniam excepturi ipsa. Quam placeat ab quisquam alias debitis veniam voluptates exercitationem minus porro recusandae ipsum quae architecto, consequuntur illum ratione!",
    button1 : "PROFILE",
    img     : "images/prof.jpg"
}

const obj2 = {
    header : "PROJECT COMPLETED",
    para    : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis ipsam vitae reiciendis? Sequi totam nesciunt, neque mollitia deleniti iusto.",
    btn     : "Click Me",
    cardss  : "images/card.jpg"
}

let sectionOne = document.getElementById('sectionOne')
let sectionTwo = document.getElementById('sectionTwo')

const { header1, para1, button1, img } = obj1
const { header, para, btn, cardss } = obj2


sectionOne.append(profile(header1, para1, button1))
sectionOne.append(picture(img))

sectionTwo.append(cards(header, cardss, para, btn))