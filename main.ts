let forza = 0
// Entrambi i micro:bit devono avere lo stesso gruppo radio
radio.setGroup(1)
let trasmesso = 0
basic.forever(function () {
    forza = input.magneticForce(Dimension.Strength)
    if (forza > 300) {
        basic.showIcon(IconNames.Heart)
        basic.showString("benvenuti!")
        if (trasmesso == 0) {
            radio.sendString("4")
            trasmesso = 1
        }
    } else {
        basic.clearScreen()
        trasmesso = 0
    }
})
