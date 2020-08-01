const sum = require('./sum');

test('test 1 + 2 equals 3', () => {
	expect(sum(1, 2)).toBe(3);
});
test('test 2 + 2 equals 4', () => {
	expect(sum(2, 2)).toBe(4);
});
// CI
// Lint测试
// 单元测试
// 集成测试
// 部署 & 构建-部署
