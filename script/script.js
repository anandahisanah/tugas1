var i = 0, text;
text = "Website ini dibuat untuk memenuhi tugas dari Dosen Jamal, Mata Kuliah Pemrograman Web. Website ini menggunakan CSS dan Javascript serta Bootstrap versi 5"

function writing() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(writing, 80);
    }
}
writing();