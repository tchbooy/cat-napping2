input.onButtonPressed(Button.A, function () {
    loging = !(loging)
    if (loging) {
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    datalogger.deleteLog()
})
let loging = false
loging = false
loops.everyInterval(1000, function () {
    if (loging) {
        datalogger.log(
        datalogger.createCV("temp", input.temperature()),
        datalogger.createCV("sound", input.soundLevel())
        )
    }
})
