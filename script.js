document.getElementById('adicionar-disciplina').addEventListener('click', function() {
    const disciplinaDiv = document.createElement('div');
    disciplinaDiv.className = 'disciplina';
    disciplinaDiv.innerHTML = `
        <input type="text" class="disciplina-nome" placeholder="Nome da Disciplina">
        <input type="number" class="disciplina-nota" placeholder="Nota 1">
        <input type="number" class="disciplina-nota" placeholder="Nota 2">
        <button class="remover-disciplina">Remover</button>
    `;
    document.getElementById('disciplinas').appendChild(disciplinaDiv);

    disciplinaDiv.querySelector('.remover-disciplina').addEventListener('click', function() {
        if (document.querySelectorAll('.disciplina').length > 1) {
            disciplinaDiv.remove();
        } else {
            alert('Por favor, mantenha pelo menos uma disciplina.');
        }
    });
});

document.getElementById('calcular-media').addEventListener('click', function() {
    const disciplinas = document.querySelectorAll('.disciplina');
    let resultados = '';

    disciplinas.forEach(disciplina => {
        const nota1 = disciplina.querySelectorAll('.disciplina-nota')[0].value;
        const nota2 = disciplina.querySelectorAll('.disciplina-nota')[1].value;
        if (nota1 && nota2) {
            const media = ((parseFloat(nota1) * 0.4) + (parseFloat(nota2) * 0.6));
            const situacao = media >= 6 ? 'Aprovado(a)' : 'Reprovado(a)';
            const corSituacao = media >= 6 ? 'green' : 'red'; 
            resultados += `
                <p><strong>Disciplina:</strong> ${disciplina.querySelector('.disciplina-nome').value}</p>
                <p><strong>Média:</strong> ${media.toFixed(2)}</p>
                <p><strong>Situação:</strong> <span style="color: ${corSituacao};">${situacao}</span></p>
                <hr>
            `;
        }
    });

    document.getElementById('resultados').innerHTML = resultados;
});
