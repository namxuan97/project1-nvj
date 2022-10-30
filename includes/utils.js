function group_by(n) {
    var indices = [];
    for (var i = 1; i <= n; i++) {
      indices.push(i);
    }
    return `GROUP BY ${indices.join(", ")}`;
  }
  
module.exports = { group_by };

  
