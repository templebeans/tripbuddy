input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("I have to go by!")
    basic.showLeds(`
        # # # . .
        # # # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # # #
        . . # # #
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Let’s play Rock Paper Scissors ")
    basic.showIcon(IconNames.Happy)
    basic.showString("Rock Paper Scissors shoot ")
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showString("Again! Again!")
    basic.showString("Rock Paper Scissors shoot")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Let’s play charades here is a hint I am a Game")
    basic.showIcon(IconNames.TShirt)
    basic.showString(" 10 9 8 7 6 5 4 3 2 1 ")
    basic.showString("I am Minecraft ")
    basic.showString("Now I am a animal ")
    basic.showIcon(IconNames.Giraffe)
    basic.showString("10 9 8 7 6 5 4 3 2 1 ")
    basic.showString("I was a giraffe ")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hi I am trip buddy ")
    basic.showIcon(IconNames.House)
    basic.showArrow(ArrowNames.East)
    basic.showLeds(`
        # # # . .
        # # # . .
        . # . . .
        . # # # #
        # # # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Don’t be scared of the plane")
    basic.showIcon(IconNames.Heart)
    basic.showString("you should get some sleep ")
    basic.showIcon(IconNames.Rollerskate)
    basic.showIcon(IconNames.Asleep)
})
