info.onScore(1000, function () {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -180
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.stopAllSounds()
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 d d d f . . . . . 
        . . . . f 1 1 d f d f . . . . . 
        . . . . f 1 1 d d d f . . . . . 
        . . . . f 1 1 1 f f f . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . f 1 f 1 f 1 f . . . . . 
        . . . . . f f 1 f f . . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 d d d f . . . . . 
        . . . . f 1 1 d f d f . . . . . 
        . . . . f 1 1 d d d f . . . . . 
        . . . . f 1 1 1 f f f . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . f 1 f 1 f 1 f . . . . . 
        . . . . . f f 1 f f . . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 d d d f . . . . . 
        . . . . f 1 1 d f d f . . . . . 
        . . . . f 1 1 d d d f . . . . . 
        . . . . f 1 1 1 f f f . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . f 1 f 1 f 1 f . . . . . 
        . . . . . f f 1 f f . . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 d d d f . . . . . 
        . . . . f 1 1 d f d f . . . . . 
        . . . . f 1 1 d d d f . . . . . 
        . . . . f 1 1 1 f f f . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . f 1 f 1 f 1 f . . . . . 
        . . . . . f f 1 f f . . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 f 1 1 f . . . . . 
        . . . . f 1 1 d d d f . . . . . 
        . . . . f 1 1 d f d f . . . . . 
        . . . . f 1 1 d d d f . . . . . 
        . . . . f 1 1 1 f f f . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . f 1 f 1 f 1 f . . . . . 
        . . . . . f f 1 f f . . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    game.gameOver(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
music.play(music.stringPlayable("B A G A G F A C5 ", 140), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("B A G A G F A C5 ", 140), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("B A G A G F A C5 ", 140), music.PlaybackMode.UntilDone)
game.splash("bunny runny")
scene.setBackgroundColor(13)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`bunny`, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 100)
mySprite.setStayInScreen(true)
mySprite.setPosition(20, 70)
mySprite.ay = 400
game.setGameOverScoringType(game.ScoringType.HighScore)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(5)
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . e e . . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . e e e e . e . . . . . . 
        . . . e . e . e e e e . . . . . 
        . . e . . e e e e e e e e . . . 
        . e e . . e e . . e e e . e . . 
        . e e e e e . e e e e . e e . . 
        e e . e e e e e . . e . e . . . 
        e e . e e e . e e e e e . e . e 
        e . . e e e . e . e . e e e e . 
        e e e e e e e e e e e . e e e . 
        e . e e . e e e e e . e e . e e 
        e . e e . e e . . e . . e e . e 
        e . . e e e . e e e . e . e . e 
        . . . e e e . e . e . e e . e . 
        e . . e e . . . e e . . e e . . 
        `, randint(-120, -90), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
})
