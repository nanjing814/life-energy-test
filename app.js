// 生命能量状态五维测评 - 主逻辑（完整修复版）
// 修复了缺失的变量定义，确保结果页正常显示

// 能量状态定义 - 必须放在DOMContentLoaded之前
const energyStates = [
    {
        name: "新生萌芽期",
        emoji: "🌱",
        minScore: 25,
        maxScore: 50,
        description: "你的生命能量正在苏醒，如同春天的新芽，充满潜力但需要更多滋养。",
        strengths: ["有成长的意愿", "开始自我觉察", "愿意尝试改变"],
        growthAreas: ["建立稳定的自我认知", "学习情绪管理技巧", "培养日常正念习惯"],
        recommendations: ["每天给自己5分钟安静时间", "记录一件今天感恩的小事", "尝试一次深呼吸练习"]
    },
    {
        name: "稳定生长期",
        emoji: "🌿",
        minScore: 51,
        maxScore: 70,
        description: "你的生命能量稳定增长，如同茁壮成长的植物，正在建立内在根基。",
        strengths: ["有一定的自我觉察能力", "能够识别情绪", "开始建立健康习惯"],
        growthAreas: ["深化自我认知", "提升情绪调节能力", "建立支持系统"],
        recommendations: ["每周进行一次自我反思", "练习接纳不完美的自己", "寻找一个成长伙伴"]
    },
    {
        name: "绽放繁荣期",
        emoji: "🌸",
        minScore: 71,
        maxScore: 85,
        description: "你的生命能量充沛绽放，如同盛开的花朵，展现内在的美丽与力量。",
        strengths: ["良好的自我认知", "情绪管理能力强", "有明确的人生方向"],
        growthAreas: ["深化灵性成长", "扩展影响力", "培养领导力"],
        recommendations: ["分享你的成长经验", "指导他人成长", "探索更深层的生命意义"]
    },
    {
        name: "硕果累累期",
        emoji: "🍎",
        minScore: 86,
        maxScore: 100,
        description: "你的生命能量丰盛圆满，如同结满果实的树木，能够滋养自己与他人。",
        strengths: ["深刻的自我认知", "卓越的情绪智慧", "清晰的人生使命"],
        growthAreas: ["持续精进", "传承智慧", "创造更大价值"],
        recommendations: ["成为他人的灯塔", "创作有影响力的内容", "建立支持他人成长的系统"]
    }
];

// 维度配置
const dimensions = {
    "静·觉察力": { maxScore: 20 },
    "觉·接纳度": { maxScore: 20 },
    "开·认知重构": { maxScore: 20 },
    "愿·内在动力": { maxScore: 20 },
    "行·行动力": { maxScore: 20 }
};

// 分析模板
const analysisTemplates = {
    "静·觉察力": {
        low: "觉察力是你的成长起点。建议从每天5分钟的静心观察开始，留意自己的情绪变化和身体感受。",
        medium: "你已具备基本的觉察能力。可以尝试更深入地探索情绪背后的需求，提升自我认知的深度。",
        high: "你的觉察力非常出色！继续保持这份自我观察的习惯，它将成为你内在成长的指南针。"
    },
    "觉·接纳度": {
        low: "接纳是自我和解的开始。尝试对自己说'我允许自己有这样的感受'，从接纳小情绪开始练习。",
        medium: "你正在学习接纳的艺术。继续练习无条件接纳自己，包括那些'不够好'的部分。",
        high: "你的接纳度很高！这种自我包容的能力让你在变化中保持内心的稳定与平和。"
    },
    "开·认知重构": {
        low: "认知重构是改变的开始。当负面想法出现时，尝试问自己'有没有另一种看待方式？'",
        medium: "你已开始重构认知。继续练习用成长型思维看待挑战，把困难视为学习机会。",
        high: "你的认知重构能力很强！这种灵活的思维方式让你在困境中也能找到出路和希望。"
    },
    "愿·内在动力": {
        low: "内在动力需要被唤醒。探索什么对你真正重要，找到那个能点燃你热情的生命愿景。",
        medium: "你已找到一些内在动力。继续明确你的核心价值观，让它们成为你前进的指南针。",
        high: "你的内在动力充沛！清晰的生命愿景让你在成长道路上坚定而有方向。"
    },
    "行·行动力": {
        low: "行动力从一小步开始。设定一个微小但确定的目标，比如'今天做一件让自己开心的小事'。",
        medium: "你已具备一定的行动力。继续将想法转化为具体行动，建立持续行动的习惯。",
        high: "你的行动力很强！这种将愿景落地的能力让你在成长道路上稳步前进。"
    }
};

// 原有的主逻辑从这里开始
document.addEventListener('DOMContentLoaded', function() {
    // 状态管理
    let currentQuestionIndex = 0;
    let answers = new Array(questions.length).fill(null);
    let userScores = {
        "静·觉察力": 0,
        "觉·接纳度": 0,
        "开·认知重构": 0,
        "愿·内在动力": 0,
        "行·行动力": 0
    };
    
    // DOM元素
    const introContainer = document.getElementById('introContainer');
    const questionsContainer = document.getElementById('questionsContainer');
    const loadingContainer = document.getElementById('loadingContainer');
    const resultContainer = document.getElementById('resultContainer');
    const startBtn = document.getElementById('startBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const dimensionTitle = document.getElementById('dimensionTitle');
    const dimensionDesc = document.getElementById('dimensionDesc');
    
    // 初始化
    initApp();
    
    function initApp() {
        // 绑定事件
        startBtn.addEventListener('click', startTest);
        prevBtn.addEventListener('click', showPreviousQuestion);
        nextBtn.addEventListener('click', showNextQuestion);
        
        // 初始化进度
        updateProgress();
    }
    
    function startTest() {
        introContainer.classList.remove('active');
        questionsContainer.classList.add('active');
        showQuestion(currentQuestionIndex);
    }
    
    function showQuestion(index) {
        const question = questions[index];
        
        // 更新维度信息
        dimensionTitle.textContent = question.dimension;
        dimensionDesc.textContent = question.dimensionDesc;
        
        // 更新问题文本
        questionText.textContent = `${index + 1}. ${question.text}`;
        
        // 清空选项
        optionsContainer.innerHTML = '';
        
        // 创建选项
        question.options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            if (answers[index] === option.id) {
                optionElement.classList.add('selected');
            }
            
            optionElement.innerHTML = `
                <span class="option-letter">${option.id}</span>
                <span class="option-text">${option.text}</span>
            `;
            
            optionElement.addEventListener('click', () => selectOption(index, option.id));
            optionsContainer.appendChild(optionElement);
        });
        
        // 更新按钮状态
        prevBtn.disabled = index === 0;
        nextBtn.textContent = index === questions.length - 1 ? '查看结果' : '下一题';
        
        // 更新进度
        updateProgress();
    }
    
    function selectOption(questionIndex, optionId) {
        // 移除之前的选择
        const options = optionsContainer.querySelectorAll('.option');
        options.forEach(opt => opt.classList.remove('selected'));
        
        // 标记当前选择
        const selectedOption = Array.from(options).find(opt => 
            opt.querySelector('.option-letter').textContent === optionId
        );
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
        
        // 保存答案
        answers[questionIndex] = optionId;
        
        // 启用下一题按钮
        nextBtn.disabled = false;
    }
    
    function showPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
        }
    }
    
    function showNextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            // 确保已选择答案
            if (answers[currentQuestionIndex] === null) {
                alert('请先选择答案再继续');
                return;
            }
            
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            // 最后一题，计算结果显示结果
            if (answers[currentQuestionIndex] === null) {
                alert('请先选择答案再查看结果');
                return;
            }
            
            calculateResults();
        }
    }
    
    function updateProgress() {
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `第${currentQuestionIndex + 1}题 / 共${questions.length}题`;
    }
    
    function calculateResults() {
        // 显示加载界面
        questionsContainer.classList.remove('active');
        loadingContainer.classList.add('active');
        
        // 计算维度分数
        questions.forEach((question, index) => {
            const answerId = answers[index];
            if (answerId) {
                const selectedOption = question.options.find(opt => opt.id === answerId);
                if (selectedOption) {
                    userScores[question.dimension] += selectedOption.score;
                }
            }
        });
        
        // 计算总分
        const totalScore = Object.values(userScores).reduce((sum, score) => sum + score, 0);
        
        // 确定能量状态
        const userState = energyStates.find(state => 
            totalScore >= state.minScore && totalScore <= state.maxScore
        ) || energyStates[0];
        
        // 生成维度分析
        const dimensionAnalysis = {};
        Object.keys(userScores).forEach(dimension => {
            const score = userScores[dimension];
            const maxScore = dimensions[dimension].maxScore;
            const percentage = (score / maxScore) * 100;
            
            let level = 'low';
            if (percentage >= 70) level = 'high';
            else if (percentage >= 40) level = 'medium';
            
            dimensionAnalysis[dimension] = {
                score,
                maxScore,
                percentage,
                level,
                analysis: analysisTemplates[dimension][level]
            };
        });
        
        // 延迟显示结果（模拟分析过程）
        setTimeout(() => {
            loadingContainer.classList.remove('active');
            resultContainer.classList.add('active');
            displayResults(totalScore, userState, dimensionAnalysis);
        }, 1500);
    }
    
    function displayResults(totalScore, userState, dimensionAnalysis) {
        // 创建结果页面HTML
        resultContainer.innerHTML = `
            <div class="result-header">
                <h2 class="result-title">你的生命能量状态报告</h2>
                <p class="result-subtitle">基于25道题的深度分析，为你揭示内在能量状态</p>
            </div>
            
            <div class="score-display">
                <div class="total-score">${totalScore}<span style="font-size: 24px;">/100</span></div>
                <div class="score-label">综合能量分数</div>
                <div class="state-badge">${userState.emoji} ${userState.name}</div>
            </div>
            
            <div class="chart-container">
                <div class="chart-title">五维能量雷达图</div>
                <canvas id="radarChart"></canvas>
            </div>
            
            <div class="dimension-scores" id="dimensionScores"></div>
            
            <div class="analysis-section">
                <h3 class="section-title">能量状态分析</h3>
                
                <div class="state-description">
                    <div class="state-name">${userState.emoji} ${userState.name}</div>
                    <div class="state-desc">${userState.description}</div>
                </div>
                
                <div class="strengths-list">
                    <div class="list-title"><i class="fas fa-star"></i> 你的优势</div>
                    <ul class="list-items">
                        ${userState.strengths.map(strength => `<li class="list-item">${strength}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="growth-list">
                    <div class="list-title"><i class="fas fa-seedling"></i> 成长空间</div>
                    <ul class="list-items">
                        ${userState.growthAreas.map(area => `<li class="list-item">${area}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="recommendations">
                    <div class="list-title"><i class="fas fa-heart"></i> 送给你的人生锦囊</div>
                    ${userState.recommendations.map(rec => `
                        <div class="recommendation-item">
                            <div class="recommendation-text">${rec}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="action-buttons">
                <button class="action-btn action-btn-primary" id="saveResultBtn">
                    <i class="fas fa-save"></i> 保存结果
                </button>
                <button class="action-btn action-btn-secondary" id="retakeTestBtn">
                    <i class="fas fa-redo"></i> 重新测试
                </button>
            </div>
            
            <div class="wechat-section">
                <div class="wechat-title">
                    <i class="fab fa-weixin"></i> 领取深度解析
                </div>
                <div class="wechat-desc">
                    添加南静老师微信，领取一次 <strong>1v1个性化深度解析</strong>
                </div>
                <div class="wechat-info">
                    <div class="wechat-id">微信：loveseed001</div>
                    <div class="wechat-note">添加时请备注"测评解析"</div>
                </div>
                <button class="wechat-btn" id="copyWechatBtn">
                    <i class="fas fa-copy"></i> 复制微信号
                </button>
            </div>
            
            <div class="footer-links">
                <a href="#" id="privacyLink">隐私政策</a> · 
                <a href="#" id="contactLink">联系我们</a> · 
                <a href="#" id="shareWechat">分享给朋友</a> · 
                <a href="#" id="copyLink">复制测评链接</a>
            </div>
        `;
        
        // 渲染雷达图
        renderRadarChart(dimensionAnalysis);
        
        // 渲染维度分数
        renderDimensionScores(dimensionAnalysis);
        
        // 绑定结果页面事件
        bindResultEvents(totalScore, userState, dimensionAnalysis);
    }
    
    function renderRadarChart(dimensionAnalysis) {
        const ctx = document.getElementById('radarChart').getContext('2d');
        
        // 如果已有图表实例，先销毁
        if (window.radarChartInstance) {
            window.radarChartInstance.destroy();
        }
        
        const labels = Object.keys(dimensionAnalysis);
        const data = labels.map(dim => dimensionAnalysis[dim].percentage);
        
        window.radarChartInstance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: '能量分数',
                    data: data,
                    backgroundColor: 'rgba(139, 90, 43, 0.2)',
                    borderColor: 'rgba(139, 90, 43, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(139, 90, 43, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4
                }]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        },
                        pointLabels: {
                            font: {
                                size: 14,
                                family: "'PingFang SC', 'Microsoft YaHei', sans-serif"
                            },
                            color: '#5D4037'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                responsive: true,
                maintainAspectRatio: true
            }
        });
    }
    
    function renderDimensionScores(dimensionAnalysis) {
        const container = document.getElementById('dimensionScores');
        container.innerHTML = '';
        
        Object.entries(dimensionAnalysis).forEach(([dimension, data]) => {
            const scoreElement = document.createElement('div');
            scoreElement.className = 'dimension-score';
            
            const percentage = Math.round(data.percentage);
            let levelClass = 'score-low';
            if (percentage >= 70) levelClass = 'score-high';
            else if (percentage >= 40) levelClass = 'score-medium';
            
            scoreElement.innerHTML = `
                <div class="dimension-name">${dimension}</div>
                <div class="score-bar-container">
                    <div class="score-bar ${levelClass}" style="width: ${percentage}%"></div>
                </div>
                <div class="score-value">${percentage}%</div>
            `;
            
            container.appendChild(scoreElement);
        });
    }
    
    function bindResultEvents(totalScore, userState, dimensionAnalysis) {
        // 保存结果
        document.getElementById('saveResultBtn').addEventListener('click', function() {
            const resultData = {
                date: new Date().toLocaleString('zh-CN'),
                totalScore: totalScore,
                energyState: userState.name,
                dimensionScores: dimensionAnalysis,
                userState: user
