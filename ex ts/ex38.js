var M = String(prompt("donner un mot"));
while (M.length > 15) {
    M = String(prompt("donner un mot"));
}
var ch = "";
for (var i = 0; i < M.length; i++) {
    ch = M[i] + ch;
}
if (M == ch) {
    alert(M + " est un mot PALINDROME");
}
else
    alert(M + " n'est pas un mot PALINDROME");
