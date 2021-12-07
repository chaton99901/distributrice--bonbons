let capteur = 0
servos.P0.setRange(60, 150)
basic.forever(function () {
    capteur = pins.digitalReadPin(DigitalPin.P16)
    if (capteur == 0) {
        servos.P1.setAngle(60)
    } else {
        servos.P1.setAngle(150)
        basic.pause(2000)
    }
})
