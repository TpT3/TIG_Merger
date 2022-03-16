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

    const currentState = finish.innerHTML;
    finish.innerHTML = `${currentState}
    <p id="important">Level is merged, now copy it.</p>
    `;

}

clipboardCopy = () => {
    navigator.clipboard.writeText(finalLevel);

    const currentState = finish.innerHTML;
    finish.innerHTML = `${currentState}
    <p id="important">Done!</p>
    `;
}