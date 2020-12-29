input.onButtonPressed(Button.A, function () {
    radio.sendString("Alejandro hasta tu casa no llega")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
