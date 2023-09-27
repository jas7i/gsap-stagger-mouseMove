let circle=document.querySelector('.circle');
let frames=document.querySelectorAll('.frame');
const lerp = (x, y, a) => x * (1 - a) + y * a
// window.addEventListener('mousemove',function(mP){
//     circle.style.transform=`translate(${mP.clientX}px,${mP.clientY}px)`;

// });

// using Gsap


window.addEventListener('mousemove',function(mP){
     gsap.to(circle,{
        x: mP.clientX,
        y: mP.clientY,
        duration:.2,
        ease:Expo
     })
});

frames.forEach(frame => {
    console.log(frame)
    frame.addEventListener('mousemove',function(dets){
           var dims=frame.getBoundingClientRect();
           console.log(dims)
           var xdims=dims.x;
           var ydims=xdims+dims.width;
           console.log(xdims,ydims)
           var zeroone=gsap.utils.mapRange(xdims,ydims,0,1,dets.clientX)

           lerp(-50,50,zeroone);

        gsap.to(circle,{
             scale:6,
            //  backgroundImage:"URL(https://i.pinimg.com/originals/d8/0b/5e/d80b5e69091c368164d9238c59e1427e.gif)",
        })
    
        gsap.to(frame.children,{
            color:"#fff",
            duration:.4,
             y: "-5vw",
             x:lerp(-50,50,zeroone)
        });
    });
    
    frame.addEventListener('mouseleave',function(){
        gsap.to(circle,{
             scale:1
        })
        gsap.to(frame.children,{
            color:"black",
            duration:.4,
            y:0,
            x:0,
        })
    });
});