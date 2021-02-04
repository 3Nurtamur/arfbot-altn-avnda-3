namespace SpriteKind {
    export const altın = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (arfbot.vy == 0) {
        arfbot.vy = -130
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.altın, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    info.changeScoreBy(1)
    music.wawawawaa.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile0`, function (sprite, location) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 50)
    scene.cameraShake(4, 500)
    if (arfbot.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else if (true) {
        info.changeLifeBy(-1)
    }
})
let düsman: Sprite = null
let altın: Sprite = null
let arfbot: Sprite = null
game.splash("Arfbot Altın Avında..")
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`level1`)
arfbot = sprites.create(img`
    . . . 9 9 d d d d d d 9 9 . . . 
    . . . 9 d 8 8 8 8 8 8 d 9 . . . 
    . . . d 8 9 8 8 8 8 9 8 d . . . 
    . . . d 8 9 9 8 8 9 9 8 d . . . 
    . . . d 8 8 8 8 8 8 8 8 d . . . 
    . . . d 8 8 8 9 9 8 8 8 d . . . 
    . . . d 8 9 8 8 8 8 9 8 d . . . 
    . . . . d 8 9 9 9 9 8 d . . . . 
    . . . . . d d d d d d . . . . . 
    . . d d d d 9 9 9 9 d d d d . . 
    . . d . . d d 9 9 d d . . d . . 
    . . . . . d d d d d d . . . . . 
    . . . . . d d . . d d . . . . . 
    . . . . . d d . . d d . . . . . 
    . . . . . d d . . d d . . . . . 
    . . . . d d d . d d d . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(arfbot, 100, 0)
scene.cameraFollowSprite(arfbot)
arfbot.setPosition(30, 40)
arfbot.ay = 130
info.changeScoreBy(0)
info.setLife(3)
for (let value of tiles.getTilesByType(assets.tile`tile6`)) {
    altın = sprites.create(img`
        . . . f f f f f f f . . . . . . 
        . . f 5 5 5 5 5 5 5 f . . . . . 
        . f 5 5 5 5 4 4 4 5 5 f . . . . 
        f 5 5 4 5 5 5 5 5 5 5 5 f . . . 
        f 5 5 4 5 5 5 5 5 5 5 5 f . . . 
        f 5 5 4 5 5 5 5 5 5 5 5 f . . . 
        f 5 5 4 5 5 5 5 5 5 5 5 f . . . 
        f 5 5 4 5 5 5 5 5 5 5 5 f . . . 
        f 5 5 4 5 5 5 5 5 5 5 5 f . . . 
        f 5 5 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 4 4 4 4 4 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.altın)
    animation.runImageAnimation(
    altın,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 5 5 5 5 5 5 5 f f . . 
        . . f 5 5 5 5 4 4 4 4 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 4 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 4 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 4 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 4 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 4 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 4 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 4 5 5 5 5 5 5 5 5 5 5 f 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 4 4 4 4 4 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 5 5 5 5 5 5 5 f f . . 
        . . f 5 5 5 5 4 4 4 4 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 4 4 4 4 4 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 5 5 5 5 5 5 5 f f . . 
        . . . f 5 5 5 4 4 4 4 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 4 5 5 5 5 5 5 5 5 f . . 
        . . . f 4 5 5 5 5 5 5 5 5 f . . 
        . . . f 4 5 5 5 5 5 5 5 5 f . . 
        . . . f 4 5 5 5 5 5 5 5 5 f . . 
        . . . f 4 5 5 5 5 5 5 5 5 f . . 
        . . . f 4 5 5 5 5 5 5 5 5 f . . 
        . . . f 4 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 4 4 4 4 4 5 5 f . . 
        . . . f f 5 5 5 5 5 5 5 f f . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . f f 5 5 5 5 5 f f . . . 
        . . . . f 5 5 5 4 4 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 4 5 5 5 5 5 5 f . . . 
        . . . . f 4 5 5 5 5 5 5 f . . . 
        . . . . f 4 5 5 5 5 5 5 f . . . 
        . . . . f 4 5 5 5 5 5 5 f . . . 
        . . . . f 4 5 5 5 5 5 5 f . . . 
        . . . . f 4 5 5 5 5 5 5 f . . . 
        . . . . f 4 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 4 4 4 5 5 f . . . 
        . . . . f f 5 5 5 5 5 f f . . . 
        . . . . . . f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 4 5 5 5 5 f . . . . 
        . . . . . f 4 5 5 5 5 f . . . . 
        . . . . . f 4 5 5 5 5 f . . . . 
        . . . . . f 4 5 5 5 5 f . . . . 
        . . . . . f 4 5 5 5 5 f . . . . 
        . . . . . f 4 5 5 5 5 f . . . . 
        . . . . . f 4 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 4 5 5 f . . . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . f f 5 f f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 4 5 5 f . . . . . 
        . . . . . . f 4 5 5 f . . . . . 
        . . . . . . f 4 5 5 f . . . . . 
        . . . . . . f 4 5 5 f . . . . . 
        . . . . . . f 4 5 5 f . . . . . 
        . . . . . . f 4 5 5 f . . . . . 
        . . . . . . f 4 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f f 5 f f . . . . . 
        . . . . . . . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . f f 5 f . . . . . 
        . . . . . . . f 5 5 f . . . . . 
        . . . . . . . f 5 5 f . . . . . 
        . . . . . . . f 4 5 f . . . . . 
        . . . . . . . f 4 5 f . . . . . 
        . . . . . . . f 4 5 f . . . . . 
        . . . . . . . f 4 5 f . . . . . 
        . . . . . . . f 4 5 f . . . . . 
        . . . . . . . f 4 5 f . . . . . 
        . . . . . . . f 4 5 f . . . . . 
        . . . . . . . f 5 5 f . . . . . 
        . . . . . . . f 5 5 f . . . . . 
        . . . . . . . f f 5 f . . . . . 
        . . . . . . . . . f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . . f 5 f . . . . . 
        . . . . . . . . f 5 f . . . . . 
        . . . . . . . . f 4 f . . . . . 
        . . . . . . . . f 4 f . . . . . 
        . . . . . . . . f 4 f . . . . . 
        . . . . . . . . f 4 f . . . . . 
        . . . . . . . . f 4 f . . . . . 
        . . . . . . . . f 4 f . . . . . 
        . . . . . . . . f 4 f . . . . . 
        . . . . . . . . f 5 f . . . . . 
        . . . . . . . . f 5 f . . . . . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . . . f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . . f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(altın, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`tile5`)) {
    düsman = sprites.create(img`
        . . . . d . . d . . d . . . . . 
        . . . . . d . d . d . . . . . . 
        . . . . . d 1 1 1 d . . . . . . 
        . . d . d c 1 1 1 c d . d . . . 
        . . . 1 1 c c 1 c c 1 1 . . . . 
        . . d 1 1 1 1 1 1 1 1 1 d . . . 
        . . . 1 1 1 1 c 1 1 1 1 . . . . 
        . . d . d 1 1 1 1 1 d . d . . . 
        . . . . . d c c c d . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . 1 1 . 1 . 1 1 . . . . . 
        . . . 1 1 . . 1 . . 1 1 . . . . 
        . . 1 1 . . . 1 . . . 1 1 . . . 
        . 1 1 . . . . 1 . . . . 1 1 . . 
        . 1 . . . . . 1 . . . . . 1 . . 
        . 1 . . . . . 1 . . . . . 1 . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    düsman,
    [img`
        . . . . . d . . d . . d . . . . 
        . . . . . . d . d . d . . . . . 
        . . . . . . d 1 1 1 d . . . . . 
        . . . d . d c 1 1 1 c d . d . . 
        . . . . 1 1 c c 1 c c 1 1 . . . 
        . . . d 1 1 1 1 1 1 1 1 1 d . . 
        . . . . 1 1 1 1 c 1 1 1 1 . . . 
        . . . d . d 1 1 1 1 1 d . d . . 
        . . . . . . d c c c d . . . . . 
        . . . . . . . d d d . . . . . . 
        . . . . . 1 1 . 1 . 1 1 . . . . 
        . . . . 1 1 . . 1 . . 1 1 . . . 
        . . . 1 1 . . . 1 . . . 1 1 . . 
        . . 1 1 . . . . 1 . . . . 1 1 . 
        . . 1 . . . . . 1 . . . . . 1 . 
        . . 1 . . . . . 1 . . . . . 1 . 
        `,img`
        . . . . . d . . d . . d . . . . 
        . . . . . . d . d . d . . . . . 
        . . . . . . d 1 1 1 d . . . . . 
        . . . d . d c 1 1 1 c d . d . . 
        . . . . 1 1 c c 1 c c 1 1 . . . 
        . . . d 1 1 1 1 1 1 1 1 1 d . . 
        . . . . 1 1 1 1 c 1 1 1 1 . . . 
        . . . d . d 1 1 1 1 1 d . d . . 
        . . . . . . d c c c d . . . . . 
        . . . . . . . d d d . . . . . . 
        . . . . . 1 1 . 1 . 1 1 . . . . 
        . . . . 1 1 . . 1 . . 1 1 . . . 
        . . . 1 1 . . . 1 . . . 1 1 . . 
        . . . 1 . . . . 1 . . . . 1 . . 
        . . . 1 . . . . 1 . . . . 1 . . 
        . . . 1 . . . . 1 . . . . . . . 
        `,img`
        . . . . . d . . d . . d . . . . 
        . . . . . . d . d . d . . . . . 
        . . . . . . d 1 1 1 d . . . . . 
        . . . . d d c 1 1 1 c d d . . . 
        . . . . 1 1 c c 1 c c 1 1 . . . 
        . . . . d 1 1 1 1 1 1 1 d . . . 
        . . . . 1 1 1 1 c 1 1 1 1 . . . 
        . . . . d d 1 1 1 1 1 d d . . . 
        . . . . . . d c c c d . . . . . 
        . . . . . . . d d d . . . . . . 
        . . . . . 1 1 . 1 . 1 1 . . . . 
        . . . . 1 1 . . 1 . . 1 1 . . . 
        . . . . 1 . . . 1 . . . 1 . . . 
        . . . 1 1 . . . 1 . . . 1 1 . . 
        . . . 1 . . . . 1 . . . . 1 . . 
        . . . 1 . . . . 1 . . . . 1 . . 
        `],
    500,
    true
    )
    tiles.placeOnTile(düsman, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
