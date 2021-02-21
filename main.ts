basic.forever(function () {
    if (gatorMicrophone.readGateData()) {
        basic.showNumber(gatorMicrophone.getSoundIntensity())
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
