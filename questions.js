// 生命能量状态五维测评 - 题目数据（修正版）
const questions = [
    // 第1模块：静·觉察力维度 (1-5题)
    {
        id: 1,
        dimension: "静·觉察力",
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
        text: "面对压力时，你的身体反应是：",
        options: [
            { id: "A", text: "经常头痛、胃痛或失眠", score: 1 },
            { id: "B", text: "偶尔有身体不适，但能忍受", score: 2 },
            { id: "C", text: "能觉察到身体紧张，会主动放松", score: 3 },
            { id: "D", text: "身体反应平稳，能快速恢复平衡", score: 4 }
        ]
    },
    {
        id: 3,
        dimension: "静·觉察力",
        text: "你对自己情绪的觉察频率是：",
        options: [
            { id: "A", text: "很少关注自己的情绪", score: 1 },
            { id: "B", text: "情绪强烈时才注意到", score: 2 },
            { id: "C", text: "每天会留意情绪变化", score: 3 },
            { id: "D", text: "时刻保持对情绪的觉察", score: 4 }
        ]
    },
    {
        id: 4,
        dimension: "静·觉察力",
        text: "当意识到自己有负面情绪时，你会：",
        options: [
            { id: "A", text: "压抑或否认它", score: 1 },
            { id: "B", text: "向他人抱怨或发泄", score: 2 },
            { id: "C", text: "尝试分析情绪的来源", score: 3 },
            { id: "D", text: "接纳情绪，与之共处", score: 4 }
        ]
    },
    {
        id: 5,
        dimension: "静·觉察力",
        text: "你对自己身体感受的敏感度是：",
        options: [
            { id: "A", text: "很少注意身体感受", score: 1 },
            { id: "B", text: "只有疼痛时才注意到", score: 2 },
            { id: "C", text: "能觉察到身体的紧张与放松", score: 3 },
            { id: "D", text: "对身体细微变化都很敏感", score: 4 }
        ]
    },

    // 第2模块：觉·接纳度维度 (6-10题)
    {
        id: 6,
        dimension: "觉·接纳度",
        text: "面对自己的缺点或不足，你的态度是：",
        options: [
            { id: "A", text: "很难接受，会自我批评", score: 1 },
            { id: "B", text: "勉强接受，但心里不舒服", score: 2 },
            { id: "C", text: "能接受，但希望改进", score: 3 },
            { id: "D", text: "完全接纳，视为成长机会", score: 4 }
        ]
    },
    {
        id: 7,
        dimension: "觉·接纳度",
        text: "当事情不如预期时，你的反应是：",
        options: [
            { id: "A", text: "抱怨、责怪他人或环境", score: 1 },
            { id: "B", text: "感到沮丧，但能慢慢接受", score: 2 },
            { id: "C", text: "调整期望，寻找解决方案", score: 3 },
            { id: "D", text: "接纳现实，从中学习成长", score: 4 }
        ]
    },
    {
        id: 8,
        dimension: "觉·接纳度",
        text: "你对自己过去的经历（包括挫折）的看法是：",
        options: [
            { id: "A", text: "不愿回想，希望忘记", score: 1 },
            { id: "B", text: "偶尔想起，仍有遗憾", score: 2 },
            { id: "C", text: "能客观看待，已释怀大部分", score: 3 },
            { id: "D", text: "完全接纳，视为宝贵财富", score: 4 }
        ]
    },
    {
        id: 9,
        dimension: "觉·接纳度",
        text: "面对他人的批评或不同意见，你会：",
        options: [
            { id: "A", text: "立即防御或反击", score: 1 },
            { id: "B", text: "表面接受，内心不服", score: 2 },
            { id: "C", text: "认真倾听，理性分析", score: 3 },
            { id: "D", text: "开放接纳，视为成长反馈", score: 4 }
        ]
    },
    {
        id: 10,
        dimension: "觉·接纳度",
        text: "你对生活中'不完美'的接纳程度是：",
        options: [
            { id: "A", text: "追求完美，难以忍受不完美", score: 1 },
            { id: "B", text: "希望完美，但能勉强接受不完美", score: 2 },
            { id: "C", text: "理解完美不存在，能较好接纳", score: 3 },
            { id: "D", text: "全然接纳不完美，发现其中美好", score: 4 }
        ]
    },

    // 第3模块：开·认知重构维度 (11-15题)
    {
        id: 11,
        dimension: "开·认知重构",
        text: "当遇到挫折时，你的第一想法是：",
        options: [
            { id: "A", text: "我真是个失败者", score: 1 },
            { id: "B", text: "为什么倒霉的总是我", score: 2 },
            { id: "C", text: "这是个挑战，我可以学习", score: 3 },
            { id: "D", text: "是对方的错，自己受害", score: 2 }
        ]
    },
    {
        id: 12,
        dimension: "开·认知重构",
        text: "面对困难，你的思维方式是：",
        options: [
            { id: "A", text: "问题导向，聚焦于障碍", score: 1 },
            { id: "B", text: "有些消极，但能尝试解决", score: 2 },
            { id: "C", text: "积极寻找解决方案", score: 3 },
            { id: "D", text: "机会导向，看到成长可能", score: 4 }
        ]
    },
    {
        id: 13,
        dimension: "开·认知重构",
        text: "你对自己能力的看法是：",
        options: [
            { id: "A", text: "我很差，什么都做不好", score: 1 },
            { id: "B", text: "有些方面还行，但不够好", score: 2 },
            { id: "C", text: "我有自己的优势和不足", score: 3 },
            { id: "D", text: "我相信自己能不断成长", score: 4 }
        ]
    },
    {
        id: 14,
        dimension: "开·认知重构",
        text: "当事情进展不顺时，你会如何归因：",
        options: [
            { id: "A", text: "都是我的错", score: 1 },
            { id: "B", text: "主要是外部原因", score: 2 },
            { id: "C", text: "多方面原因，包括自己", score: 3 },
            { id: "D", text: "客观分析，不轻易归因", score: 4 }
        ]
    },
    {
        id: 15,
        dimension: "开·认知重构",
        text: "你对未来的预期通常是：",
        options: [
            { id: "A", text: "悲观，觉得会更糟", score: 1 },
            { id: "B", text: "有些担忧，但抱有希望", score: 2 },
            { id: "C", text: "相对乐观，相信会好转", score: 3 },
            { id: "D", text: "积极创造想要的未来", score: 4 }
        ]
    },

    // 第4模块：愿·内在动力维度 (16-20题)
    {
        id: 16,
        dimension: "愿·内在动力",
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
        text: "你做事情的动力主要来自：",
        options: [
            { id: "A", text: "外部压力或他人期望", score: 1 },
            { id: "B", text: "既有外部压力，也有内在兴趣", score: 2 },
            { id: "C", text: "主要是内在兴趣和价值感", score: 3 },
            { id: "D", text: "强烈的内在使命和热情", score: 4 }
        ]
    },
    {
        id: 18,
        dimension: "愿·内在动力",
        text: "你对自己人生目标的清晰度是：",
        options: [
            { id: "A", text: "很模糊，不知道想要什么", score: 1 },
            { id: "B", text: "有一些想法，但不明确", score: 2 },
            { id: "C", text: "有比较清晰的目标", score: 3 },
            { id: "D", text: "有非常清晰且坚定的目标", score: 4 }
        ]
    },
    {
        id: 19,
        dimension: "愿·内在动力",
        text: "面对想做的事情，你的行动力是：",
        options: [
            { id: "A", text: "很少行动，停留在想象", score: 1 },
            { id: "B", text: "会尝试，但容易放弃", score: 2 },
            { id: "C", text: "能持续行动，遇到困难会调整", score: 3 },
            { id: "D", text: "强烈驱动力，排除万难实现", score: 4 }
        ]
    },
    {
        id: 20,
        dimension: "愿·内在动力",
        text: "你对自我成长的渴望程度是：",
        options: [
            { id: "A", text: "没什么兴趣，维持现状就好", score: 1 },
            { id: "B", text: "有点想改变，但动力不足", score: 2 },
            { id: "C", text: "希望成长，会主动学习", score: 3 },
            { id: "D", text: "强烈渴望，持续追求成长", score: 4 }
        ]
    },

    // 第5模块：行·行动力维度 (21-25题)
    {
        id: 21,
        dimension: "行·行动力",
        text: "当你决定做一件事时，通常：",
        options: [
            { id: "A", text: "很难开始，拖延很久", score: 1 },
            { id: "B", text: "需要他人督促才能开始", score: 2 },
            { id: "C", text: "能较快开始行动", score: 3 },
            { id: "D", text: "立即行动，执行力强", score: 4 }
        ]
    },
    {
        id: 22,
        dimension: "行·行动力",
        text: "面对复杂任务，你的处理方式是：",
        options: [
            { id: "A", text: "感到 overwhelmed，无从下手", score: 1 },
            { id: "B", text: "能分解任务，但执行效率低", score: 2 },
            { id: "C", text: "有效分解，按计划执行", score: 3 },
            { id: "D", text: "高效分解并快速完成", score: 4 }
        ]
    },
    {
        id: 23,
        dimension: "行·行动力",
        text: "你在执行计划时的坚持度是：",
        options: [
            { id: "A", text: "很容易放弃", score: 1 },
            { id: "B", text: "能坚持一段时间", score: 2 },
            { id: "C", text: "比较有毅力，能持续", score: 3 },
            { id: "D", text: "非常坚持，不达目的不罢休", score: 4 }
        ]
    },
    {
        id: 24,
        dimension: "行·行动力",
        text: "面对行动中的困难，你会：",
        options: [
            { id: "A", text: "立即退缩或放弃", score: 1 },
            { id: "B", text: "尝试一下，不行就放弃", score: 2 },
            { id: "C", text: "会想办法克服", score: 3 },
            { id: "D", text: "积极寻找多种解决方案", score: 4 }
        ]
    },
    {
        id: 25,
        dimension: "行·行动力",
        text: "你从想法到行动的转化效率是：",
        options: [
            { id: "A", text: "想法很少转化为行动", score: 1 },
            { id: "B", text: "部分想法能转化为行动", score: 2 },
            { id: "C", text: "大多数想法能落实", score: 3 },
            { id: "D", text: "高效转化，想到就做到", score: 4 }
        ]
    }
];