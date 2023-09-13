
// const question = document.getElementsByClassName('question')[0];
// const scorecard = document.getElementsByClassName('scorecard')[0];
// const scoreHead = document.getElementsByClassName('score')[0];
// const home = document.getElementsByClassName('home')[0];
// // const pre = document.getElementsByClassName('pre')[0];
// // const check = document.getElementsByClassName('check')[0];
// const next = document.getElementsByClassName('next')[0];
// const gridItem = document.querySelectorAll('.grid-item');
// const test = document.getElementsByClassName('test')[0];
// const tab1 = document.getElementsByClassName('tab1')[0];
// const tab2 = document.getElementsByClassName('tab2')[0];
// const list = document.getElementsByClassName('list')[0];

// // pre.disabled = true;

// let score = 0;

// function checkmethod(order) {
//     gridItem.forEach((ele) => {
//         ele.classList.remove('right');
//         ele.classList.remove('wrong');
//     })
//     gridItem.forEach((ele) => {
//         let select = ele.classList.contains('selected');
//         if (ele.innerHTML === order) {
//             ele.classList.add('right');



//         }
//         if (select) {

//             if (ele.innerHTML === order) {
//                 score++;
//                 scoreHead.innerHTML = `Score : ${score}`;
//                 ele.classList.add('right');

//             } else {
//                 ele.classList.add('wrong');

//             }


//         }

//     });

// }


// function selectanim(e) {
//     const temp = document.getElementById(e.target.id);

//     gridItem.forEach((ele) => {
//         ele.classList.remove('selected');
//     })
//     temp.classList.add('selected');
// }



// function createNext(result, amount, i) {

//     console.log(i);


//     if ((i < amount)) {
//         let correct_ans = result.results[i].correct_answer
//         let ary = [...result.results[i].incorrect_answers, correct_ans];
//         ary.sort(() => 0.5 - Math.random());
//         ary.forEach((ele, ind) => {

//             gridItem[ind].innerHTML = ele;
//             gridItem[ind].classList.remove('selected', 'right', 'wrong');

//             gridItem[ind].addEventListener('click', selectanim);




//         });

//         question.innerHTML = result.results[i].question;
//     }
//     if (i === (amount - 1)) {
//         next.innerHTML = '<i class="fa-solid fa-rotate-right"></i>';


//     }






// }

// let i = -1;
// // let nextButtonListener;
// // function room(result, amount) {


// // }




// // async function gameMain(cat) {
// //     let amount = 20;
// //     try {

// //         const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${cat}&difficulty=medium&type=multiple`);
// //         const result = await response.json();
// //         next.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
// //         console.log(result);


// //         createNext(result, amount, ++i);
// //         if (nextButtonListener) {
// //             next.removeEventListener('click', nextButtonListener);
// //         }
// //         nextButtonListener.addEventListener('click', (event) => {

// //             // room(result, amount);
// //             checkmethod(result.results[i].correct_answer);
// //             if (i === (amount - 1)) {

// //                 setTimeout(() => {
// //                     stopThegame();
// //                     scorecard.innerHTML = `YOUR SCORE WAS : ${score}`;
// //                     scorecard.style.display = 'block';
// //                 }, 2000);


// //             } else {



// //                 setTimeout(() => {
// //                     createNext(result, amount, ++i);

// //                 }, 2000);

// //             }



// //         });
// //         next.addEventListener('click', nextButtonListener);



// //     }
// //     catch (error) {
// //         console.log(error);
// //     }

// // }

// async function gameMain(cat) {
//     let amount = 4;
//     try {
//         const response = await fetch(
//             `https://opentdb.com/api.php?amount=${amount}&category=${cat}&difficulty=medium&type=multiple`
//         );
//         const result = await response.json();
//         next.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
//         console.log(result);

//         createNext(result, amount, ++i);

//         let nextButtonListener;

//         const handleNextClick = (event) => {
//             checkmethod(result.results[i].correct_answer);
//             if (i === amount - 1) {
//                 setTimeout(() => {
//                     stopThegame();
//                     scorecard.innerHTML = `YOUR SCORE WAS: ${score}`;
//                     scorecard.style.display = 'block';
//                 }, 2000);
//             } else {
//                 setTimeout(() => {
//                     createNext(result, amount, ++i);
//                 }, 2000);
//             }

//             event.stopPropagation();
//         };

//         // Remove the previous event listener before adding a new one
//         if (nextButtonListener) {
//             next.removeEventListener('click', nextButtonListener);
//         }

//         // Add the event listener to the next button
//         nextButtonListener = handleNextClick;
//         next.addEventListener('click', nextButtonListener);
//     } catch (error) {
//         console.log(error);
//     }
// }





// function running() {

//     i = -1;
//     score = 0;
//     scoreHead.innerHTML = `Score : ${score}`;
//     tab1.style.display = 'none';
//     scorecard.style.display = 'none';
//     tab2.style.display = 'block';

//     gameMain(list.value);



// }


// // function stopThegame() {
// //     if (nextButtonListener) {
// //         next.removeEventListener('click', nextButtonListener);
// //         nextButtonListener = null;
// //     }
// //     i = -1;
// //     score = 0;
// //     tab1.style.display = 'block';
// //     tab2.style.display = 'none';


// // }
// function stopThegame() {
//     i = -1;
//     score = 0;
//     tab1.style.display = 'block';
//     tab2.style.display = 'none';

//     let nextButtonListener;

//     // Remove the event listener from the next button
//     if (nextButtonListener) {
//         next.removeEventListener('click', nextButtonListener);
//         nextButtonListener = null;
//     }

//     // ...
// }









// test.addEventListener('click', () => {
//     running();
// });


// home.addEventListener('click', () => {
//     stopThegame();

// });


//////////////////////////////////////////////////////////gpt update

const question = document.getElementsByClassName('question')[0];
const scorecard = document.getElementsByClassName('scorecard')[0];
const scoreHead = document.getElementsByClassName('score')[0];
const qLeft = document.getElementsByClassName('q-left')[0];
const home = document.getElementsByClassName('home')[0];
const next = document.getElementsByClassName('next')[0];
const gridItem = document.querySelectorAll('.grid-item');
const test = document.getElementsByClassName('test')[0];
const tab1 = document.getElementsByClassName('tab1')[0];
const tab2 = document.getElementsByClassName('tab2')[0];
const list = document.getElementsByClassName('list')[0];

let score = 0;
let i = -1;
let nextButtonListener;

function checkmethod(order) {
    gridItem.forEach((ele) => {
        ele.classList.remove('right');
        ele.classList.remove('wrong');
    });

    gridItem.forEach((ele) => {
        let select = ele.classList.contains('selected');

        if (ele.innerHTML === order) {
            ele.classList.add('right');
        }

        if (select) {
            if (ele.innerHTML === order) {
                score++;
                scoreHead.innerHTML = `Score: ${score}`;
                ele.classList.add('right');
            } else {
                ele.classList.add('wrong');
            }
        }
    });
}

function selectanim(e) {
    const temp = document.getElementById(e.target.id);

    gridItem.forEach((ele) => {
        ele.classList.remove('selected');
    });

    temp.classList.add('selected');
}

function createNext(result, amount, i) {
    qLeft.innerHTML = `${(i + 1)}  / 20`;
    if (i < amount) {
        let correct_ans = result.results[i].correct_answer;
        let ary = [...result.results[i].incorrect_answers, correct_ans];
        ary.sort(() => 0.5 - Math.random());

        ary.forEach((ele, ind) => {
            gridItem[ind].innerHTML = ele;
            gridItem[ind].classList.remove('selected', 'right', 'wrong');
            gridItem[ind].addEventListener('click', selectanim);
        });

        question.innerHTML = result.results[i].question;
    }

    if (i === amount - 1) {
        next.innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
    }
}

async function gameMain(cat) {
    let amount = 20;

    try {
        const response = await fetch(
            `https://opentdb.com/api.php?amount=${amount}&category=${cat}&difficulty=medium&type=multiple`
        );
        const result = await response.json();
        next.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';


        createNext(result, amount, ++i);

        const handleNextClick = (event) => {
            checkmethod(result.results[i].correct_answer);

            if (i === amount - 1) {
                setTimeout(() => {
                    stopThegame();
                    scorecard.innerHTML = `YOUR SCORE WAS: ${score}`;
                    scorecard.style.display = 'block';
                }, 2000);
            } else {
                setTimeout(() => {
                    createNext(result, amount, ++i);
                }, 2000);
            }

            event.stopPropagation();
        };

        // Remove the previous event listener before adding a new one
        if (nextButtonListener) {
            next.removeEventListener('click', nextButtonListener);
        }

        // Add the event listener to the next button
        nextButtonListener = handleNextClick;
        next.addEventListener('click', nextButtonListener);
    } catch (error) {
        console.log(error);
    }
}

function running() {
    i = -1;
    score = 0;
    scoreHead.innerHTML = `Score: ${score}`;
    tab1.style.display = 'none';
    scorecard.style.display = 'none';
    tab2.style.display = 'block';
    gameMain(list.value);
}

function stopThegame() {
    i = -1;

    tab1.style.display = 'block';
    tab2.style.display = 'none';

    // Remove the event listener from the next button
    if (nextButtonListener) {
        next.removeEventListener('click', nextButtonListener);
        nextButtonListener = null;
    }
}

test.addEventListener('click', () => {
    running();
});

home.addEventListener('click', () => {
    stopThegame();
});


