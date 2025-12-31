// Records Database
const records = [
  {
    id: 1,
    title: "O Sinal da Estação",
    teaser:
      "Uma transmissão de rádio que só pode ser ouvida à meia-noite em estações de trem abandonadas. Quem ouve até o fim nunca volta para casa no mesmo dia.",
    tags: ["Áudio", "Tempo", "Desaparecimento"],
    fullText:
      "Em 2007, seis pessoas relataram ter ouvido a mesma transmissão em diferentes estações desativadas. A voz descrevia em detalhes a morte de cada ouvinte. Três delas nunca foram encontradas. As outras três morreram exatamente como descrito, mas todas as datas de óbito precedem a noite em que ouviram o sinal.",
  },
  {
    id: 2,
    title: "Gravações da Enfermaria 7",
    teaser:
      "Fitas cassete encontradas em um hospital psiquiátrico desativado contêm sessões de terapia. O problema: os pacientes descrevem eventos que ainda não aconteceram.",
    tags: ["Hospital", "Profecia", "Loucura"],
    fullText:
      "As fitas foram catalogadas entre 2003 e 2005. Em uma delas, um paciente descreve um acidente de ônibus com 23 vítimas que ocorreu três anos depois, na mesma data mencionada. Outros relatos coincidem com desastres locais. A enfermaria foi demolida em 2006. As fitas desapareceram do arquivo municipal em circunstâncias não esclarecidas.",
  },
  {
    id: 3,
    title: "A Criança do Espelho Parado",
    teaser:
      "Relatos fragmentados sobre uma criança que aparece em fotografias de famílias que perderam filhos. Ela nunca está sozinha, mas ninguém a reconhece.",
    tags: ["Fotografia", "Morte", "Infância"],
    fullText:
      "Dezessete famílias diferentes. Mesma criança. Ela sempre aparece ao fundo, levemente desfocada. Em alguns casos, está segurando a mão de alguém que já morreu. As fotografias originais nunca mostram a criança antes da revelação. Arquivos digitais permanecem inalterados. Apenas as cópias físicas são afetadas.",
  },
  {
    id: 4,
    title: "Precisão Fatal",
    teaser:
      "Um relojoeiro em uma cidade do interior constrói relógios que marcam a hora da morte de seus donos. Ele afirma não ser o autor dos mecanismos.",
    tags: ["Tempo", "Morte", "Objeto", "Ritual"],
    fullText:
      "Os relógios param no momento exato da morte de seus proprietários, mesmo quando não estão sendo usados ou quando a bateria já deveria ter acabado. Em um caso documentado, o relógio de um policial parou às 14h37. Ele morreu em um tiroteio exatamente naquele horário, três anos depois. O relojoeiro desapareceu em 2008. Sua oficina foi encontrada vazia, exceto por 23 relógios parados em horários diferentes.",
  },
  {
    id: 5,
    title: "Fita de Neve",
    teaser:
      "Uma fita VHS etiquetada apenas como '█████' circula em mercados de pulga. Quem a assiste relata ver sua própria casa vazia, filmada de ângulos impossíveis.",
    tags: ["Vídeo", "Vigilância", "Paranoia"],
    fullText:
      "A gravação dura exatamente 47 minutos. Não há som, apenas estática visual ocasional. As filmagens mostram a residência atual do espectador, mesmo que a pessoa tenha se mudado recentemente. Em três casos verificados, objetos vistos na fita apareceram fisicamente nas casas dias depois. A origem da gravação nunca foi identificada. Cópias digitais se corrompem após 72 horas.",
  },
  {
    id: 6,
    title: "A Rua Que Não Existe",
    teaser:
      "GPS e mapas mostram uma rua em uma cidade fria ao norte. Moradores afirmam que ela nunca existiu. Entregas são feitas lá regularmente.",
    tags: ["Localização", "Esquecimento", "Cidade"],
    fullText:
      "Correspondências são enviadas para endereços naquela rua. Carteiros confirmam as entregas. Mas ninguém consegue visitar o local intencionalmente. Fotografias mostram apenas neblina densa. Em 2006, um investigador passou uma noite inteira procurando. Seu GPS o levou em círculos por 9 horas. Ele encontrou uma carta endereçada a si mesmo na caixa de correio de sua casa no dia seguinte. Estava datada de três semanas no futuro.",
  },
  {
    id: 7,
    title: "O Culto da Precisão",
    teaser:
      "Documentos fragmentados sobre um grupo obcecado por sincronização temporal. Eles acreditavam que alinhando eventos exatos, poderiam 'congelar' um momento para sempre.",
    tags: ["Culto", "Ritual", "Tempo", "Paradoxo"],
    fullText:
      "O grupo operava entre 1998 e 2005. Seus rituais envolviam sincronizar relógios, batimentos cardíacos e até respiração de múltiplos participantes. O objetivo declarado era 'aprisionar um instante perfeito'. O último ritual documentado terminou em tragédia. Sete membros foram encontrados mortos em um porão, todos com a mesma hora marcada em seus relógios de pulso. A autópsia revelou que eles morreram em momentos diferentes, mas seus corpos apresentavam decomposição idêntica.",
  },
  {
    id: 8,
    title: "Luz Estática",
    teaser:
      "Crianças de uma escola primária desenharam a mesma figura por três semanas seguidas. Uma silhueta feita de ruído branco. Nenhum professor havia ensinado sobre ela.",
    tags: ["Infância", "Escola", "Símbolo"],
    fullText:
      "127 desenhos. Mesma figura. Os professores não conseguiam lembrar de ter dado qualquer instrução relacionada. Quando questionadas, as crianças diziam que 'ela aparecia quando a luz piscava'. A escola foi reformada em 2004. Durante a demolição de uma parede, encontraram fotografias Polaroid de todas as crianças que haviam feito os desenhos. As fotos foram tiradas 15 anos antes de elas nascerem.",
  },
  {
    id: 9,
    title: "Protocolo [INCOMPLETO]",
    teaser:
      "Arquivo parcialmente corrompido sobre um protocolo de contenção. O texto menciona 'recorrência cíclica' e 'vigilância perpétua'. O resto é ilegível.",
    tags: ["Documento", "Protocolo", "Ordem"],
    fullText:
      "Este registro foi recuperado de um servidor abandonado. Grande parte do conteúdo está ilegível. O que pode ser decifrado menciona 'indivíduos anômalos que representam perigo não por suas ações, mas por sua existência'. Há referências a 'famílias com histórico de manipulação temporal' e 'contenção através de observação'. O documento termina abruptamente com: 'Se o ciclo se repetir, a Ordem deve—' [resto corrompido].",
  },
  {
    id: 10,
    title: "Os Nomes Que Não Podem Ser Escritos",
    teaser:
      "Certos nomes desaparecem de documentos escritos à mão. Testemunhas afirmam tê-los visto, mas não conseguem lembrar o que estava escrito.",
    tags: ["Esquecimento", "Nome", "Paranoia"],
    fullText:
      "Há uma lista não oficial de 'nomes resistentes'. Quando escritos em papel, eles gradualmente desaparecem da memória do escritor. Arquivos digitais permanecem intactos, mas causam desconforto ao serem lidos. Em casos extremos, pessoas que insistem em falar esses nomes em voz alta relatam sensação de serem observadas. Um pesquisador documentou 43 casos. Ele desapareceu em 2009. Seu último e-mail dizia: 'Descobri por que alguns nomes não devem ser lembrados. Eles lembram de nós também.'",
  },
]

// Get all unique tags
const allTags = [...new Set(records.flatMap((r) => r.tags))]

// State
let activeFilter = null

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeCensoredText()
  renderRecords(records)
  renderTagFilter()
  initializeSearch()
  initializeClock()
  initializeModal()
})

// Censored Text Handler
function initializeCensoredText() {
  const censoredElements = document.querySelectorAll(".censored")
  censoredElements.forEach((elem) => {
    elem.addEventListener("click", function () {
      if (!this.classList.contains("revealed")) {
        this.textContent = this.getAttribute("data-text")
        this.classList.add("revealed")
      }
    })
  })
}

// Render Records
function renderRecords(recordsToShow) {
  const container = document.getElementById("recordsList")
  container.innerHTML = ""

  recordsToShow.forEach((record) => {
    const card = document.createElement("div")
    card.className = "record-card"
    card.onclick = () => openModal(record)

    card.innerHTML = `
            <h4>${record.title}</h4>
            <p class="teaser">${record.teaser}</p>
            <div class="record-tags">
                ${record.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
        `

    container.appendChild(card)
  })
}

// Render Tag Filter
function renderTagFilter() {
  const container = document.getElementById("tagFilter")
  allTags.forEach((tag) => {
    const tagElem = document.createElement("span")
    tagElem.className = "tag"
    tagElem.textContent = tag
    tagElem.onclick = () => filterByTag(tag)
    container.appendChild(tagElem)
  })
}

// Filter by Tag
function filterByTag(tag) {
  activeFilter = tag
  const filtered = records.filter((r) => r.tags.includes(tag))
  renderRecords(filtered)
  document.getElementById("clearFilter").style.display = "block"
}

// Clear Filter
document.getElementById("clearFilter").addEventListener("click", function () {
  activeFilter = null
  renderRecords(records)
  this.style.display = "none"
})

// Search
function initializeSearch() {
  const searchInput = document.getElementById("searchInput")
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim()

    if (query === "") {
      renderRecords(records)
      return
    }

    const filtered = records.filter((r) => {
      return (
        r.title.toLowerCase().includes(query) ||
        r.teaser.toLowerCase().includes(query) ||
        r.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    })

    renderRecords(filtered)
  })
}

// Clock with Glitches
function initializeClock() {
  const clockDisplay = document.getElementById("clockDisplay")
  let glitchActive = false

  function updateClock() {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2, "0")

    // Random glitch effect (5% chance per second)
    if (Math.random() < 0.05 && !glitchActive) {
      glitchActive = true
      const glitchTypes = [
        () => `${hours}:${minutes}:--`,
        () => `--:${minutes}:${seconds}`,
        () => `${hours}:--:${seconds}`,
        () => `88:88:88`,
      ]
      const glitch = glitchTypes[Math.floor(Math.random() * glitchTypes.length)]
      clockDisplay.textContent = glitch()

      setTimeout(() => {
        glitchActive = false
      }, 200)
    } else if (!glitchActive) {
      clockDisplay.textContent = `${hours}:${minutes}:${seconds}`
    }
  }

  updateClock()
  setInterval(updateClock, 1000)
}

// Modal
function initializeModal() {
  const modal = document.getElementById("recordModal")
  const closeBtn = document.querySelector(".close")

  closeBtn.onclick = () => {
    modal.style.display = "none"
  }

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none"
    }
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.style.display = "none"
    }
  })
}

function openModal(record) {
  const modal = document.getElementById("recordModal")
  const modalBody = document.getElementById("modalBody")

  modalBody.innerHTML = `
        <h4>${record.title}</h4>
        <div class="record-tags">
            ${record.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="full-text">
            <p>${record.fullText}</p>
        </div>
        <div class="archivist-note" style="margin-top: 20px;">
            <strong>[Nota do Arquivista]</strong> Registro catalogado e preservado. Autenticidade não verificável. Padrões detectados.
        </div>
    `

  modal.style.display = "block"
}

// Logo Glitch Effect
document.querySelector(".logo").addEventListener("mouseenter", function () {
  if (Math.random() < 0.3) {
    this.style.letterSpacing = "3px"
    setTimeout(() => {
      this.style.letterSpacing = "0px"
    }, 100)
  }
})
