]]}// 生命能量状态五维测评 - 题目数据（修正版）
const questions = [
    // 第1模块：静·觉察力维度 (1-5题)
    {
        id: 1,
        dimension: "静·觉察力",
        dimensionDesc: "你对自我情绪的感知和理解能力",
        text: "当负面情绪来袭时，你通常：",
        options: [
            { id: "A", text: "能注意到情绪变化，但不知如何处理", score: 2 },
            { id: "B", text: "经常被情绪淹没，无法自拔", score: 1 },
            { id: "C", text: "会观察情绪，思考它想告诉我什么", score: 4 },
            { id: "D", text: "允许自己感受情绪，但不被情绪控制", score: 3 }
        ]
    },
    {
        id: 2,
        dimension: "静·觉察力",
        dimensionDesc: "你对自我情绪的感知和理解能力",
        text: "面对压力时，你的身体反应：",
        options: [
            { id: "A", text: "有明显不适（头痛、胃痛等）", score: 1 },
            { id: "B", text: "会停下来感受身体信号，调整呼吸", score: 4 },
            { id: "C", text: "几乎感觉不到身体变化", score: 3 },
            { id: "D", text: "能注意到紧张感，但继续工作", score: 2 }
        ]
    },
    {
        id: 3,
        dimension: "静·觉察力",
        dimensionDesc: "你对自我情绪的感知和理解能力",
        text: "当别人夸奖你时，你的第一反应：",
        options: [
            { id: "A", text: "感恩对方的看见，也看到自己的成长", score: 4 },
            { id: "B", text: "觉得对方只是客气，不是真心的", score: 1 },
            { id: "C", text: "谢谢对方，心里也认可自己", score: 3 },
            { id: "D", text: "开心但有点不好意思，转移话题", score: 2 }
        ]
    },
    {
        id: 4,
        dimension: "静·觉察力",
        dimensionDesc: "你对自我情绪的感知和理解能力",
        text: "看待自己的过去，你倾向于：",
        options: [
            { id: "A", text: "感恩所有经历，塑造了现在的自己", score: 4 },
            { id: "B", text: "觉得都是别人的错，自己受害", score: 1 },
            { id: "C", text: "接受已经发生，从中学习", score: 3 },
            { id: "D", text: "有很多后悔，觉得当时应该做得更好", score: 2 }
        ]
    },
    {
        id: 5,
        dimension: "静·觉察力",
        dimensionDesc: "你对自我情绪的感知和理解能力",
        text: "当看到别人恩爱时，你的感受：",
        options: [
            { id: "A", text: "为别人高兴，相信自己也值得", score: 4 },
            { id: "B", text: "平静，知道每段关系都有其意义", score: 3 },
            { id: "C", text: "刺痛，觉得为什么自己遇不到", score: 1 },
            { id: "D", text: "羡慕但告诉自己不要比较", score: 2 }
        ]
    },
    
    // 第2模块：觉·接纳度维度 (6-10题)
    {
        id: 6,
        dimension: "觉·接纳度",
        dimensionDesc: "你对自己和他人的接纳程度",
        text: "面对自己的'不完美'，你通常：",
        options: [
            { id: "A", text: "接受人都有缺点，但不太在意", score: 3 },
            { id: "B", text: "严厉批评，要求自己改正", score: 1 },
            { id: "C", text: "看作成长机会，好奇背后的原因", score: 4 },
            { id: "D", text: "努力隐藏，展现最好一面", score: 2 }
        ]
    },
    {
        id: 7,
        dimension: "觉·接纳度",
        dimensionDesc: "你对自己和他人的接纳程度",
        text: "当别人指出你的问题时，你第一反应：",
        options: [
            { id: "A", text: "自责，觉得自己很差", score: 1 },
            { id: "B", text: "防御，解释或反驳", score: 2 },
            { id: "C", text: "理性分析，看是否有道理", score: 4 },
            { id: "D", text: "好奇，想了解对方的视角", score: 3 }
        ]
    },
    {
        id: 8,
        dimension: "觉·接纳度",
        dimensionDesc: "你对自己和他人的接纳程度",
        text: "当感到悲伤时，你通常会：",
        options: [
            { id: "A", text: "允许自己哭一会儿，然后做点别的事", score: 3 },
            { id: "B", text: "尽量压抑，不让别人看出来", score: 1 },
            { id: "C", text: "感受这份悲伤，好奇它想告诉我什么", score: 4 },
            { id: "D", text: "责怪自己不该这么脆弱", score: 2 }
        ]
    },
    {
        id: 9,
        dimension: "觉·接纳度",
        dimensionDesc: "你对自己和他人的接纳程度",
        text: "关于'自我关怀'，你通常：",
        options: [
            { id: "A", text: "顾不上照顾自己，先忙完再说", score: 1 },
            { id: "B", text: "有意识地安排时间照顾自己", score: 3 },
            { id: "C", text: "自我关怀已成为生活的一部分", score: 4 },
            { id: "D", text: "偶尔会对自己好一点，但觉得奢侈", score: 2 }
        ]
    },
    {
        id: 10,
        dimension: "觉·接纳度",
        dimensionDesc: "你对自己和他人的接纳程度",
        text: "面对'过去的伤痛'，你现在：",
        options: [
            { id: "A", text: "能平静地谈论，已经释怀", score: 4 },
            { id: "B", text: "感恩这段经历带来的成长", score: 3 },
            { id: "C", text: "想起来还会难过，但尽量不想", score: 2 },
            { id: "D", text: "不愿回想，尽量逃避", score: 1 }
        ]
    },
    
    // 第3模块：开·认知重构维度 (11-15题)
    {
        id: 11,
        dimension: "开·认知重构",
        dimensionDesc: "你重新构建积极认知的能力",
        text: "看待'离婚/分手'这件事，你认为：",
        options: [
            { id: "A", text: "是一段人生的失败和污点", score: 1 },
            { id: "B", text: "是成长的契机和转折点", score: 4 },
            { id: "C", text: "是人生的一段经历", score: 3 },
            { id: "D", text: "是对方的错，自己受害", score: 2 }
        ]
    },
    {
        id: 12,
        dimension: "开·认知重构",
        dimensionDesc: "你重新构建积极认知的能力",
        text: "面对未来不确定性，你的想法：",
        options: [
            { id: "A", text: "害怕变化，希望一切稳定", score: 2 },
            { id: "B", text: "相信有能力应对各种情况", score: 4 },
            { id: "C", text: "焦虑不安，担心最坏结果", score: 1 },
            { id: "D", text: "顺其自然，船到桥头自然直", score: 3 }
        ]
    },
    {
        id: 13,
        dimension: "开·认知重构",
        dimensionDesc: "你重新构建积极认知的能力",
        text: "关于'自我价值'，你认为：",
        options: [
            { id: "A", text: "每个人都有内在价值", score: 4 },
            { id: "B", text: "经历失败后价值感降低", score: 2 },
            { id: "C", text: "价值在于不断成长和贡献", score: 3 },
            { id: "D", text: "需要他人认可才有价值", score: 1 }
        ]
    },
    {
        id: 14,
        dimension: "开·认知重构",
        dimensionDesc: "你重新构建积极认知的能力",
        text: "关于'人际关系边界'，你通常：",
        options: [
            { id: "A", text: "能明确表达自己的边界", score: 3 },
            { id: "B", text: "既能保护自己，也能尊重他人", score: 4 },
            { id: "C", text: "很难拒绝别人，常常委屈自己", score: 1 },
            { id: "D", text: "有时能拒绝，但会感到内疚", score: 2 }
        ]
    },
    {
        id: 15,
        dimension: "开·认知重构",
        dimensionDesc: "你重新构建积极认知的能力",
        text: "对于'个人成长'，你的态度：",
        options: [
            { id: "A", text: "持续成长已成为生活方式", score: 4 },
            { id: "B", text: "觉得现在这样挺好，不需要改变", score: 1 },
            { id: "C", text: "想改变但不知从何开始", score: 2 },
            { id: "D", text: "正在学习新东西提升自己", score: 3 }
        ]
    },
    
    // 第4模块：愿·内在动力维度 (16-20题)
    {
        id: 16,
        dimension: "愿·内在动力",
        dimensionDesc: "你内在的成长动力和愿景",
        text: "你对未来3-5年的生活规划是：",
        options: [
            { id: "A", text: "很少想未来，觉得想了也没用", score: 1 },
            { id: "B", text: "有一些想法，但不够具体", score: 2 },
            { id: "C", text: "有明确的方向和大致计划", score: 3 },
            { id: "D", text: "有清晰的愿景和具体的实施步骤", score: 4 }
        ]
    },
    {
        id: 17,
        dimension: "愿·内在动力",
        dimensionDesc: "你内在的成长动力和愿景",
        text: "关于'梦想'，你现在：",
        options: [
            { id: "A", text: "梦想破灭，不再相信", score: 1 },
            { id: "B", text: "还有梦想，但觉得遥远", score: 2 },
            { id: "C", text: "已经放弃梦想", score: 3 },
            { id: "D", text: "正在为梦想采取行动", score: 4 }
        ]
    },
    {
        id: 18,
        dimension: "愿·内在动力",
        dimensionDesc: "你内在的成长动力和愿景",
        text: "你现在的动力主要来自：",
        options: [
            { id: "A", text: "证明自己，让别人看得起", score: 2 },
            { id: "B", text: "活出真实自我，贡献价值", score: 4 },
            { id: "C", text: "想过得更好，为自己而活", score: 3 },
            { id: "D", text: "逃避痛苦，不想更糟", score: 1 }
        ]
    },
    {
        id: 19,
        dimension: "愿·内在动力",
        dimensionDesc: "你内在的成长动力和愿景",
        text: "你对自己现在的状态：",
        options: [
            { id: "A", text: "正在努力改变中", score: 3 },
            { id: "B", text: "很不满意，但无力改变", score: 1 },
            { id: "C", text: "想要改变，但不知从何开始", score: 2 },
            { id: "D", text: "接纳现状，持续成长", score: 4 }
        ]
    },
    {
        id: 20,
        dimension: "愿·内在动力",
        dimensionDesc: "你内在的成长动力和愿景",
        text: "面对'一个人'的生活，你：",
        options: [
            { id: "A", text: "珍惜独处时光，专注自我成长", score: 4 },
            { id: "B", text: "享受独处，也期待合适的人", score: 3 },
            { id: "C", text: "感到孤独无助，需要依赖", score: 1 },
            { id: "D", text: "习惯但不喜欢，希望有人陪伴", score: 2 }
        ]
    },
    
    // 第5模块：行·行动力维度 (21-25题)
    {
        id: 21,
        dimension: "行·行动力",
        dimensionDesc: "你将想法转化为行动的能力",
        text: "当有新的想法时，你通常：",
        options: [
            { id: "A", text: "会尝试，但容易放弃", score: 2 },
            { id: "B", text: "想想就算了，不会行动", score: 1 },
            { id: "C", text: "想行动但不知如何开始", score: 3 },
            { id: "D", text: "制定计划，逐步实施", score: 4 }
        ]
    },
    {
        id: 22,
        dimension: "行·行动力",
        dimensionDesc: "你将想法转化为行动的能力",
        text: "面对困难挑战，你的做法：",
        options: [
            { id: "A", text: "抱怨，觉得不公平", score: 1 },
            { id: "B", text: "回避，等别人解决", score: 3 },
            { id: "C", text: "看作学习机会，积极应对", score: 4 },
            { id: "D", text: "尝试解决，但容易气馁", score: 2 }
        ]
    },
    {
        id: 23,
        dimension: "行·行动力",
        dimensionDesc: "你将想法转化为行动的能力",
        text: "面对亲友的关心或议论，你：",
        options: [
            { id: "A", text: "回避，不想谈论", score: 2 },
            { id: "B", text: "坦然面对，不介意外界看法", score: 3 },
            { id: "C", text: "感谢关心，清晰表达自己的边界", score: 4 },
            { id: "D", text: "解释但觉得累", score: 1 }
        ]
    },
    {
        id: 24,
        dimension: "行·行动力",
        dimensionDesc: "你将想法转化为行动的能力",
        text: "关于'爱自己'，你现在：",
        options: [
            { id: "A", text: "顾不上，先处理现实问题", score: 1 },
            { id: "B", text: "知道重要，但做得不够", score: 2 },
            { id: "C", text: "有意识地做一些关爱自己的事", score: 3 },
            { id: "D", text: "爱自己已成为生活习惯", score: 4 }
        ]
    },
    {
        id: 25,
        dimension: "行·行动力",
        dimensionDesc: "你将想法转化为行动的能力",
        text: "关于'生命的意义'，你认为：",
        options: [
            { id: "A", text: "意义在于获得幸福和成功", score: 2 },
            { id: "B", text: "意义在于体验和成长", score: 4 },
            { id: "C", text: "意义在于活出真实自我，服务他人", score: 3 },
            { id: "D", text: "人生就是受苦，没什么意义", score: 1 }
        ]
    }
];

// 维度信息
const dimensions = {
    "静·觉察力": {
        name: "静·觉察力",
        desc: "对自我情绪的感知和理解能力",
        maxScore: 20, // 5题 × 4分
        color: "#8B5A2B"
    },
    "觉·接纳度": {
        name: "觉·接纳度",
        desc: "对自己和他人的接纳程度",
        maxScore: 20,
        color: "#D4A76A"
    },
    "开·认知重构": {
        name: "开·认知重构",
        desc: "重新构建积极认知的能力",
        maxScore: 20,
        color: "#A67C52"
    },
    "愿·内在动力": {
        name: "愿·内在动力",
        desc: "内在的成长动力和愿景",
        maxScore: 20,
        color: "#C19A6B"
    },
    "行·行动力": {
        name: "行·行动力",
        desc: "将想法转化为行动的能力",
        maxScore: 20,
        color: "#8B7355"
    }
};

// 能量状态分级（需要调整，因为最低分是25分）
const energyStates = [
    {
        minScore: 80,
        maxScore: 100,
        name: "自在绽放态",
        emoji: "🌸",
        description: "你的生命能量充沛，内在和谐，能够自如地应对生活挑战，正处于自我实现的阶段。",
        strengths: [
            "高度的自我觉察和情绪管理能力",
            "对自我和他人的深度接纳",
            "积极的认知重构能力",
            "清晰的内在动力和人生方向",
            "强大的行动力和执行力"
        ],
        growthAreas: [
            "继续保持平衡，避免过度消耗",
            "分享你的成长经验，赋能他人",
            "探索更深层次的生命意义"
        ],
        recommendations: [
