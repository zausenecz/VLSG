var lngMain = document.getElementById('lngMain');

var lngVoice = document.getElementById('lngVoice');

function download() {
    if (lngMain.options[lngMain.selectedIndex].value == "en" && lngVoice.options[lngVoice.selectedIndex].value == "jp")
        window.open("https://github.com/zausenecz/VLSG/raw/main/en-jp.zip");
    else
    if (lngMain.options[lngMain.selectedIndex].value == "en" && lngVoice.options[lngVoice.selectedIndex].value == "ru")
        window.open("https://github.com/zausenecz/VLSG/raw/main/en-ru.zip");
    else
        alert("Error ._. Contact with developer")
}
