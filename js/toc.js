var MAX_LEVEL = 3;

function createHeadingTree() {
  var tree = {
    element: document.body,
    children: []
  };

  var allHeadingsSelector = Array.apply(null, new Array(MAX_LEVEL)).map(function(d, i) {
    return 'h' + (i + 1) + ':not(.nocount)';
  }).join(', ');

  var previousLevel = 0;
  var currentParent = tree;
  [].forEach.call(document.querySelectorAll(allHeadingsSelector), function(heading) {
    var level = parseInt(heading.tagName[1]);

    var treeItem = {
      heading: heading,
      children: []
    };

    if (level == previousLevel) {
      currentParent.children.push(treeItem);
    } else if (level > previousLevel) {
      for (var i = 0; i < level - (previousLevel + 1); i++) {
        var emptyItem = {
          heading: null,
          children: []
        };
        currentParent.children.push(emptyItem);
        currentParent = emptyItem;
      }
      currentParent.children.push(treeItem);
      currentParent = treeItem;
    } else if (level < previousLevel) {
      currentParent = tree;
      for (var i = 0; i < level - 1; i++) {
        currentParent = currentParent.children[currentParent.children.length - 1];
      }
      currentParent.children.push(treeItem);
    }
    previousLevel = level;
  });

  return tree.children;
}

function createToc(container, headings) {
  var item = d3.select(container).append('ol').selectAll('li')
      .data(headings)
    .enter().append('li');

  item.append('a')
      .attr('href', function(d) {
        return '#' + d.heading.id;
      })
      .html(function(d) {
        return d.heading.innerHTML;
      })
      .each(function(d) {
        createToc(this, d.children);
      });
}


var tree = createHeadingTree();
createToc('#toc', tree)
