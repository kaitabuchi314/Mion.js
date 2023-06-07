let mion;

function setup() {
    createCanvas(400, 400);
    let settings = {
        inputs: ["x", "y"],
        outputs: ["a", "b"]
    };
    
    mion = new Mion(settings);
}

function draw() {
    background(51);
}