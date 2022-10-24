let yva = 0
let count = 0
let ab = 0
input.onButtonPressed(Button.B, function () {
    yva = 0
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(count, 0)
        basic.pause(500)
        count += 1
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, yva)
        basic.pause(500)
        yva += 1
    }
})
basic.forever(function () {
    ab = 0
    if (input.buttonIsPressed(Button.AB)) {
        while (ab <= 4) {
            basic.clearScreen()
            led.plot(ab, 0)
            basic.pause(500)
            ab += 1
        }
        while (ab >= 4) {
            ab += -1
        }
    }
})
