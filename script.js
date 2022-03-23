let finalLevel;

const partsArea = document.getElementById('parts');
const finish = document.getElementById('finish');

let partNum = 1;
addPart = () => {
    const newPart = document.createElement('div');
    newPart.innerHTML = `  
    <p>Enter Part ${partNum}:</p><textarea name="part${partNum}" id="part${partNum}" cols="60" rows="5"></textarea>`;
    partNum++
    partsArea.before(newPart);
}


merge = () => {
    try {
        let name = document.getElementById('name').value;
        let inputParts = [];

        let partNum = 1;
        while (true) {
            const currentPart = document.getElementById('part' + partNum);
            if (currentPart != null) {
                inputParts.push(JSON.parse(currentPart.value));
                partNum++;
            } else break;
        }

        finalLevel = m.mergeMain(name, inputParts);
        outputText("Level is merged, now copy it.", "rgb(21, 255, 0)");

    } catch (e) {
        outputText(e + ", check your parts", "red");
    }

}

clipboardCopy = () => {
    navigator.clipboard.writeText(finalLevel);
    outputText("Done!", "rgb(21, 255, 0)");
}

const logs = document.getElementById('logs');
outputText = (text, color) => {
    logs.innerHTML = `<p id="important" style="color:${color};">${text}</p>`;
}