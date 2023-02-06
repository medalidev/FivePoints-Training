var A = Number(prompt("donner l'entier A"));
while (A < 0) {
    A = Number(prompt("donner l'entier A"));
}
var a = A;
var B = Number(prompt("donner l'entier B"));
while (B < 0) {
    B = Number(prompt("donner l'entier B"));
}
var b = B;
while (A != 0 && B != 0) {
    if (A > B) {
        A = A - B;
    }
    else
        B = B - A;
}
if (A == 0) {
    alert("le PGCD de " + a + " et " + b + " est: " + B);
}
if (B == 0) {
    alert("le PGCD de " + a + " et " + b + " est: " + A);
}
