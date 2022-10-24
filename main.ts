servos.P0.setRange(10, 170)
basic.forever(function () {
    servos.P0.setPulse(1)
    servos.P0.setAngle(10)
    servos.P0.setAngle(pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    10,
    170
    ))
    servos.P0.setAngle(pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    10,
    170
    ))
})
