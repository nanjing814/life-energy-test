// 数据存储管理 - 使用localStorage保存测评结果
const StorageManager = {
    // 保存测评结果
    saveTestResult: function(resultData) {
        try {
            // 生成唯一ID
            const resultId = 'result_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            
            // 准备保存的数据
            const saveData = {
                id: resultId,
                timestamp: new Date().toISOString(),
                totalScore: resultData.totalScore,
                energyState: resultData.energyState,
                dimensionScores: resultData.dimensionScores,
                answers: resultData.answers,
                userState: resultData.userState
            };
            
            // 获取现有结果
            let allResults = this.getAllResults();
            
            // 添加新结果
            allResults.push(saveData);
            
            // 只保留最近10次结果
            if (allResults.length > 10) {
                allResults = allResults.slice(-10);
            }
            
            // 保存到localStorage
            localStorage.setItem('energyAssessmentResults', JSON.stringify(allResults));
            
            // 保存当前结果ID
            localStorage.setItem('lastResultId', resultId);
            
            return {
                success: true,
                resultId: resultId,
                message: '测评结果已保存'
            };
        } catch (error) {
            console.error('保存测评结果失败:', error);
            return {
                success: false,
                message: '保存失败：' + error.message
            };
        }
    },
    
    // 获取所有测评结果
    getAllResults: function() {
        try {
            const resultsJson = localStorage.getItem('energyAssessmentResults');
            return resultsJson ? JSON.parse(resultsJson) : [];
        } catch (error) {
            console.error('读取测评结果失败:', error);
            return [];
        }
    },
    
    // 获取最后一次测评结果
    getLastResult: function() {
        const allResults = this.getAllResults();
        return allResults.length > 0 ? allResults[allResults.length - 1] : null;
    },
    
    // 根据ID获取特定结果
    getResultById: function(resultId) {
        const allResults = this.getAllResults();
        return allResults.find(result => result.id === resultId) || null;
    },
    
    // 删除测评结果
    deleteResult: function(resultId) {
        try {
            let allResults = this.getAllResults();
            const initialLength = allResults.length;
            
            // 过滤掉要删除的结果
            allResults = allResults.filter(result => result.id !== resultId);
            
            // 保存更新后的结果
            localStorage.setItem('energyAssessmentResults', JSON.stringify(allResults));
            
            return {
                success: true,
                deleted: initialLength > allResults.length,
                message: initialLength > allResults.length ? '结果已删除' : '未找到对应结果'
            };
        } catch (error) {
            console.error('删除测评结果失败:', error);
            return {
                success: false,
                message: '删除失败：' + error.message
            };
        }
    },
    
    // 清空所有测评结果
    clearAllResults: function() {
        try {
            localStorage.removeItem('energyAssessmentResults');
            localStorage.removeItem('lastResultId');
            return {
                success: true,
                message: '所有测评结果已清空'
            };
        } catch (error) {
            console.error('清空测评结果失败:', error);
            return {
                success: false,
                message: '清空失败：' + error.message
            };
        }
    },
    
    // 导出测评结果为JSON文件
    exportResults: function() {
        try {
            const allResults = this.getAllResults();
            if (allResults.length === 0) {
                return {
                    success: false,
                    message: '没有可导出的测评结果'
                };
            }
            
            const exportData = {
                exportDate: new Date().toISOString(),
                totalResults: allResults.length,
                results: allResults
            };
            
            const dataStr = JSON.stringify(exportData, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            
            const exportFileName = `生命能量测评结果_${new Date().toISOString().slice(0,10)}.json`;
            
            return {
                success: true,
                dataUri: dataUri,
                fileName: exportFileName,
                message: '导出数据准备完成'
            };
        } catch (error) {
            console.error('导出测评结果失败:', error);
            return {
                success: false,
                message: '导出失败：' + error.message
            };
        }
    },
    
    // 导入测评结果
    importResults: function(jsonData) {
        try {
            const importData = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
            
            if (!importData.results || !Array.isArray(importData.results)) {
                return {
                    success: false,
                    message: '导入数据格式不正确'
                };
            }
            
            // 获取现有结果
            let allResults = this.getAllResults();
            
            // 合并结果（避免重复）
            const existingIds = new Set(allResults.map(r => r.id));
            const newResults = importData.results.filter(result => !existingIds.has(result.id));
            
            allResults = [...allResults, ...newResults];
            
            // 保存合并后的结果
            localStorage.setItem('energyAssessmentResults', JSON.stringify(allResults));
            
            return {
                success: true,
                importedCount: newResults.length,
                totalCount: allResults.length,
                message: `成功导入${newResults.length}条测评结果，当前共有${allResults.length}条结果`
            };
        } catch (error) {
            console.error('导入测评结果失败:', error);
            return {
                success: false,
                message: '导入失败：' + error.message
            };
        }
    },
    
    // 获取统计信息
    getStatistics: function() {
        const allResults = this.getAllResults();
        
        if (allResults.length === 0) {
            return {
                totalTests: 0,
                averageScore: 0,
                mostCommonState: null,
                dimensionAverages: {},
                testFrequency: {}
            };
        }
        
        // 计算平均分
        const totalScore = allResults.reduce((sum, result) => sum + result.totalScore, 0);
        const averageScore = Math.round(totalScore / allResults.length);
        
        // 找出最常见的能量状态
        const stateCounts = {};
        allResults.forEach(result => {
            const stateName = result.energyState.name;
            stateCounts[stateName] = (stateCounts[stateName] || 0) + 1;
        });
        
        let mostCommonState = null;
        let maxCount = 0;
        Object.entries(stateCounts).forEach(([state, count]) => {
            if (count > maxCount) {
                maxCount = count;
                mostCommonState = state;
            }
        });
        
        // 计算各维度平均分
        const dimensionAverages = {};
        const dimensionKeys = Object.keys(allResults[0].dimensionScores || {});
        
        dimensionKeys.forEach(dimension => {
            const total = allResults.reduce((sum, result) => {
                return sum + (result.dimensionScores[dimension]?.score || 0);
            }, 0);
            dimensionAverages[dimension] = Math.round(total / allResults.length);
        });
        
        // 计算测评频率（按月份）
        const testFrequency = {};
        allResults.forEach(result => {
            const date = new Date(result.timestamp);
            const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            testFrequency[monthKey] = (testFrequency[monthKey] || 0) + 1;
        });
        
        return {
            totalTests: allResults.length,
            averageScore: averageScore,
            mostCommonState: mostCommonState,
            dimensionAverages: dimensionAverages,
            testFrequency: testFrequency,
            lastTestDate: allResults.length > 0 ? allResults[allResults.length - 1].timestamp : null
        };
    },
    
    // 检查存储空间
    checkStorageSpace: function() {
        try {
            const testKey = 'storage_test_' + Date.now();
            const testData = 'x'.repeat(1024); // 1KB测试数据
            
            // 测试写入
            localStorage.setItem(testKey, testData);
            
            // 测试读取
            const retrieved = localStorage.getItem(testKey);
            
            // 清理测试数据
            localStorage.removeItem(testKey);
            
            return {
                available: retrieved === testData,
                message: '本地存储功能正常'
            };
        } catch (error) {
            console.error('存储空间检查失败:', error);
            return {
                available: false,
                message: '本地存储不可用：' + error.message
            };
        }
    }
};

// 导出StorageManager
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StorageManager;
}

// 在浏览器环境中全局可用
if (typeof window !== 'undefined') {
    window.EnergyAssessmentStorage = StorageManager;
}