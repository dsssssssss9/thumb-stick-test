input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
})
basic.forever(function () {
    led.plotBrightness(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    1023,
    0,
    0,
    5
    ), pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    5
    ), 255)
    basic.pause(64)
    basic.clearScreen()
})
