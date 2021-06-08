imgList = [
    "./isotex/BigPyramid.png",
    "./isotex/BigPyramidBar.png",
    "./isotex/Boat.png",
    "./isotex/book.png",
    "./isotex/Cars.png",
    "./isotex/Cars2.png",
    "./isotex/ComplexSplit.png",
    "./isotex/Earth.png",
    "./isotex/EuroCent.png",
    "./isotex/FarParis.png",
    "./isotex/illeterateBar.png",
    "./isotex/Pyramide.png",
    "./isotex/Vaccine.png",
    "./isotex/Vaccine1.png",
    "./isotex/Wine.png"
];

indexImg = 0;
indexList = 0;

function init() {

    document.getElementById("img-list").addEventListener("wheel", scrollList);

    displayImg();
    displayImgList();

}

function changeImgDisplayed( n ) {

    indexImg = parseInt( ( indexList + n - 3 ) ).mod( imgList.length ); 
    displayImg();

}

function moveIndexList( i ) {

    indexList = indexList + i;
    displayImgList();

}

function displayImg() {

    imgsrc = imgList[ indexImg ];
    imgCode = imgsrc.split('.')[ 1 ];
    imgCode = '.' + imgCode + 'Code.png';

    document.getElementById( "img-displayed" ).setAttribute("src", imgsrc );
    document.getElementById( "img-displayed-code" ).setAttribute("src", imgCode  );

}

function displayImgList() {

    document.getElementById( "img-list-1" ).setAttribute("src", imgList[ parseInt( ( indexList - 2 ) ).mod( imgList.length ) ] );
    document.getElementById( "img-list-2" ).setAttribute("src", imgList[ parseInt( ( indexList - 1 ) ).mod( imgList.length ) ] );
    document.getElementById( "img-list-3" ).setAttribute("src", imgList[ parseInt( ( indexList ) ).mod( imgList.length ) ] );
    document.getElementById( "img-list-4" ).setAttribute("src", imgList[ parseInt( ( indexList + 1 ) ).mod( imgList.length ) ] );
    document.getElementById( "img-list-5" ).setAttribute("src", imgList[ parseInt( ( indexList + 2 ) ).mod( imgList.length ) ] );

}

function scrollList( event ) {

    event.preventDefault();

    if ( event.deltaY > 0 ) {

        moveIndexList( -1 );

    } else {

        moveIndexList( 1 );

    }

}

Number.prototype.mod = function(n) {
	var m = (( this % n) + n) % n;
	return m < 0 ? m + Math.abs(n) : m;
};