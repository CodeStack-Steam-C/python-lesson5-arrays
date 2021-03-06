controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    dart = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 5 a a 2 . . . . . . . . . 
                    . . 5 5 a 2 2 2 2 4 4 4 . . . . 
                    . . . 5 a a 2 . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    
    if (newWords.length > 0) {
        // tell me how many items are in array
        spacePlane.say(newWords.pop())
    } else {
        // returns and removes last item
        newWords = word.split(" ")
        // refill the array when it is empty
        newWords.reverse()
    }
    
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
    pause(1000)
    spacePlane.say("")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let bogey = null
let dart = null
let position = 0
let word = "YOU CAN'T STOP ME!"
word = word.toLowerCase()
let newWords = word.split(" ")
newWords.reverse()
// reverses the array
let spacePlane = sprites.create(img`
        ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ....82..........................
            ....111.....99999...............
            ....2222...9999999..............
            .444f866666699999666............
            444f6666666666666666666.........
            .44f68886666666666666666........
            ..44f88.....88886666666.........
            ...........8888882..............
            ...........888882...............
            ..........888882................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
    `, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlane, 200, 200)
game.onUpdateInterval(500, function on_update_interval() {
    
    bogey = sprites.create(img`
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . 9 9 . . . . . 5 . . . . 
                    . . . 9 9 9 9 . . . 5 5 . . . . 
                    2 2 2 2 9 9 2 2 2 2 2 f 4 4 . . 
                    . . 2 2 2 2 5 5 5 2 2 f 4 4 4 . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . . 5 5 . . . . . . . 
                    . . . . . . . . 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, randint(0, 120))
})
