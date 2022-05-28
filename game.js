
    const box=document.querySelector("#container");
    const boxStyle=getComputedStyle(box);
    const boxWidth=Number(boxStyle.width.replace("px",""))-2;
    const boxHeight=Number(boxStyle.width.replace("px",""));
    const restartBtn=document.querySelector(".restart");
    const quiteBtn=document.querySelector(".quit");
    let tiles;
    let count=2;
    let tileNo=0;
    let randomTile;
    let chances=0;


    function tileAdd(){
                tileNo=0;
                tiles=document.querySelectorAll(".tile");
                for( const tile of tiles){
                    tile.parentNode.removeChild(tile);
                }
           

                for(let i=0;i<count**2;i++){

                tileNo +=1;
                const newTile=document.createElement("div");
                newTile.setAttribute('class', `tile tile${tileNo}` );
                
                newTile.style.width=`${(boxWidth/count)-2}px`;
                newTile.style.height=`${(boxHeight/count)-2}px`;
                box.appendChild(newTile);
                 
                }
            
            chances=Math.floor((count**2)/2)-Math.floor(((count-1)**2)/2);
            displayChances();
            count+=1;
            selectRandom();

            }
    function selectRandom(){

        const random=Math.floor(Math.random()*tileNo+1);
        randomTile=document.querySelector(`.tile.tile${random}`);
        
        }
    function displayChances(){
        for (let i=0;i<chances;i++){
            const chance=document.createElement("div");
            document.querySelector(".chances").appendChild(chance);
        }

    }
    tileAdd();
    box.addEventListener("click",e=>{
        if(e.target===randomTile ){

            e.target.style.backgroundColor="rgba(31, 210, 74, 0.6)";
            tileAdd();
        }
        else if(e.target!=document.querySelector("#container"))
        {

            e.target.style.backgroundColor="white";   
        }


    });
    restartBtn.addEventListener("click",()=>{
        location.replace("game1.html");
    }) 
    quiteBtn.addEventListener("click",()=>{
        location.replace("index1.html");
    });




