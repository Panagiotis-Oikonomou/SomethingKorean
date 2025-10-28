const path = window.location.pathname;
console.log("Full path:", path);
const parts = path.split('/').filter(Boolean);
const folderName = parts[parts.length - 2];
console.log("Detected folder:", folderName);

if(folderName == 'auxiliary'){
    fetching('asideAuxiliary.html');
}
else if(folderName == 'because'){
    fetching('asideBecause.html');
}
else if(folderName == 'causative'){
    fetching('asideCausative.html');
}
else if(folderName == 'connectors'){
    fetching('asideConnectors.html');
}
else if(folderName == 'endings'){
    fetching('asideEndings.html');
}
else if(folderName == 'future'){
    fetching('asideFuture.html');
}
else if(folderName == 'grammaticalExp'){
    fetching('asideGrammaticalExp.html');
}
else if(folderName == 'indirectQuot'){
    fetching('asideIndirectQuot.html');
}
else if(folderName == 'modifying'){
    fetching('asideModifying.html');
}
else if(folderName == 'particles'){
    fetching('asideParticles.html');
}
else if(folderName == 'questionCounter'){
    fetching('asideQuestionCounter.html');
}
else if(folderName == 'solo'){
    fetching('asideSolo.html');
}
else if(folderName == 'verbconstruction'){
    fetching('asideVerbConstruction.html');
}
else if(folderName == 'verbtonoun'){
    fetching('asideVerbToNoun.html');
}


function fetching(f) {
    fetch(f)
    .then(response => response.text())
    .then(html => {
        document.querySelector('.aside').innerHTML = html;
        // document.getElementById('sidebar-container').innerHTML = html;
    })
    .catch(err => {
        console.error('Failed to load sidebar:', err);
    });
}