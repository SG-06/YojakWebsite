const tabContent = document.getElementById("tab-content");
const tabButtons = document.querySelectorAll(".tab-btn");

let currentTab = "reading";
let draggedItem = null;
let currentPassageIndex = 0;

function renderTab(tabKey) {
  currentTab = tabKey;
  const section = englishLabData[tabKey];

  tabContent.innerHTML = `
    <section>
      <h2 class="section-title">${section.title}</h2>
      <p class="section-desc">${section.description}</p>
      <div class="activity-grid">
        ${section.activities.map(activity => renderActivity(activity)).join("")}
      </div>
    </section>  `;

  if (tabKey === "reading") {
    showPassageSet(0);
  }

  attachEventHandlers();
}

function renderActivity(activity) {
  return `
    <div class="activity-card" id="${activity.id}">
      <div class="tag">${activity.tag}</div>
      <h3>${activity.title}</h3>

      <div class="theory-box">
        <h4>Theory</h4>
        <p>${activity.theory}</p>
      </div>

      <div class="stimulator-box">
        ${renderStimulator(activity)}
      </div>
    </div>
  `;
}

function renderStimulator(activity) {
  const stim = activity.stimulator;

  if (activity.id === "read1") {
    const navButtons = stim.passages.map((p, idx) => `
      <button class="primary-btn passage-select-btn ${idx === 0 ? 'active' : ''}" onclick="showPassageSet(${idx})">${p.name}</button>
    `).join("");

    const displayPanes = stim.passages.map((p, idx) => `
      <div class="passage-view-block ${idx === 0 ? '' : 'hidden'}" id="passage-view-${idx}">
        <div class="passage-display-pane"><p>${p.text}</p></div>
        <div class="quiz-box">
          <h4>Quiz (10 Questions)</h4>
          <div class="mcq-list">
            ${p.mcqs.map((mcq, qIdx) => `
              <div class="output-box mcq-block" data-passage="${idx}" data-qindex="${qIdx}">
                <p><strong>Q${qIdx + 1}.</strong> ${mcq.question}</p>
                ${mcq.options.map((option, oIdx) => `
                  <button class="option-btn reading-mcq-option" data-answer="${oIdx}" onclick="handleReadingMcq(this, ${idx}, ${qIdx}, ${oIdx})">${option}</button>
                `).join("")}
                <div class="feedback mcq-feedback"></div>
              </div>
            `).join("")}
          </div>
          <div class="activity-actions">
            <button class="primary-btn" onclick="gradeReadingPassage(${idx})">Grade Passage</button>
          </div>
          <div class="feedback score-box hidden" id="reading-feedback-${idx}"></div>
        </div>
      </div>
    `).join("");

    return `
      <div class="passage-nav-container">${navButtons}</div>
      <div class="passages-wrapper">${displayPanes}</div>
    `;
  }

  if (stim.type === "missingClue") {
    const passageHtml = stim.passage.map(line => {
      return `<p>${line.replace(/__BLANK_(\d+)__/g, (_, num) => {
        return `<span class="blank-slot" data-answer-key="BLANK_${num}">Drop here</span>`;
      })}</p>`;
    }).join("");

    const optionsHtml = stim.options.map((opt) => `
      <div class="drag-item" draggable="true" data-text="${opt}">${opt}</div>
    `).join("");

    return `
      <h4>${stim.title}</h4>
      <div class="missing-passage">${passageHtml}</div>
      <div class="draggable-options">${optionsHtml}</div>
      <div class="activity-actions">
        <button class="primary-btn check-missing-btn" data-activity="${activity.id}">Check Answers</button>
        <button class="secondary-btn reset-missing-btn" data-activity="${activity.id}">Reset</button>
      </div>
      <div class="feedback missing-feedback" id="${activity.id}-missing-feedback"></div>
      <div class="quiz-box">
        <h4>Quiz</h4>
        ${renderQuiz(activity)}
      </div>
    `;
  }

  if (stim.type === "figureDetective") {
    const optionsHtml = stim.options.map(opt => `
      <div class="figure-chip" data-value="${opt}" data-activity="${activity.id}">${opt}</div>
    `).join("");

    return `
      <h4>${stim.title}</h4>
      <div class="detective-poem">${stim.poem}</div>
      <p class="small-note">Select the five figure of speech clues you can identify from the poem (in sequential row order).</p>
      <div class="figure-options">${optionsHtml}</div>
      <div class="activity-actions">
        <button class="primary-btn check-figure-btn" data-activity="${activity.id}">Check Detective Answers</button>
        <button class="secondary-btn reset-figure-btn" data-activity="${activity.id}">Reset</button>
      </div>
      <div class="feedback figure-feedback" id="${activity.id}-figure-feedback"></div>
      <div class="quiz-box">
        <h4>Quiz</h4>
        ${renderQuiz(activity)}
      </div>
    `;
  }

  if (stim.type === "sentenceBuilder") {
    const questionBlocks = stim.questions.map((q, index) => `
      <div class="output-box sentence-builder-block" data-activity="${activity.id}" data-index="${index}">
        <h4>Question ${index + 1}</h4>
        <div class="sentence-area" data-correct="${q.correct}"></div>
        <div class="word-bank">
          ${shuffleArray([...q.words]).map(word => `
            <div class="word-item" draggable="true" data-word="${word}">${word}</div>
          `).join("")}
        </div>
        <div class="activity-actions">
          <button class="primary-btn check-sentence-btn">Check Sentence</button>
          <button class="secondary-btn reset-sentence-btn">Reset</button>
        </div>
        <div class="feedback sentence-feedback"></div>
      </div>
    `).join("");

    return `
      <h4>${stim.title}</h4>
      ${questionBlocks}
      <div class="quiz-box">
        <h4>Quiz</h4>
        ${renderQuiz(activity)}
      </div>
    `;
  }

  if (stim.type === "letterWriting") {
    return `
      <h4>${stim.title}</h4>
      <p><strong>Prompt:</strong> ${stim.prompt}</p>
      <textarea class="notebook" placeholder="Start writing here..."></textarea>
      <div class="activity-actions">
        <button class="primary-btn save-writing-btn">Save Writing</button>
        <button class="secondary-btn clear-writing-btn">Clear</button>
      </div>
      <div class="feedback writing-feedback"></div>
      <div class="quiz-box">
        <h4>Quiz</h4>
        ${renderQuiz(activity)}
      </div>
    `;
  }

  if (stim.type === "pictureComp") {
    return `
      <h4>${stim.title}</h4>
      <div class="image-placeholder-box">
        <img src="${stim.imageUrl}" alt="${stim.imagePrompt}" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
      </div>
      <p><strong>Prompt:</strong> ${stim.prompt}</p>
      <textarea class="notebook" placeholder="Write your picture composition descriptive evaluation here..."></textarea>
      <div class="activity-actions">
        <button class="primary-btn save-writing-btn">Save Essay</button>
        <button class="secondary-btn clear-writing-btn">Clear</button>
      </div>
      <div class="feedback writing-feedback"></div>
      <div class="quiz-box">
        <h4>Quiz</h4>
        ${renderQuiz(activity)}
      </div>
    `;
  }

  if (stim.type === "storyEnding") {
    return `
      <h4>${stim.title}</h4>
      <div class="story-box">${stim.story}</div>
      <p><strong>Task:</strong> ${stim.prompt}</p>
      <textarea class="notebook" placeholder="Write your ending here..."></textarea>
      <div class="activity-actions">
        <button class="primary-btn save-story-btn">Save Ending</button>
        <button class="secondary-btn clear-writing-btn">Clear</button>
      </div>
      <div class="feedback writing-feedback"></div>
      <div class="quiz-box">
        <h4>Quiz</h4>
        ${renderQuiz(activity)}
      </div>
    `;
  }

  if (stim.type === "creativeWriting") {
    return `
      <h4>${stim.title}</h4>
      <p><strong>Task Prompt:</strong> ${stim.prompt}</p>
      <textarea class="notebook" placeholder="Unleash your creative narrative layout workspace..."></textarea>
      <div class="activity-actions">
        <button class="primary-btn save-writing-btn">Save Prose</button>
        <button class="secondary-btn clear-writing-btn">Clear</button>
      </div>
      <div class="feedback writing-feedback"></div>
      <div class="quiz-box">
        <h4>Quiz</h4>
        ${renderQuiz(activity)}
      </div>
    `;
  }

  return `<p>Stimulator framework unavailable.</p>`;
}

function renderQuiz(activity) {
  if (!activity.mcqs || activity.mcqs.length === 0) return `<p class="small-note">Review metrics inside simulator workbench panels.</p>`;
  return `
    <div class="mcq-list">
      ${activity.mcqs.map((mcq, qIndex) => `
        <div class="output-box mcq-block" data-activity="${activity.id}" data-qindex="${qIndex}">
          <p><strong>Q${qIndex + 1}.</strong> ${mcq.question}</p>
          ${mcq.options.map((option, oIndex) => `
            <button class="option-btn mcq-option" data-answer="${oIndex}">${option}</button>
          `).join("")}
          <div class="feedback mcq-feedback"></div>
        </div>
      `).join("")}
    </div>
  `;
}

function showPassageSet(index) {
  currentPassageIndex = index;
  document.querySelectorAll(".passage-view-block").forEach((pane, i) => {
    if (i === index) pane.classList.remove("hidden");
    else pane.classList.add("hidden");
  });
  document.querySelectorAll(".passage-select-btn").forEach((btn, i) => {
    if (i === index) btn.classList.add("active");
    else btn.classList.remove("active");
  });
}

function handleReadingMcq(element, passIdx, qIdx, oIdx) {
  const block = element.parentElement;
  const buttons = block.querySelectorAll(".reading-mcq-option");
  buttons.forEach(b => b.classList.remove("selected-option"));
  element.setAttribute("data-selected-user", oIdx);
  
  buttons.forEach(b => {
    b.style.background = "#fff7fb";
    b.style.border = "1px solid #f1d7e6";
  });
  element.style.background = "#eec2ff";
}

function gradeReadingPassage(passIdx) {
  const targetPassage = englishLabData.reading.activities[0].stimulator.passages[passIdx];
  let score = 0;
  const blocks = document.querySelectorAll(`.mcq-block[data-passage="${passIdx}"]`);

  blocks.forEach((block, qIdx) => {
    const correctAns = targetPassage.mcqs[qIdx].answer;
    const buttons = block.querySelectorAll(".reading-mcq-option");
    let selectedIdx = -1;

    buttons.forEach((btn, bIdx) => {
      if (btn.style.background === "rgb(238, 194, 255)") { 
        selectedIdx = bIdx;
      }
    });

    const feedback = block.querySelector(".mcq-feedback");
    buttons.forEach(b => b.disabled = true);

    if (selectedIdx === correctAns) {
      score++;
      if(selectedIdx !== -1) buttons[selectedIdx].style.background = "#dff7e8";
      feedback.textContent = "Correct assertion!";
      feedback.className = "feedback correct mcq-feedback";
    } else {
      if(selectedIdx !== -1) buttons[selectedIdx].style.background = "#ffe3e8";
      buttons[correctAns].style.background = "#dff7e8";
      feedback.textContent = "Incorrect logic pattern.";
      feedback.className = "feedback wrong mcq-feedback";
    }
  });

  const summary = document.getElementById(`reading-feedback-${passIdx}`);
  summary.classList.remove("hidden");
  summary.textContent = `Passage Grading Metric: Verified ${score} out of 10 points correctly.`;
  summary.className = "feedback score-box";
}

function attachEventHandlers() {
  attachDragDrop();
  attachMissingClueButtons();
  attachFigureDetective();
  attachSentenceBuilder();
  attachWritingButtons();
  attachMcqHandlers();
}

function attachDragDrop() {
  const dragItems = document.querySelectorAll(".drag-item, .word-item");
  const blankSlots = document.querySelectorAll(".blank-slot");
  const sentenceAreas = document.querySelectorAll(".sentence-area");

  dragItems.forEach(item => {
    item.addEventListener("dragstart", () => {
      draggedItem = item;
    });
  });

  blankSlots.forEach(slot => {
    slot.addEventListener("dragover", e => e.preventDefault());
    slot.addEventListener("drop", () => {
      if (draggedItem && draggedItem.classList.contains("drag-item")) {
        slot.textContent = draggedItem.dataset.text;
        slot.dataset.userAnswer = draggedItem.dataset.text;
      }
    });
  });

  sentenceAreas.forEach(area => {
    area.addEventListener("dragover", e => e.preventDefault());
    area.addEventListener("drop", () => {
      if (draggedItem && draggedItem.classList.contains("word-item")) {
        const word = draggedItem.dataset.word;
        const span = document.createElement("span");
        span.className = "word-item";
        span.textContent = word;
        span.dataset.word = word;
        
        span.addEventListener("click", () => {
          draggedItem.style.display = "inline-block";
          span.remove();
        });

        area.appendChild(span);
        draggedItem.style.display = "none";
      }
    });
  });
}

function attachMissingClueButtons() {
  document.querySelectorAll(".check-missing-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const activityId = btn.dataset.activity;
      const activity = findActivityById(activityId);
      const slots = document.querySelectorAll(`#${activityId} .blank-slot`);
      let correctCount = 0;

      slots.forEach(slot => {
        const key = slot.dataset.answerKey;
        const correctAnswer = activity.stimulator.answers[key];
        if (slot.dataset.userAnswer === correctAnswer) {
          correctCount++;
          slot.style.background = "#eafaf1";
        } else {
          slot.style.background = "#ffeef1";
        }
      });

      const feedback = document.getElementById(`${activityId}-missing-feedback`);
      if (correctCount === slots.length) {
        feedback.textContent = "Excellent! All missing clues are correct.";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = `You got ${correctCount} out of ${slots.length} correct. Try again.`;
        feedback.className = "feedback wrong";
      }
    });
  });

  document.querySelectorAll(".reset-missing-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const activityId = btn.dataset.activity;
      document.querySelectorAll(`#${activityId} .blank-slot`).forEach(slot => {
        slot.textContent = "Drop here";
        slot.dataset.userAnswer = "";
        slot.style.background = "#fff";
      });
      const feedback = document.getElementById(`${activityId}-missing-feedback`);
      feedback.textContent = "";
    });
  });
}

function attachFigureDetective() {
  document.querySelectorAll(".figure-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const parent = chip.parentElement;
      const selected = parent.querySelectorAll(".figure-chip.selected");
      if (!chip.classList.contains("selected") && selected.length >= 5) return;
      chip.classList.toggle("selected");
    });
  });

  document.querySelectorAll(".check-figure-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const activityId = btn.dataset.activity;
      const activity = findActivityById(activityId);
      const selected = [...document.querySelectorAll(`#${activityId} .figure-chip.selected`)].map(el => el.dataset.value);
      const correctAnswersList = activity.stimulator.correctAnswers;

      let score = 0;
      selected.forEach((val) => {
        if(correctAnswersList.includes(val)) {
           score++;
        }
      });

      const feedback = document.getElementById(`${activityId}-figure-feedback`);
      feedback.textContent = `Evaluation complete. Located ${score} of the targets cleanly.`;
      feedback.className = score >= 4 ? "feedback correct" : "feedback wrong";
    });
  });

  document.querySelectorAll(".reset-figure-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const activityId = btn.dataset.activity;
      document.querySelectorAll(`#${activityId} .figure-chip`).forEach(chip => {
        chip.classList.remove("selected");
      });
      document.getElementById(`${activityId}-figure-feedback`).textContent = "";
    });
  });
}

function attachSentenceBuilder() {
  document.querySelectorAll(".check-sentence-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const block = btn.closest(".sentence-builder-block");
      const area = block.querySelector(".sentence-area");
      const correct = area.dataset.correct.trim();
      const user = [...area.querySelectorAll(".word-item")].map(el => el.dataset.word).join(" ").trim();
      const feedback = block.querySelector(".sentence-feedback");

      if (user.toLowerCase() === correct.toLowerCase()) {
        feedback.textContent = "Correct sentence pattern confirmed!";
        feedback.className = "feedback correct sentence-feedback";
      } else {
        feedback.textContent = `Structure variant mismatch. Intended: "${correct}"`;
        feedback.className = "feedback wrong sentence-feedback";
      }
    });
  });

  document.querySelectorAll(".reset-sentence-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const block = btn.closest(".sentence-builder-block");
      const area = block.querySelector(".sentence-area");
      const bank = block.querySelector(".word-bank");

      area.innerHTML = "";
      const hiddenItems = bank.querySelectorAll(".word-item");
      hiddenItems.forEach(item => {
        item.style.display = "inline-block";
      });

      block.querySelector(".sentence-feedback").textContent = "";
    });
  });
}

function attachWritingButtons() {
  document.querySelectorAll(".save-writing-btn, .save-story-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".stimulator-box");
      const textarea = card.querySelector(".notebook");
      const feedback = card.querySelector(".writing-feedback");

      if (textarea.value.trim().length < 20) {
        feedback.textContent = "Please expand your composition entry before hitting save.";
        feedback.className = "feedback wrong writing-feedback";
      } else {
        feedback.textContent = "Composition securely logged and synchronized successfully.";
        feedback.className = "feedback correct writing-feedback";
      }
    });
  });

  document.querySelectorAll(".clear-writing-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".stimulator-box");
      card.querySelector(".notebook").value = "";
      card.querySelector(".writing-feedback").textContent = "";
    });
  });
}

function attachMcqHandlers() {
  document.querySelectorAll(".mcq-list .mcq-block").forEach(block => {
    const buttons = block.querySelectorAll(".mcq-option");
    if(block.dataset.passage) return; 

    const qIndex = Number(block.dataset.qindex);
    const activityId = block.dataset.activity;
    const activity = findActivityById(activityId);
    if(!activity) return;
    const correctAnswer = activity.mcqs[qIndex].answer;
    const feedback = block.querySelector(".mcq-feedback");

    buttons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.disabled = true);
        if (index === correctAnswer) {
          btn.style.background = "#dff7e8";
          feedback.textContent = "Correct answer!";
          feedback.className = "feedback correct mcq-feedback";
        } else {
          btn.style.background = "#ffe3e8";
          buttons[correctAnswer].style.background = "#dff7e8";
          feedback.textContent = "Wrong answer. The correct option is highlighted.";
          feedback.className = "feedback wrong mcq-feedback";
        }
      });
    });
  });
}

function findActivityById(id) {
  for (const sectionKey in englishLabData) {
    if (englishLabData[sectionKey].activities) {
      const found = englishLabData[sectionKey].activities.find(activity => activity.id === id);
      if (found) return found;
    }
  }
  return null;
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderTab(btn.dataset.tab);
  });
});

renderTab(currentTab);