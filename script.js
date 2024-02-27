function toggleMenu(){
    const menu=document.querySelector(".menu_links");
    const icon=document.querySelector(".hamburger_icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
let html_number=document.getElementById("html_number");
let counter_1=0;
setInterval(()=>{
    if(counter_1==80){
        clearInterval();
    }
    else{
        counter_1+=1;
        html_number.innerHTML=counter_1+"%";
    }
},30)

let css_number=document.getElementById("css_number");
let counter_2=0;
setInterval(()=>{
    if(counter_2==75){
        clearInterval();
    }
    else{
        counter_2+=1;
        css_number.innerHTML=counter_2+"%";
    }
},30)
let js_number=document.getElementById("js_number");
let counter_3=0;
setInterval(()=>{
    if(counter_3==60){
        clearInterval();
    }
    else{
        counter_3+=1;
        js_number.innerHTML=counter_3+"%";
    }
},30)
let c_number=document.getElementById("c_number");
let counter_4=0;
setInterval(()=>{
    if(counter_4==80){
        clearInterval();
    }
    else{
        counter_4+=1;
        c_number.innerHTML=counter_4+"%";
    }
},30)
let cpp_number=document.getElementById("cpp_number");
let counter_5=0;
setInterval(()=>{
    if(counter_5==90){
        clearInterval();
    }
    else{
        counter_5+=1;
        cpp_number.innerHTML=counter_5+"%";
    }
},30)
let java_number=document.getElementById("java_number");
let counter_6=0;
setInterval(()=>{
    if(counter_6==85){
        clearInterval();
    }
    else{
        counter_6+=1;
        java_number.innerHTML=counter_6+"%";
    }
},30)
let py_number=document.getElementById("py_number");
let counter_7=0;
setInterval(()=>{
    if(counter_7==60){
        clearInterval();
    }
    else{
        counter_7+=1;
        py_number.innerHTML=counter_7+"%";
    }
},30)
let r_number=document.getElementById("r_number");
let counter_8=0;
setInterval(()=>{
    if(counter_8==40){
        clearInterval();
    }
    else{
        counter_8+=1;
        r_number.innerHTML=counter_8+"%";
    }
},30)

const {
    gsap: { registerPlugin, set, to, timeline },
    MorphSVGPlugin,
    Draggable } =
    window;
    registerPlugin(MorphSVGPlugin);

    // Used to calculate distance of "tug"
    let startX;
    let startY;

    const AUDIO = {
    CLICK: new Audio('https://assets.codepen.io/605876/click.mp3') };

    const STATE = {
    ON: false };

    const CORD_DURATION = 0.1;

    const CORDS = document.querySelectorAll('.toggle-scene__cord');
    const HIT = document.querySelector('.toggle-scene__hit-spot');
    const DUMMY = document.querySelector('.toggle-scene__dummy-cord');
    const DUMMY_CORD = document.querySelector('.toggle-scene__dummy-cord line');
    const PROXY = document.createElement('div');
    // set init position
    const ENDX = DUMMY_CORD.getAttribute('x2');
    const ENDY = DUMMY_CORD.getAttribute('y2');
    const RESET = () => {
    set(PROXY, {
        x: ENDX,
        y: ENDY });

    };

    RESET();

    const CORD_TL = timeline({
    paused: true,
    onStart: () => {
        STATE.ON = !STATE.ON;
        // set(document.documentElement, { '--on': STATE.ON ? 0 : 1 });
        set([DUMMY, HIT], { display: 'none' });
        set(CORDS[0], { display: 'block' });
        AUDIO.CLICK.play();
    },
    onComplete: () => {
        set([DUMMY, HIT], { display: 'block' });
        set(CORDS[0], { display: 'none' });
        RESET();
    } });


    for (let i = 1; i < CORDS.length; i++) {
    CORD_TL.add(
    to(CORDS[0], {
        morphSVG: CORDS[i],
        duration: CORD_DURATION,
        repeat: 1,
        yoyo: true }));


    }

    Draggable.create(PROXY, {
    trigger: HIT,
    type: 'x,y',
    onPress: e => {
        startX = e.x;
        startY = e.y;
    },
    onDrag: function () {
        set(DUMMY_CORD, {
        attr: {
            x2: this.x,
            y2: this.y } });


    },
    onRelease: function (e) {
        if(currMode==="light"){
            currMode="dark";
            set(document.documentElement, { '--on':  0 });
            document.querySelector("body").style.backgroundColor="black";
            document.querySelector("body").style.color="white";
            document.querySelector(".title").style.color="white";
            document.querySelector(".section_text_p1").style.color="rgb(194, 194, 194)";
            document.querySelector(".section_text_p2").style.color="rgb(194, 194, 194)";
            document.querySelector(".hamburger_span").style.backgroundColor="white";
            document.querySelector("#social").style.backgroundColor="white";
            document.querySelector(".icon_arrow").style.backgroundColor="white";
            document.querySelector(".icon_arrow").style.borderRadius="50%";
            document.querySelector(".icon_arrow").style.padding="3px";
            document.querySelector(".section_text_p3").style.color="rgb(194, 194, 194)";
            document.querySelector(".details_container").style.border="0.1rem solid white";
            document.querySelector("#details_container_2").style.border="0.1rem solid white";
            document.querySelector(".details_container_p1").style.color="rgb(194, 194, 194)";
            document.querySelector(".details_container_p2").style.color="rgb(194, 194, 194)";
            document.querySelector(".details_container_p3").style.color="rgb(194, 194, 194)";
            document.querySelector("#about_arrow").style.borderRadius="50%";
            document.querySelector("#about_arrow").style.padding="3px";
            document.querySelector("#about_arrow").style.backgroundColor="white";
            document.querySelector("#nav_h_1").style.backgroundColor="white";
            document.querySelector("#nav_h_1").style.color="black";
            document.querySelector("#nav_h_2").style.backgroundColor="white";
            document.querySelector("#nav_h_2").style.color="black"; 
            document.querySelector("#nav_h_3").style.backgroundColor="white";
            document.querySelector("#nav_h_3").style.color="black";
            document.querySelector("#nav_h_4").style.backgroundColor="white";
            document.querySelector("#nav_h_4").style.color="black";
            document.querySelector("#section_text_p1_id").style.color="rgb(194, 194, 194)";
            document.querySelector("#skills_arrow").style.borderRadius="50%";
            document.querySelector("#skills_arrow").style.padding="3px";
            document.querySelector("#skills_arrow").style.backgroundColor="white";
            document.querySelector("#html_number").style.color="white";
            document.querySelector("#cpp_number").style.color="white";
            document.querySelector("#c_number").style.color="white";
            document.querySelector("#py_number").style.color="white";
            document.querySelector("#js_number").style.color="white";
            document.querySelector("#java_number").style.color="white";
            document.querySelector("#css_number").style.color="white";
            document.querySelector("#r_number").style.color="white";
            document.querySelector("#section_text_p1_id_2").style.color="rgb(194, 194, 194)";
            document.querySelector("#project_p_id_1").style.color="white";
            document.querySelector("#project_p_id_2").style.color="white";
            document.querySelector("#projects_arrow").style.borderRadius="50%";
            document.querySelector("#projects_arrow").style.padding="3px";
            document.querySelector("#projects_arrow").style.backgroundColor="white";
            document.querySelector("#section_text_p1_3").style.color="rgb(194, 194, 194)";

        }
        else if(currMode==="dark"){
            currMode="light";
            set(document.documentElement, { '--on':  1});
            document.querySelector("body").style.backgroundColor="aliceblue";
            document.querySelector("body").style.color="black";
            document.querySelector(".hamburger_icon").style.color="black";
            document.querySelector(".title").style.color="black";
            document.querySelector(".section_text_p1").style.color="rgb(50, 54, 54)";
            document.querySelector(".section_text_p2").style.color="rgb(50, 54, 54)";
            document.querySelector(".hamburger_span").style.backgroundColor="black";
            document.querySelector(".section_text_p3").style.color="rgb(50, 54, 54)";
            document.querySelector(".details_container").style.border="0.1rem solid black";
            document.querySelector("#details_container_2").style.border="0.1rem solid black";
            document.querySelector(".details_container_p1").style.color="rgb(50, 54, 54)";
            document.querySelector(".details_container_p2").style.color="rgb(50, 54, 54)";
            document.querySelector(".details_container_p3").style.color="rgb(50, 54, 54)";
            document.querySelector("#nav_h_1").style.backgroundColor="black";
            document.querySelector("#nav_h_1").style.color="white";
            document.querySelector("#nav_h_2").style.backgroundColor="black";
            document.querySelector("#nav_h_2").style.color="white"; 
            document.querySelector("#nav_h_3").style.backgroundColor="black";
            document.querySelector("#nav_h_3").style.color="white";
            document.querySelector("#nav_h_4").style.backgroundColor="black";
            document.querySelector("#nav_h_4").style.color="white";
            document.querySelector("#section_text_p1_id").style.color="rgb(50, 54, 54)";
            document.querySelector("#html_number").style.color="black";
            document.querySelector("#cpp_number").style.color="black";
            document.querySelector("#c_number").style.color="black";
            document.querySelector("#py_number").style.color="black";
            document.querySelector("#js_number").style.color="black";
            document.querySelector("#java_number").style.color="black";
            document.querySelector("#css_number").style.color="black";
            document.querySelector("#r_number").style.color="black";
            document.querySelector("#section_text_p1_id_2").style.color="rgb(50, 54, 54)";
            document.querySelector("#project_p_id_1").style.color="black";
            document.querySelector("#project_p_id_2").style.color="black";
            document.querySelector("#section_text_p1_3").style.color="rgb(50, 54, 54)";

        }
        console.log(currMode);
        const DISTX = Math.abs(e.x - startX);
        const DISTY = Math.abs(e.y - startY);
        const TRAVELLED = Math.sqrt(DISTX * DISTX + DISTY * DISTY);
        to(DUMMY_CORD, {
        attr: { x2: ENDX, y2: ENDY },
        duration: CORD_DURATION,
        onComplete: () => {
           
            if (TRAVELLED > 50) {
            CORD_TL.restart();
            } else {
            RESET();
            }
        } });

    } });
    let currMode="light";

