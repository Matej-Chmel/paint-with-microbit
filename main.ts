function leave () {
    if (!(is_marked())) {
        led.unplot(get_x(), get_y())
    }
}
function flip () {
    marked[position] = !(marked[position])
}
input.onButtonPressed(Button.A, function () {
    leave()
    move()
    enter()
})
function enter () {
    led.plot(get_x(), get_y())
}
function unmark () {
    marked[position] = false
}
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    reset()
})
input.onButtonPressed(Button.B, function () {
    flip()
})
function get_y () {
    return position / 5
}
function is_marked () {
    return marked[position] == true
}
function get_x () {
    return position % 5
}
function reset () {
    position = -1
    marked = []
    for (let index = 0; index < 25; index++) {
        marked.push(false)
    }
}
function move () {
    position += 1
    if (position >= 25) {
        position = 0
    }
}
function mark () {
    marked[position] = true
}
let position = 0
let marked: boolean[] = []
reset()
