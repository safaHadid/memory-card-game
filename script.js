const colors = ['aqua', 'aliceblue', 'aquamarine', 'crimson', 'gold', 'greenyellow', 'blue', 'teal'];
const colorsPicklist = [...colors, ...colors];
const tilesColors = [];
const tilesCount = colorsPicklist.length;
const tile = document.getElementsByClassName('tile');
let count = 0 ;

// set the random numbers //
for (let i = 0; i < tilesCount; i++) {
    const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
    const color = colorsPicklist[randomIndex];
    tilesColors.push(color);
    colorsPicklist.splice(randomIndex, 1);
}

let activeTile = null;
let awaitingEndOfMove = false;

// set the addEventListener //
for (let i = 0; i < tilesCount; i++) {
    tile[i].setAttribute("data-revealed", "false");
    tile[i].addEventListener('click', () => {

        if (awaitingEndOfMove || tile[i].getAttribute("data-revealed") === "true") {
            return;
        }

        // we set the color of the tile here //
        const color = tilesColors[i];
        tile[i].style.backgroundColor = color;

        // if we don't have any active tile we set one here //
        if (activeTile === null) {
            activeTile = tile[i];
        } else {
            // if we have clicked on one already //
            // if the bg color of the second tile and the active tile different //
            // we used data-revealed so we can't click on the same tile twice //
            if (activeTile.style.backgroundColor !== color) {
                awaitingEndOfMove = true;
                setTimeout(() => {
                    activeTile.style.backgroundColor = '#fff';
                    tile[i].style.backgroundColor = '#fff';
                    activeTile = null;
                    awaitingEndOfMove = false;
                }, 2000);
                // if it is the same //
            } else {
                activeTile.setAttribute('data-revealed', 'true');
                tile[i].setAttribute('data-revealed', 'true');
                activeTile = null;
                count+=2;
                if(count == tilesCount){
                    alert('You won, Refresh to play again!');
                }
            }
        }
    });
}

























// const colors = ['aqua' , 'aliceblue' , 'aquamarine' , 'crimson' , 'gold' , 'greenyellow' , 'blue' , 'teal'];
// const colorsPicklist = [...colors , ...colors];
// const tilesColors = [];
// const tilesCount = colorsPicklist.length ;
// const tile = document.getElementsByClassName('tile')
// // console.log(tile);

// for(let i =0 ; i < tilesCount ; i++){
//     const randomIndex = Math.floor(Math.random()*colorsPicklist.length);
//     const color = colorsPicklist[randomIndex];
//     tilesColors.push(color);
//     // tile[i].setAttribute("data-color" , color) ;
//     // tile[i].setAttribute("data-revealed" , "false");
//     colorsPicklist.splice(randomIndex , 1);
//     // console.log(color);
// }
// // console.log(tilesColors);

// let revealedCount = 0;
// let activeTile = null;
// let awaitingEndOfMove = false;
// let activeTileColor = null ;
// let tileColor = null ;
// for(let i =0 ; i < tilesCount ; i++){
//     tile[i].setAttribute("data-revealed" , "false");
//     tile[i].addEventListener('click' , ()=>{
//         const color = tilesColors[i];
//         tile[i].style.backgroundColor = color;
        

//         if(activeTile == null){
//             activeTile = tile[i];
//         }

//         activeTileColor = activeTile.style.backgroundColor;
//         tileColor = tile[i].style.backgroundColor;
//         console.log( tileColor ,activeTileColor);

//         let revAtt = tile[i].getAttribute('data-revealed' , 'false');
//         if(activeTileColor != tileColor && revAtt==false){
//             // console.log("hello");
//             setTimeout(()=>{
//                 activeTile.style.backgroundColor = '#fff';
//                 tile[i].style.backgroundColor = '#fff';
//                 activeTile = null;
//                 activeTileColor = '#fff' ;
//                 tileColor = null ;
//             },1000)
//         } else{
//             tile[i].getAttribute('data-revealed' , 'true')
//             activeTile.getAttribute('data-revealed' , 'true')
//         }
//     })
// }


// // let revealedCount = 0;
// // let activeTile = null;
// // let awaitingEndOfMove = false;


// // function bgColor(color){
// //     console.log(color);
// //     if(awaitingEndOfMove){
// //         return;
// //     }
// //     for(let i =0 ; i < tile.length ; i++){
// //         // console.log(tile[i]);
// //         tile[i].addEventListener('click' , ()=>{
// //             // console.log(color);
// //             tile[i].style.background = color ; 
// //         })
// //     }
// // }

// // for(let i =0 ; i < tilesCount ; i++){
// //     const randomIndex = Math.floor(Math.random()*colorsPicklist.length);
// //     const color = colorsPicklist[randomIndex];
// //     tile[i].setAttribute("data-color" , color) ;
// //     tile[i].setAttribute("data-revealed" , "false");
// //     colorsPicklist.splice(randomIndex , 1);
// //     // console.log(color);
// //     tile[i].addEventListener('click' , ()=>{
// //         if(!awaitingEndOfMove){
// //             tile[i].style.background = color ; 
// //         }
// //         })
// //         if(!activeTile){
// //             activeTile = tile[i];
// //         }
// //         console.log(activeTile);    
// // }


