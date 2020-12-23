
// This shows the HTML page in "ui.html".
figma.showUI(__html__, {width: 340, height: 348});


figma.ui.onmessage = msg => {
/*
  if (msg.type === 'create-rectangles') {
    const nodes: SceneNode[] = [];
    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.name = "Rectangle_" + i;
      rect.fills = [{type: 'SOLID', color: {r: 0.82, g: 0.7, b: 0.55}}];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }
  */
  if (msg.type === 'create-avatar'){
    console.log('create avatar with skin color ' + msg.skinColor);
    const svgString : string = '<svg width="97" height="110" viewBox="0 0 97 110" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="preview-head" fill-rule="evenodd" clip-rule="evenodd" d="M8.19697 36.0053C10.2014 15.7895 27.2568 0 48 0C68.751 0 85.8113 15.8013 87.8053 36.028C88.0344 36.0094 88.2661 36 88.5 36C93.1944 36 97 39.8056 97 44.5V51.5C97 56.1944 93.1944 60 88.5 60C88.3322 60 88.1654 59.9951 88 59.9855V70C88 92.0914 70.0914 110 48 110C25.9086 110 8 92.0914 8 70V59.9855C3.53831 59.7267 0 56.0266 0 51.5V44.5C0 39.907 3.6429 36.1649 8.19697 36.0053Z" fill="#FFCF37"/></svg>';
    const head : FrameNode = figma.createNodeFromSvg(svgString);
    const fills : PluginAPI['mixed'] = clone(head.fills);
    console.log(fills);
    fills[0].color.r = 0;
    head.fills = fills;
    figma.currentPage.appendChild(head);
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};

function clone(val) {
  return JSON.parse(JSON.stringify(val))
}