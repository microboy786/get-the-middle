function START_GAME () {
    PacMan = game.createSprite(0, 0)
    Ghost = game.createSprite(2, 2)
    Score = 1
    while (true) {
        if (input.acceleration(Dimension.X) > 200) {
            PacMan.change(LedSpriteProperty.X, 1)
        }
        if (input.acceleration(Dimension.X) < -200) {
            PacMan.change(LedSpriteProperty.X, -1)
        }
        if (input.acceleration(Dimension.Y) < -200) {
            PacMan.change(LedSpriteProperty.Y, -1)
        }
        if (input.acceleration(Dimension.X) > 200) {
            PacMan.change(LedSpriteProperty.Y, 1)
        }
        basic.pause(100)
    }
}
let Score = 0
let Ghost: game.LedSprite = null
let PacMan: game.LedSprite = null
basic.showIcon(IconNames.Ghost)
basic.pause(200)
START_GAME()
basic.clearScreen()
basic.showString("pac-man")
