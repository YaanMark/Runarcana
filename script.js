document.getElementById('foto-personagem').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgPreview = document.getElementById('imagem-preview');
            imgPreview.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    }
});

document.querySelectorAll(".aba-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".aba-btn").forEach(btn => btn.classList.remove("active"));
        document.querySelectorAll(".aba-content").forEach(content => content.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(button.dataset.aba).classList.add("active");
    });
});

//Inicio moldal ataque
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".close");
const cancelButton = document.querySelector(".cancel");

openModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

cancelButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const attackName = document.getElementById("attackName").value;
    const dano = document.getElementById("dano").value;
    const critico = document.getElementById("critico").value;
    const multiplicador = document.getElementById("multiplicador").value;
    const anotacoes = document.getElementById("anotacoes").value;

    if (!attackName || !dano || !critico || !multiplicador) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
    }

    const attackList = document.getElementById("attackList");

    const attackItem = document.createElement("div");
    attackItem.classList.add("attack-item");

    attackItem.innerHTML = 
                `
                <div class="attack-header">
                    <button class="toggle-details">▼</button>
                    <strong>${attackName}</strong>
                    <span class="attack-info">
                        <span><b>Dano:</b> ${dano}</span> |
                        <span><b>Crítico:</b> ${critico}</span> |
                        <span><b>Mutiplicador:</b> x${multiplicador}</span>
                    </span>
                </div>
                <div class="attack-details" style="display: none;">
                    <p><b>Anotações:</b> ${anotacoes || "Nenhuma anotação."}</p>
                    <button class="removeAttack">Remover</button>
                </div>
                `
            ;

    attackList.appendChild(attackItem);

    modal.style.display = "none";

    document.querySelector("form").reset();

    attackItem.querySelector(".removeAttack").addEventListener("click", function () {
        attackItem.remove();
    });

    attackItem.querySelector(".toggle-details").addEventListener("click", function () {
        const details = attackItem.querySelector(".attack-details");
        details.style.display = details.style.display === "none" ? "block" : "none";
    });
});

//Inicio do modal de skill
document.addEventListener("DOMContentLoaded", function () {
    const openSkillModal = document.getElementById("openSkillModal");
    const skillModal = document.getElementById("skillModal");
    const closeSkillModal = skillModal.querySelector(".close");
    const cancelSkillButton = skillModal.querySelector(".cancel");
    const skillForm = document.getElementById("skillForm");
    const skillList = document.getElementById("skillList");

    openSkillModal.addEventListener("click", function () {
        skillModal.style.display = "flex";
    });

    closeSkillModal.addEventListener("click", function () {
        skillModal.style.display = "none";
    });

    cancelSkillButton.addEventListener("click", function () {
        skillModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === skillModal) {
            skillModal.style.display = "none";
        }
    });

    skillForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const skillName = document.getElementById("skillName").value;
        const skillDescription = document.getElementById("skillDescription").value;

        if (!skillName || !skillDescription) {
            alert("Por favor, preencha todos os campos obrigatórios!");
            return;
        }

        const skillItem = document.createElement("div");
        skillItem.classList.add("skill-item");

        skillItem.innerHTML = `
                    <div class="skill-header">
                        <button class="toggle-skill">▼</button>
                        <strong>${skillName}</strong>
                    </div>
                    <div class="skill-details" style="display: none;">
                        <p>${skillDescription}</p>
                    <button class="removeSkill">Remover</button>
                    </div>
                `;

        skillList.appendChild(skillItem);
        skillModal.style.display = "none";
        skillForm.reset();

        skillItem.querySelector(".removeSkill").addEventListener("click", function () {
            skillItem.remove();
        });

        const toggleButton = skillItem.querySelector(".toggle-skill");
        const details = skillItem.querySelector(".skill-details");

        toggleButton.addEventListener("click", function () {
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                toggleButton.style.transform = "rotate(180deg)";
            } else {
                details.style.display = "none";
                toggleButton.style.transform = "rotate(0deg)";
            }
        });
    });
});

//Inicio modal magias
document.addEventListener("DOMContentLoaded", function () {
    const openMagicModal = document.getElementById("openMagicModal");
    const magicModal = document.getElementById("magicModal");
    const closeMagicModal = magicModal.querySelector(".close");
    const cancelMagicButton = magicModal.querySelector(".cancel");
    const magicForm = document.getElementById("magicForm");
    const magicList = document.getElementById("magicList");

    // Abre o modal
    openMagicModal.addEventListener("click", function () {
        magicModal.style.display = "flex";
    });

    // Fecha o modal ao clicar no "X"
    closeMagicModal.addEventListener("click", function () {
        magicModal.style.display = "none";
    });

    // Fecha o modal ao clicar no botão "Cancelar"
    cancelMagicButton.addEventListener("click", function () {
        magicModal.style.display = "none";
    });

    // Fecha o modal ao clicar fora da área de conteúdo
    window.addEventListener("click", function (event) {
        if (event.target === magicModal) {
            magicModal.style.display = "none";
        }
    });

    // Adiciona uma magia à lista quando o formulário é enviado
    magicForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const magicName = document.getElementById("magicName").value;
        const magicLevel = document.getElementById("magicLevel").value;
        const magicCastingTime = document.getElementById("magicCastingTime").value;
        const magicComponents = document.getElementById("magicComponents").value;
        const magicDuration = document.getElementById("magicDuration").value;
        const magicDescription = document.getElementById("magicDescription").value;

        if (!magicName || !magicLevel || !magicCastingTime || !magicComponents || !magicDuration || !magicDescription) {
            alert("Por favor, preencha todos os campos obrigatórios!");
            return;
        }

        const magicItem = document.createElement("div");
        magicItem.classList.add("magic-item");

        magicItem.innerHTML = `
            <div class="magic-header">
                <button class="toggle-magic">▼</button>
                <strong>${magicName} (Nível ${magicLevel})</strong>
            </div>
            <div class="magic-details" style="display: none;">
                <p><b>Tempo de Conjuração:</b> ${magicCastingTime}</p>
                <p><b>Componentes:</b> ${magicComponents}</p>
                <p><b>Duração:</b> ${magicDuration}</p>
                <p><b>Descrição:</b> ${magicDescription}</p>
                <button class="removeMagic">Remover</button>
            </div>
        `;

        magicList.appendChild(magicItem);
        magicModal.style.display = "none";
        magicForm.reset();

        // Botão para remover magia
        magicItem.querySelector(".removeMagic").addEventListener("click", function () {
            magicItem.remove();
        });

        // Botão para expandir/recolher detalhes da magia
        const toggleButton = magicItem.querySelector(".toggle-magic");
        const details = magicItem.querySelector(".magic-details");

        toggleButton.addEventListener("click", function () {
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                toggleButton.style.transform = "rotate(180deg)";
            } else {
                details.style.display = "none";
                toggleButton.style.transform = "rotate(0deg)";
            }
        });
    });
});


function updateModfiers() {
    var strScore = document.getElementById("strScore").value;
    document.getElementById("strMod").value = Math.floor((strScore - 10) / 2);
    var dexScore = document.getElementById("dexScore").value;
    document.getElementById("dexMod").value = Math.floor((dexScore - 10) / 2);
    var consScore = document.getElementById("consScore").value;
    document.getElementById("consMod").value = Math.floor((consScore - 10) / 2);
    var intScore = document.getElementById("intScore").value;
    document.getElementById("intMod").value = Math.floor((intScore - 10) / 2);
    var wisScore = document.getElementById("wisScore").value;
    document.getElementById("wisMod").value = Math.floor((wisScore - 10) / 2);
    var charScore = document.getElementById("charScore").value;
    document.getElementById("charMod").value = Math.floor((charScore - 10) / 2);

    setSkills()
};

function updateProfBonus() {
    var playerLevel = parseInt(document.getElementById("lvl").value);

    if (playerLevel >= 17) {
        document.getElementById("prof_bonus").value = 6;
    } else if (playerLevel >= 13) {
        document.getElementById("prof_bonus").value = 5;
    } else if (playerLevel >= 9) {
        document.getElementById("prof_bonus").value = 4;
    } else if (playerLevel >= 5) {
        document.getElementById("prof_bonus").value = 3;
    } else {
        document.getElementById("prof_bonus").value = 2;
    }

    setSkills()
}

function setSkills() {
    var profBonus = parseInt(document.getElementById("prof_bonus").value) || 0;
    var modifiers = {
        str: parseInt(document.getElementById("strMod").value) || 0,
        dex: parseInt(document.getElementById("dexMod").value) || 0,
        cons: parseInt(document.getElementById("consMod").value) || 0,
        int: parseInt(document.getElementById("intMod").value) || 0,
        wis: parseInt(document.getElementById("wisMod").value) || 0,
        char: parseInt(document.getElementById("charMod").value) || 0
    };

    // Lista de perícias associadas a cada atributo
    var skills = {
        acro: "dex",    // Acrobacia
        arca: "int",    // Arcanismo
        athl: "str",    // Atletismo
        act: "char",   // Atuação
        dece: "char",   // Enganação
        stea: "dex",    // Furtividade
        hist: "int",    // História
        inti: "char",   // Intimidação
        intu: "wis",    // Intuição
        inv: "int",     // Investigação
        ani: "wis",     // Lidar com Animais
        med: "wis",     // Medicina
        nat: "int",     // Natureza
        perc: "wis",    // Percepção
        pers: "char",   // Persuasão
        pres: "dex",    // Prestidigitação
        rel: "int",     // Religião
        surv: "wis",    // Sobrevivência
        tec: "int"      // Tecnologia
    };

    // Itera sobre todas as perícias e calcula os valores
    for (var skill in skills) {
        var mod = modifiers[skills[skill]]; // Pega o modificador correto do atributo associado
        var prof = document.getElementById(skill + "Prof").checked;
        var spec = document.getElementById(skill + "Spec").checked;
        var finalScore = mod;

        if (prof) finalScore += profBonus;
        if (spec) finalScore += profBonus; // Especialização dobra o bônus

        document.getElementById(skill + "Score").value = finalScore;
    }
}

function updateHealthBar() {

    var currentHP = parseInt(document.getElementById("currenthp").value) || 0;
    var maxHP = parseInt(document.getElementById("maxHP").value) || 1;
    var tempHP = parseInt(document.getElementById("tempHP").value) || 0;

    var totalHP = maxHP;

    if (currentHP == maxHP) {
        totalHP += tempHP;
    }

    var healthPercentage = (currentHP / totalHP) * 100;
    var tempHealthPercentage = ((currentHP + tempHP) / totalHP) * 100;


    document.getElementById("healthBar").style.width = healthPercentage + "%";


    if (tempHP > 0) {
        document.getElementById("tempHealthBar").style.width = tempHealthPercentage + "%";
    } else {
        document.getElementById("tempHealthBar").style.width = "0%";
    }



}

function updateManaBar() {
    var currentMana = parseInt(document.getElementById("currentMana").value) || 0;
    var maxMana = parseInt(document.getElementById("maxMana").value) || 1;

    // Garante que a vida atual não seja maior que o máximo
    if (currentMana > maxMana) {
        currentMana = maxMana;
        document.getElementById("currentMana").value = maxMana;
    }

    // Calcula a porcentagem da barra de vida
    var manaPercentage = (currentMana / maxMana) * 100;

    // Atualiza a largura da barra de vida
    document.getElementById("manaBar").style.width = manaPercentage + "%";

}

function changeHP(amount) {
    var currentHPInput = document.getElementById("currenthp");
    var tempHPInput = document.getElementById("tempHP");

    var currentHP = parseInt(currentHPInput.value) || 0;
    var tempHP = parseInt(tempHPInput.value) || 0;

    if (amount < 0) {
        var damage = Math.abs(amount);
        if (tempHP > 0) {
            if (damage <= tempHP) {
                tempHP -= damage;
                damage = 0;
            } else {
                damage -= tempHP;
                tempHP = 0;
            }
        }
        currentHP -= damage;
    } else {
        currentHP += amount;
    }

    var maxHP = parseInt(document.getElementById("maxHP").value);
    if (currentHP > maxHP) currentHP = maxHP;
    if (currentHP < 0) currentHP = 0;

    currentHPInput.value = currentHP;
    tempHPInput.value = tempHP;
    updateHealthBar();
}

function changeMana(amount) {
    var currentManaInput = document.getElementById("currentMana");
    var newMana = parseInt(currentManaInput.value) + amount;

    // Garante que a vida não fique abaixo de 0 ou acima do máximo
    var maxMana = parseInt(document.getElementById("maxMana").value);
    if (newMana > maxMana) newMana = maxMana;
    if (newMana < 0) newMana = 0;

    currentManaInput.value = newMana;
    updateManaBar();
}

function changeToFury() {
    const checkboxFury = document.getElementById('isFury');
    const checkboxKi = document.getElementById('isKi');
    const text = document.getElementById('manaText');

    if (checkboxFury.checked) {
        checkboxKi.checked = false
        text.textContent = "Ira:";
        document.getElementById('manaBar').style.backgroundColor = "rgb(57, 0, 5)";
    } else {
        text.textContent = "Mana:";
        document.getElementById('manaBar').style.backgroundColor = "rgb(0, 109, 192)";
    }
}

function changeToKi() {
    const checkboxFury = document.getElementById('isFury');
    const checkboxKi = document.getElementById('isKi');
    const text = document.getElementById('manaText');

    if (checkboxKi.checked) {
        checkboxFury.checked = false
        text.textContent = "Ki:";
        document.getElementById('manaBar').style.backgroundColor = "rgb(212, 108, 5)";
    } else {
        text.textContent = "Mana:";
        document.getElementById('manaBar').style.backgroundColor = "rgb(0, 109, 192)";
    }
}

function levelChange() {
    updateProfBonus();
    setSkills();
}