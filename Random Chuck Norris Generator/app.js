const body = document.querySelector('body')
const btn = document.querySelector('#btn')
const image = document.querySelector('#image')

const chuckNorrisMemes = [
    './images/chuck-norris-memes-1.jpeg',
    './images/chuck-norris-memes-2.jpg',
    './images/chuck-norris-memes-3.jpg',
    './images/chuck-norris-memes-4.jpg',
    './images/chuck-norris-memes-5.jpg',
    './images/chuck-norris-memes-6.jpg',
    './images/chuck-norris-memes-7.jpg',
    './images/chuck-norris-memes-8.jpg',
    './images/chuck-norris-memes-9.jpg',
    './images/chuck-norris-memes-10.jpg',
    './images/chuck-norris-memes-11.jpg',
    './images/chuck-norris-memes-12.jpg',
    './images/chuck-norris-memes-13.jpg',
    './images/chuck-norris-memes-14.jpg',
    './images/chuck-norris-memes-15.jpg',
    './images/chuck-norris-memes-16.jpg',
    './images/chuck-norris-memes-17.jpg',
    './images/chuck-norris-memes-19.jpg',
    './images/chuck-norris-memes-20.jpg',
    './images/chuck-norris-memes-21.jpg',
    './images/chuck-norris-memes-22.jpg',
    './images/chuck-norris-memes-23.jpg',
    './images/chuck-norris-memes-24.jpg',
    './images/chuck-norris-memes-25.jpg',
    './images/chuck-norris-memes-26.jpg',
    './images/chuck-norris-memes-27.jpg',
    './images/chuck-norris-memes-28.jpg',
    './images/chuck-norris-memes-29.jpg',
    './images/chuck-norris-memes-30.jpg',
    './images/chuck-norris-memes-31.jpg',
    './images/chuck-norris-memes-32.jpg',
    './images/chuck-norris-memes-33.jpg',
    './images/chuck-norris-memes-34.jpg',
    './images/chuck-norris-memes-35.jpg',
    './images/chuck-norris-memes-36.jpg',
    './images/chuck-norris-memes-37.jpg',
    './images/chuck-norris-memes-38.jpg',
    './images/chuck-norris-memes-39.jpg',
    './images/chuck-norris-memes-40.jpg',
    './images/chuck-norris-memes-41.jpg',
    './images/chuck-norris-memes-42.jpg',
]

const randomIndex = Math.floor(Math.random() * chuckNorrisMemes.length)
image.src = chuckNorrisMemes[randomIndex]

btn.onclick = () => {
    const randomIndex = Math.floor(Math.random() * chuckNorrisMemes.length)
    image.src = chuckNorrisMemes[randomIndex]
    console.log(`Random meme selected: ${chuckNorrisMemes[randomIndex]}`)
}
