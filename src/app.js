var szamolGomb = document.querySelector("#szamolGomb");
var eredmeny = document.querySelector("#eredmeny");
var aoldal = document.querySelector("#aoldal");
var boldal = document.querySelector("#boldal");
var coldal = document.querySelector("#coldal");
var doldal = document.querySelector("#doldal");
szamolGomb.addEventListener("click", function () {
    var aoldalNum = Number(aoldal.value);
    var boldalNum = Number(boldal.value);
    var coldalNum = Number(coldal.value);
    var doldalNum = Number(boldal.value);
    var area = szamolTerulet(aoldalNum, boldalNum, coldalNum, doldalNum);
    eredmeny.textContent = "Terület: " + String(area);
    aoldal.value = " ";
    boldal.value = " ";
    coldal.value = " ";
    doldal.value = " ";
});
function szamolTerulet(aoldal, boldal, coldal, doldal) {
    var terulet = (aoldal + coldal) / (4 * (aoldal - coldal)) *
        Math.sqrt((aoldal + boldal - coldal + doldal) *
            (aoldal - boldal - coldal + doldal) *
            (aoldal + boldal - coldal - doldal) *
            (-aoldal + boldal + coldal + doldal));
    return terulet;
}
