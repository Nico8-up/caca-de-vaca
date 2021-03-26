input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("C C C D F D C C ", 120)
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("C D C E A D F B ", 149)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . . . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        # # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
