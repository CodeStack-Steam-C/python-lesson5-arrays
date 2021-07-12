def on_a_pressed():
    global dart
    dart = sprites.create_projectile_from_sprite(img("""
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
        """),
        spacePlane,
        200,
        0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    global newWords
    if len(newWords) > 0: #tell me how many items are in array
        spacePlane.say(newWords.pop()) #returns and removes last item
    else:
        newWords = word.split(" ") #refill the array when it is empty
        newWords.reverse()
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.change_score_by(1)
    pause(1000)
    spacePlane.say("")
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    otherSprite.destroy()
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

bogey = None
dart = None

position = 0
word = "YOU CAN'T STOP ME!"
word = word.to_lower_case()
newWords = word.split(" ")
newWords.reverse() #reverses the array
spacePlane = sprites.create(img("""
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
    """),
    SpriteKind.player)
spacePlane.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
info.set_life(3)
controller.move_sprite(spacePlane, 200, 200)

def on_update_interval():
    global bogey
    bogey = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    bogey.set_velocity(-100, 0)
    bogey.set_position(180, randint(0, 120))
game.on_update_interval(500, on_update_interval)