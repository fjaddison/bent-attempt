// https://editor.p5js.org/ftobon@heartofla.org/sketches/SkBy9XP97
var r       //radius
var angle 
var step  //distance between steps in radians
var padding
var space
var density = Math.floor(Math.random() * 6) + 6
var colors = [
    'rgb(255, 0, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 0, 255)'
]

var colorObject = {
    main: [
        {
            bright: '#BF0426',
            dark: '#85051B'
        },
        {
            bright: '#16BABA',
            dark: '#0E548F'
        }
    ],
    flair: [
        '#F5B129',
        '#DB790B',
        '#D64CB4',
    ]
}

var mainStroke
var bright
var dark

if (density % 2 == 1) {
    density += 1
}

function setup() {
    createCanvas(windowWidth / 1.5, windowWidth / 1.5)
    background(225)
    //initialize variables
    angle = 0
    step  = TWO_PI/12 //in radians equivalent of 360/12 in degrees
    padding = width / (density / 1.5)
    space = width / density
    r     = space / 2
    mainStroke = random(colorObject.main)
    bright = mainStroke.bright
    dark = mainStroke.dark

}

function draw() {
    let c = random(colorObject.flair)
    for (y = padding; y <= height - padding; y += ((2 * (space/2)) / sqrt(3))) {
        for (x = padding; x < width - padding + space - 1; x += space) {
            
            let points = [
                [
                    createVector(x + (space / 2), y + ((2 * (space/2)) / sqrt(3)) / 2),
                    createVector(x + (space / 2), y - ((2 * (space/2)) / sqrt(3)) / 2)
                ], 
                [
                    createVector(x - (space / 2), y + ((2 * (space/2)) / sqrt(3)) / 2),
                    createVector(x - (space / 2), y - ((2 * (space/2)) / sqrt(3)) / 2)
                ],
                [
                    createVector(x - (space / 2), y - ((2 * (space/2)) / sqrt(3)) / 2),
                    createVector(x, y - ((2 * (space/2)) / sqrt(3)))
                ],
                [
                    createVector(x + (space / 2), y - ((2 * (space/2)) / sqrt(3)) / 2),
                    createVector(x, y - ((2 * (space/2)) / sqrt(3)))
                ],
                [
                    createVector(x + (space / 2), y + ((2 * (space/2)) / sqrt(3)) / 2),
                    createVector(x, y + ((2 * (space/2)) / sqrt(3)))
                ],
                [
                    createVector(x - (space / 2), y + ((2 * (space/2)) / sqrt(3)) / 2),
                    createVector(x, y + ((2 * (space/2)) / sqrt(3)))
                ]
            ]


            for (j = 0; j < points.length - 2; j++) {

                stroke(bright)
                strokeWeight(1)
                fill(bright)

                if (j == 1 || j == 0) {
                  
                    if (noise(x, y) < 0.25) {
                        stroke(dark)
                        fill(dark)
                        makeLine(
                            lerp(x, points[j][0].x, 1/4), 
                            lerp(y, points[j][0].y, 1/4),
                            lerp(x, points[j][0].x, 3/4), 
                            lerp(y, points[j][0].y, 3/4),
                            lerp(points[j][0].x, points[j][1].x, 1/4), 
                            lerp(points[j][0].y, points[j][1].y, 1/4),
                            lerp(points[j][0].x, points[j][1].x, 3/4), 
                            lerp(points[j][0].y, points[j][1].y, 3/4) 
                        )  
                    } else {
                        
                        makeLine(
                            lerp(x, points[j][0].x, 1/4), 
                            lerp(y, points[j][0].y, 1/4),
                            lerp(x, points[j][0].x, 3/4), 
                            lerp(y, points[j][0].y, 3/4),
                            lerp(x, points[j][1].x, 3/4), 
                            lerp(y, points[j][1].y, 3/4),
                            lerp(x, points[j][1].x, 1/4), 
                            lerp(y, points[j][1].y, 1/4) 
                        )  
                        
                    }
                   
                } else if (Math.random() > 0.9) {
                    stroke(dark)
                    fill(dark)
                    
                    makeLine(
                        lerp(x, points[j][0].x, 1/4), 
                        lerp(y, points[j][0].y, 1/4), 
                        lerp(x, points[j][0].x, 3/4), 
                        lerp(y, points[j][0].y, 3/4), 
                        lerp(x, points[j][1].x, 3/4), 
                        lerp(y, points[j][1].y, 3/4), 
                        lerp(x, points[j][1].x, 1/4), 
                        lerp(y, points[j][1].y, 1/4)
                    )

                } else {
                    makeLine(
                        lerp(x, points[j][0].x, 1/4), 
                        lerp(y, points[j][0].y, 1/4), 
                        lerp(x, points[j][0].x, 3/4), 
                        lerp(y, points[j][0].y, 3/4), 
                        lerp(points[j][0].x, points[j][1].x, 1/4), 
                        lerp(points[j][0].y, points[j][1].y, 1/4), 
                        lerp(points[j][0].x, points[j][1].x, 3/4), 
                        lerp(points[j][0].y, points[j][1].y, 3/4)
                    )
                }
            }
        }
    }
    noLoop()
}


function makeLine(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6) {

    beginShape()
    vertex(x1, y1)
    vertex(x2, y2)
    vertex(x3, y3)
    vertex(x4, y4)
    if (x5) {
        vertex(x5, y5)
        vertex(x6, y6)
    }
    endShape(CLOSE)

}
