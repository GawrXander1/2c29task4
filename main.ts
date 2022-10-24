let count = 0
let yva = 0
input.onButtonPressed(Button.A, function () {
    count = 0
    while (count <= 4) {
        led.plot(count, 0)
        basic.pause(500)
        basic.clearScreen()
        count += 1
    }
})
input.onButtonPressed(Button.B, function () {
    yva = 0
    while (yva <= 4) {
        led.plot(0, yva)
        basic.pause(500)
        basic.clearScreen()
        yva += 1
    }
})
