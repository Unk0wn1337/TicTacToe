class ELEM{
    #jatekosPontszam;
    constructor(szuloELEM, index){
    this.index = index;    
    szuloELEM.append(`<div class="Elem"><p></p></div>`)
    this.divElem = $("article div:last-child");
    this.pElem = $("article div:last-child p");
    this.divElem.on("click", () =>  {
            //this.setElem("X");
            this.esemenyTrigger()
            
        })

    }
    setElem(ertek){
        this.pElem.text(ertek);
    }

    esemenyTrigger(){
        const esemeny = new CustomEvent("elemKattintas", {detail:this });
        window.dispatchEvent(esemeny);
    }
}
export default ELEM;



    