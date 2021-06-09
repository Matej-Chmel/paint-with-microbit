function enter () {
    led.plot(get_x(), get_y())
}
function flip() {
    marked[position] = !(marked[position])
}
function get_x() {
    return position % 5
}
function get_y () {
    return position / 5
}
function is_marked () {
    return marked[position] == true
}
function mark () {
    marked[position] = true
}
function move () {
    position += 1
    if (position >= 25) {
        position = 0
    }
}
function leave() {
    if (!(is_marked())) {
        led.unplot(get_x(), get_y())
    }
}
function reset () {
    position = -1
    marked = []
    for (let index = 0; index < 25; index++) {
        marked.push(false)
    }
}
function unmark () {
    marked[position] = false
}
input.onButtonPressed(Button.A, function () {
    leave()
    move()
    enter()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    reset()
})
input.onButtonPressed(Button.B, function () {
    flip()
})
let position = 0
let marked: boolean[] = []
reset()
