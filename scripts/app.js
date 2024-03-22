import { cards } from "./card.js"
import { picture } from "./img.js"
import { profile } from "./info.js"


const obj1 = {
    header1 : "This is my profile",
    para1   : "My name is Mark and I am a highly motivated and passionate individual. I have a strong belief in the power of hard work and dedication, and I strive to use these qualities to achieve success in all aspects of my life.",
    button1 : "PROFILE",
    img     : "images/im-removebg-preview.png"
}
const obj2 = {
    header : "PROJECT COMPLETED",
    para    : "The Joker card is often depicted as a court jester, clown, or harlequin, representing chaos, unpredictability, wit, and intelligence.",
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
let btn2 = document.getElementById('btn2').addEventListener('click', () => {
    alert(`Arigato gosaimas`);
})
let btn3 = document.getElementById('btn3').addEventListener('click', () => {
    alert(`Arigato gosaimas`);
})
let btn4 = document.getElementById('btn4').addEventListener('click', () => {
    alert(`Arigato gosaimas`);
})
