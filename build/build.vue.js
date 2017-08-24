const dirTree = require('directory-tree');
const tree = dirTree('./src/components', { extensions: /\.vue$/ }, (item, PATH) => {

  const path = item.path.split("\\")
  path.pop()

  const dist = [].concat(path)
  dist[0] = "dist"

  // console.log(`cd ${path.join("\\")}; vue build ${item.path} --dist ${dist.join("\\")} --prod --lib`);
  console.log(`vue build ${item.path} --dist ${dist.join("\\")} --prod --lib`);
});