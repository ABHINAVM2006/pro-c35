var votersCount = 0;
var database;

function setup()    {
    canvas = createCanvas(600,600);
    database = firebase.database();

    form = new Form();
    form.display();
    voters = new Voters();
}
