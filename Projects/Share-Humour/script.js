

    let $ = document.querySelector.bind(document)
    let $on = document.addEventListener.bind(document)

    let body = $('body')



    let xmouse , ymouse;


    $on("mousemove", function(e){
        xmouse = e.clientX || e.pageX;
        ymouse = e.clientY || e.pageY

        console.log("mouse x position " , xmouse)
    console.log("mouse y position " , ymouse)
    })


    let ball = $("#ball")

    let x ,y , dx , dy ;
    let key = -1; 


    let followMouse = ()=>{


        key = requestAnimationFrame(followMouse)
    
        if(!x || !y){

            x = xmouse;  // setting up the initial position
            y = ymouse;


        }

        else { 

            console.log(xmouse , ymouse ,  x , y)

            dx = (xmouse - x) * 0.125
            dy = (ymouse - y) *0.125

            if(Math.abs(dx) + Math.abs(dy) < 0.1){
                x= xmouse
                y = ymouse;

            }else{
                x = x +  dx; 
                y = y +  dy;
            }
        }

        ball.style.left =  x + "px";
        ball.style.top = y + "px"



    }

    window.onload = followMouse




    /*   ############ full algorithmm #########33

    🧠 🧩 Smooth Mouse Follow — Clear Algorithm
🎯 Step 1 — Prepare Positions

Keep track of mouse position.

Keep track of ball position.

At start, ball has no position yet.

🎯 Step 2 — Listen to Mouse Movement

Whenever the mouse moves:

update latest mouse X

update latest mouse Y

👉 always know where mouse currently is.

🎯 Step 3 — Start Animation Loop

Ask browser to run an update every frame.

This loop repeats forever:

update → draw → next frame → update → draw

🎯 Step 4 — First Frame Setup

When animation starts:

IF ball has no position:

place ball exactly at mouse

skip smooth movement for now

👉 prevents jumping from random location.

🎯 Step 5 — Calculate Distance

Every frame:

measure how far ball is from mouse horizontally

measure how far ball is from mouse vertically

This gives remaining gap.

🎯 Step 6 — Decide Movement Size

take a small percentage of remaining distance

this becomes this frame’s movement amount

Meaning:

big gap → big movement
small gap → small movement

🎯 Step 7 — Check if Almost Reached

If movement amount is extremely tiny:

snap ball exactly to mouse

stop micro shaking

🎯 Step 8 — Otherwise Move Smoothly

If still far:

move ball a little closer using movement amount

🎯 Step 9 — Update Visual Position

place ball on screen using new X and Y

🎯 Step 10 — Repeat Next Frame

request next animation frame

go back to Step 5

Loop forever.

🧠 Ultra-Simple Summary Version
1. Track mouse
2. Start animation loop
3. If first frame → place ball
4. Measure distance to mouse
5. Move small % toward mouse
6. If very close → snap
7. Update screen
8. Repeat




    */
