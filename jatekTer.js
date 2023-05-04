import ELEM from "./TicTacToe.js";
class Jatekter {
    #lepes;
    #aktAllapotlista =[]
    constructor(){
    this.#lepes = 0;
    this.#aktAllapotlista =["","","","","","","","",""]
    const szuloELEM = $("article")
    for (let index = 0; index < 9; index++) {
    const elem = new ELEM(szuloELEM,index);
    }
    $(window).on("elemKattintas",(event) =>{
        console.log(event.detail);
        let aktElem = event.detail;
        if (this.#lepes%2==0){ 
            aktElem.setElem("X");
            this.#aktAllapotlista[aktElem.index]="X";
        }else {
            this.#aktAllapotlista[aktElem.index]="X";
            aktElem.setElem("O");
        }
        this.#lepes++;
        console.log(this.#aktAllapotlista);
        this.ellenorzes();
    });
}
 ellenorzes(){
    return "x";
 }   
    

}
export default Jatekter;