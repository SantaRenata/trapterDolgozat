/*
* File: app.ts
* Author: Sánta Renáta Diána
* Copyright: 2022, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2022-10-26
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/
const szamolGomb = document.querySelector("#szamolGomb");
const eredmeny = document.querySelector("#eredmeny");
const aoldal = document.querySelector("#aoldal") as HTMLInputElement;
const boldal = document.querySelector("#boldal") as HTMLInputElement;
const coldal = document.querySelector("#coldal") as HTMLInputElement;
const doldal = document.querySelector("#doldal") as HTMLInputElement;

szamolGomb.addEventListener("click", () => {
    let aoldalNum: number = Number(aoldal.value);
    let boldalNum: number = Number(boldal.value);
    let coldalNum: number = Number(coldal.value);
    let doldalNum: number = Number(boldal.value);
    let area = szamolTerulet(aoldalNum,boldalNum,coldalNum, doldalNum);
    eredmeny.textContent = "Terület: " + String(area);
    aoldal.value = " ";
    boldal.value = " ";
    coldal.value = " ";
    doldal.value = " ";
});

function szamolTerulet(aoldal:number, boldal:number, coldal:number, doldal:number):number{
    let terulet = (aoldal+coldal)/(4*(aoldal-coldal))*
    Math.sqrt(
        (aoldal+boldal-coldal+doldal)*
        (aoldal-boldal-coldal+doldal)*
        (aoldal+boldal-coldal-doldal)*
        (-aoldal+boldal+coldal+doldal)
        );
    return terulet;
}