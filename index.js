// imgList = [
//     "./isotex/BigPyramid.png",
//     "./isotex/BigPyramidBar.png",
//     "./isotex/Boat.png",
//     "./isotex/book.png",
//     "./isotex/Cars.png",
//     "./isotex/Cars2.png",
//     "./isotex/ComplexSplit.png",
//     "./isotex/Earth.png",
//     "./isotex/EuroCent.png",
//     "./isotex/FarParis.png",
//     "./isotex/illeterateBar.png",
//     "./isotex/Pyramide.png",
//     "./isotex/Vaccine.png",
//     "./isotex/Vaccine1.png",
//     "./isotex/Wine.png"
// ];

imgList= [
    {
        title: 'Otto Neurath',
        imgs: [
            "./isotex/BigPyramid.png",
            "./isotex/Cars.png",
            "./isotex/Cars.png",
            "./isotex/ComplexSplit.png",
            "./isotex/Pyramide.png",
            "./isotex/WorkerInBerlin.png"
        ]
    },
    {
        title: 'Bar',
        imgs: [
            "./isotex/BigPyramidBar.png",
            "./isotex/illeterateBar.png",
	    "./isotex/PyramideBar.png",
	    "./isotex/Car2Bar.png"
        ]
    },
    {
        title: 'Tally',
        imgs: [
            "./isotex/EuroCent.png",
            "./isotex/Game.png"
        ]
    },
    {
        title: 'Space Filling',
        imgs: [
            "./isotex/Earth.png"
        ]
    },
    {
        title: 'Miscellaneous',
        imgs: [
            "./isotex/Boat.png",
            "./isotex/book.png",
            "./isotex/FarParis.png",
            "./isotex/Vaccine.png",
            "./isotex/Vaccine1.png",
            "./isotex/Wine.png"
        ]
    }
]

indexListModal = 0;
indexSrcModal = 0;

function init() {

    createContent();

    document.getElementById( "modal" ).style.display = "none";
    document.getElementById("modal").addEventListener("wheel", scrollModal);

}

function openModal( imgsrc, iList, iSrc ) {

    indexListModal = parseInt( iList );
    indexSrcModal = parseInt( iSrc );

    document.getElementById( "modal" ).style.display = "flex";

    imgCode = imgsrc.split('.')[ 1 ];
    imgCode = '.' + imgCode + 'Code.png';

    document.getElementById( "img-modal" ).setAttribute("src", imgsrc );
    document.getElementById( "img-code-modal" ).setAttribute("src", imgCode );

}

function closeModal() {

    document.getElementById( "modal" ).style.display = "none";

}

function scrollModal( event ) {

    event.preventDefault();

    if ( event.deltaY > 0 ) {

        indexSrcModal = parseInt( ( indexSrcModal + 1 ) ).mod( imgList[ indexListModal ].imgs.length ); 

    } else {

        indexSrcModal = parseInt( ( indexSrcModal - 1 ) ).mod( imgList[ indexListModal ].imgs.length ); 

    }
    
    imgsrc = imgList[ indexListModal ].imgs[ indexSrcModal ];
    imgCode = imgsrc.split('.')[ 1 ];
    imgCode = '.' + imgCode + 'Code.png';

    document.getElementById( "img-modal" ).setAttribute("src", imgsrc );
    document.getElementById( "img-code-modal" ).setAttribute("src", imgCode );

}

function createContent() {

    root = document.getElementById( "img-container" );

    iList = 0;

    for ( const myList of imgList ) {

        wrapperDiv = document.createElement('div');
        wrapperDiv.setAttribute("class", "img-wrapper");
        if (iList === 0 ) wrapperDiv.setAttribute("id", "first");
        root.append( wrapperDiv );

        titleDiv = document.createElement('div');
        titleDiv.setAttribute("class", "img-title");
        titleDiv.innerHTML = myList.title
        wrapperDiv.append( titleDiv );

        listContainerDiv = document.createElement('div');
        listContainerDiv.setAttribute("class", "img-list-container");
        wrapperDiv.append( listContainerDiv );
        
        iSrc = 0;

        for ( const imgsrc of myList.imgs ) {

            cardDiv = document.createElement('div');
            cardDiv.setAttribute("class", "img-card");
            listContainerDiv.append( cardDiv );
            // cardDiv.style.maxWidth = 'calc(100% / ' + myList.imgs.length + ' - 30px)';
            // cardDiv.style.maxWidth = 'calc(100% / ' + myList.imgs.length + ' - 30px)';

            imgDiv = document.createElement('img');
            imgDiv.setAttribute("onclick", "openModal( '" + imgsrc + "'," + iList + "," + iSrc + " )" );
            imgDiv.setAttribute("src", imgsrc );
            cardDiv.append( imgDiv );

            iSrc += 1;

        }

        iList += 1;

    }

}

Number.prototype.mod = function(n) {
	var m = (( this % n) + n) % n;
	return m < 0 ? m + Math.abs(n) : m;
};
